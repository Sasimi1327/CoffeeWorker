<template>
  <div class="container-fluid position-relative text-center overflow-hidden">
    <img src="../../assets/banner.avif" class="img-fluid w-100 mh-100 object-fit-cover">
    <div class="row">
      <div class="col-12 position-absolute top-30 start-70 translate-middle">
        <h2 class="fz-1 text-primary">
          徜徉咖啡的濃香
          <br>
          點亮工作的熱情
        </h2>
      </div>
      <RouterLink to="/products" type="button"
        class="btn-order position-absolute bottom-20 end-10">
        訂購去
      </RouterLink>
    </div>
  </div>

  <div class="container mb-10 mb-md-20">
    <div class="text-center mt-10 mt-md-20 mb-6">
      <h2 class="fz-2 lh-sm fw-normal">新品上市</h2>
      <span class="fz-8 lh-base fw-normal">不一樣的全新滋味</span>
    </div>
    <div class="row pb-8">
      <div class="col-12 col-md-6 col-lg-3"
        v-for="product in newProductShuffle" :key="product.id">
        <div class="card text-center">
          <div class="card-img-container">
            <img :src="product.imageUrl" class="card-img-top">
          </div>
          <div class="card-body">
            <h5 class="card-title mb-6 fz-6
              lh-base fw-bold text-secondary">{{ product.title }}</h5>
            <p class="card-text text-start">
              <small class="text-dark-brown fw-normal fz-6 lh-1">NT$ {{ product.price }}</small>
            </p>
            <a class="btn btn-primary stretched-link
                  w-90 fw-bold py-3 fz-7 text-white"
              @click.prevent="productStatement(`${product.id}`)"
            >商品明細</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-10 my-md-20 py-10 py-md-20 bg-primary">
    <div class="text-center my-6 text-white">
      <h2 class="fz-2 lh-sm fw-normal">咖啡，還是咖啡</h2>
      <span class="fz-8 lh-base fw-normal text-secondary">選豆、挑豆、烘豆、萃取，專注於咖啡</span>
    </div>

    <div class="row mt-4">
      <div class="text-white">
        <div class="row align-items-center">
          <div class="col-md-2"></div>
          <div class="col-md-7 my-5 my-md-10">
            <h6 class="fz-3 mb-6">1. 選豆（Selection）</h6>
            <p class="fz-5 text-secondary">咖啡製作的第一步，
              咖啡師會根據不同的口味偏好和特定的需求選擇合適的咖啡豆。
              選擇過程考慮因素包括咖啡豆的產地、種類、種植海拔、處理方式等。
              精心挑選的咖啡豆是確保一杯優質咖啡的關鍵。</p>
          </div>
        </div>
        <div class="row timeline-inner">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <hr style="border-width: 3px;">
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row align-items-center justify-content-end">
          <div class="col-md-7 my-5 my-md-10 text-md-end">
            <h6 class="fz-3 mb-6 text-start text-lg-end">2. 挑豆（Roasting）</h6>
            <p class="fz-5 text-md-start text-secondary">咖啡豆在烘焙過程中會經歷挑豆的階段，
              這是一種藝術和科學的結合。烘焙師會根據咖啡豆的特性和所需的口味，
              控制烘焙的溫度、時間和烘焙方法，以達到理想的烘焙程度和風味特性。
              烘焙過程會使咖啡豆釋放出豐富的香氣和風味，呈現出不同於生豆的獨特風味。</p>
          </div>
          <div class="col-md-2 text-center"></div>
        </div>
        <div class="row timeline-inner">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <hr style="border-width: 3px;">
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-2"></div>
          <div class="col-md-7 my-5 my-md-10">
            <h6 class="fz-3 mb-6">3. 烘豆（Grinding）</h6>
            <p class="fz-5 text-secondary">烘焙後的咖啡豆需要被研磨成合適的顆粒大小，
              以便於在萃取過程中充分釋放出咖啡的風味和香氣。
              研磨程度的選擇取決於所使用的咖啡萃取方式，例如浸泡式、滴濾式或者濃縮式。
              合適的研磨程度可以確保咖啡在萃取過程中均勻地釋放出味道，並且保持一定的酸度和甜度。</p>
          </div>
        </div>
        <div class="row timeline-inner">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <hr style="border-width: 3px;">
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row align-items-center justify-content-end">
          <div class="col-md-7 my-5 my-md-10 text-md-end">
            <h6 class="fz-3 mb-6 text-start text-lg-end">4. 萃取（Extraction）</h6>
            <p class="fz-5 text-md-start text-secondary">萃取是將研磨後的咖啡與水接觸，
              通過不同的萃取方式提取出咖啡的風味和香氣。
              萃取過程中，水溫、水質、水量、浸泡時間等因素都會影響最終的咖啡口感。
              精心控制萃取過程可以調整咖啡的濃度、口感和香氣，從而製作出一杯符合個人口味的完美咖啡。</p>
          </div>
          <div class="col-md-2 text-center"></div>
        </div>
      </div>
    </div>

  </div>

  <div class="container-fluid pb-10 pb-md-12 bg-coronation">
    <div class="container text-center">
      <div class="text-center pt-10 pt-md-20 mb-6">
        <h2 class="fz-2 lh-sm fw-normal">暢銷商品</h2>
        <span class="fz-8 lh-base fw-normal">網路人氣熱銷，千萬別錯過</span>
      </div>

      <div class="d-none d-md-block">
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-8"
            v-for="product in popularProductsShuffle" :key="product.id">
            <div class="card border-0">
              <div class="card-img-container">
                <img :src="product.imageUrl" class="card-img-top" :alt="product.id">
              </div>
              <div class="card-body text-center">
                <h5 class="card-title fz-8 lh-base fw-normal">{{ product.title }}</h5>
                <p class="card-text">
                  <small class="text-muted fw-bold fz-6 lh-1">NT$ {{ product.price }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-md-none">
        <swiper :pagination="true"
                :loop="true"
                :autoplay="{ delay: 4000 }"
                :modules="modules"
                class="mySwiper">
          <swiper-slide v-for="product in popularProductsShuffle" :key="product.id">
            <div class="card border-0">
              <div class="card-img-container">
                <img :src="product.imageUrl" class="card-img-top" :alt="product.id">
              </div>
              <div class="card-body text-center">
                <h5 class="card-title fz-8 lh-base fw-normal">{{ product.title }}</h5>
                <p class="card-text">
                  <small class="text-muted fw-bold fz-6 lh-1">NT$ {{ product.price }}</small>
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <router-link to="/products" type="button"
        class="btn btn-primary btnHoverStyle mt-6 mt-md-10 px-10 py-4 rounded-2
        fz-7 fw-bold text-white bg-secondary"
      >更多商品</router-link>
    </div>
  </div>
</template>

<script>
// import required modules
// eslint-disable-next-line import/no-extraneous-dependencies
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css/autoplay';

// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
      newProducts: [],
      newProductShuffle: [],
      popularProducts: [],
      popularProductsShuffle: [],
    };
  },
  methods: {
    getHomeProducts() {
      const url = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.$http.get(url)
        .then((res) => {
          const grpProds = Object.groupBy(res.data.products, ({ unit }) => unit);
          this.newProducts = grpProds['新品上市'];
          this.newProductShuffle = this.shuffledArray(this.newProducts);
          this.popularProducts = grpProds['暢銷商品'];
          this.popularProductsShuffle = this.shuffledArray(this.popularProducts);
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
    shuffledArray(array) {
      const shuffled = array.slice().sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    },
    productStatement(id) {
      this.$router.push({ path: `/product/${id}` });
    },
  },
  mounted() {
    this.getHomeProducts();
  },
};
</script>

<style lang="scss" scoped>
.btn-order {
  width: 120px;
  height: 60px;
  text-align: center;
  border-radius: 10px;
  padding: 0px 30px;
  color: #181818;
  background: #ffc044;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0;
  transition: all .5s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fff;
    background: #7e6238;
  }
}
.card {
  &-img-container {
    overflow: hidden;
  }
  &-img-top {
    transition: transform 0.3s ease;
  }
  &:hover &-img-top {
    transform: scale(1.1);
  }
}
.btnHoverStyle {
  transition: all 1s ease;
  &:hover {
    color: #181818;
    background-color: #ffa00b;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
  &-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
