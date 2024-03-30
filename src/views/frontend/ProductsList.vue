<script>
import Swal from 'sweetalert2';
import PaginationComponent from '@/components/PaginationComponent.vue';

import AllCoffee from '@/assets/coffee_type/AllCoffee.avif';
import Expresso from '@/assets/coffee_type/Expresso.avif';
import Americano from '@/assets/coffee_type/Americano.avif';
import MilkCoffee from '@/assets/coffee_type/MilkCoffee.avif';
import Chocolate from '@/assets/coffee_type/Chocolate.avif';
import Special from '@/assets/coffee_type/Special.avif';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      selectType: '全部商品',
      coffeeType: [
        {
          AllCoffee: '全部商品',
          imgSrc: AllCoffee,
        },
        {
          Expresso: '濃縮咖啡',
          imgSrc: Expresso,
        },
        {
          Americano: '美式咖啡',
          imgSrc: Americano,
        },
        {
          MilkCoffee: '牛奶咖啡',
          imgSrc: MilkCoffee,
        },
        {
          Chocolate: '巧克力咖啡',
          imgSrc: Chocolate,
        },
        {
          Special: '特調咖啡',
          imgSrc: Special,
        }],
      products: [],
      pages: {},
    };
  },
  methods: {
    getImagePath(type) {
      return Object.keys(type)[0];
    },
    updateCategory(category) {
      this.selectType = category;
      if (category === '全部商品') {
        this.getProducts();
      } else {
        this.getProducts(1, category);
      }
    },
    getProducts(page = 1, category = '') {
      const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    productStatement(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="pt-20 mb-6 fz-1 text-center fw-bold text-secondary">{{ selectType }}</h2>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-lg-2" v-for="(type, idx) in coffeeType" :key="idx">
        <div class="card d-flex justify-content-center align-items-center border-0">
            {{ type.imgPath }}
          <img :src="type.imgSrc" width="200" height="200"
            class="img-thumbnail object-fit-cover" :alt="Object.values(type)[0]">
          <div class="card-body">
            <a class="btn text-light-brown stretched-link fz-5"
              @click="updateCategory(Object.values(type)[0])"
            >
              {{ Object.values(type)[0] }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-10 mb-md-20">
    <div class="row">
      <div class="col-md-6 col-lg-3 mb-8" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <div class="card-img-container">
            <img :src="product.imageUrl" class="card-img-top productImg" :alt="product.id">
          </div>
          <div class="card-body text-start">
            <h5 class="card-title fz-7 lh-base fw-bold">{{ product.title }}</h5>
            <p class="card-text">
              <span v-if="product.price === product.origin_price">
                NT$
                <ins class="text-decoration-none">
                  <span class="text-muted fw-bold fz-4 ">{{ product.price }}</span>
                </ins>
              </span>

              <span v-else>
                NT$
                <s class="mr-1">
                  <span class="text-muted fw-normal fz-6 lh-1">{{ product.origin_price }}</span>
                </s>
                <ins class="text-decoration-none">
                  <span class="text-primary fz-4 ">{{ product.price }}</span>
                </ins>
              </span>
            </p>
          </div>
          <div class="card-footer border-0 bg-white text-end">
            <button type="button"
            @click.prevent="productStatement(`${product.id}`)"
            class="w-100 btn btn-primary stretched-link
            mb-5 py-3 text-white fz-6 fw-bold">商品明細</button>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :pages="pages"
      @emit-pages="getProducts"
    />
  </div>
</template>

<style lang="scss" scoped>
.card {
  .card-img-container {
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 85%;
    .productImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-out;
      transform-origin: center center;
    }
  }
  &:hover {
    .productImg {
      transition: all .7s ease-in-out;
      transform: scale(1.1);
    }
  }
}
</style>
