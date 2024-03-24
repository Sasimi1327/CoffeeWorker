<script>
import Swal from 'sweetalert2';

import cartStore from '@/stores/cart';
import { mapActions, mapState } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      selectProduct: {},
      selectSugar: '標準甜',
      selectIce: '正常冰',
      qty: 1,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProduct() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.selectProduct = res.data.product;
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
  },
  watch: {
    isAddToCart() {
      if (!this.isAddToCart) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '已加入購物車項目',
          width: 300,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    loading() {
      this.isLoading = this.loading;
    },
  },
  computed: {
    ...mapState(cartStore, ['isAddToCart', 'loading']),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container py-20 mb-6">
    <div class="row">
      <div class="col-lg-5">
        <div class="pt-15">
          <img :src="selectProduct.imageUrl"
          class="img-fluid object-fit-cover">
        </div>
      </div>
      <div class="col-lg-7">
        <div class="position-relative ml-18">
          <h3 class="fz-3 text-primary">{{ selectProduct.title }}</h3>
          <div class="my-7 fz-5">
            {{ selectProduct.description }}
          </div>
          <div class="text-primary mt-4 mb-6">
            <span v-if="selectProduct.price === selectProduct.origin_price"
            class="fz-4 fw-bold">
              NT$
              <ins class="text-decoration-none">
                <span class="text-muted fw-bold fz-3">{{ selectProduct.price }}</span>
              </ins>
            </span>
            <div v-else class="fz-3 fw-bold">
              NT$
              <ins class="text-decoration-none">
                <span class="text-primary fz-3">{{ selectProduct.price }}</span>
              </ins>
              <del class="ml-3 align-middle fz-6 text-dark-brown">
                NT$
                <span class="text-muted fw-normal fz-5 lh-1">
                  {{ selectProduct.origin_price }}
                </span>
              </del>
            </div>
          </div>
          <legend class="mb-3 position-relative d-block fw-bold fz-6 lh-1">甜度</legend>
          <div class="btn-group mb-5 w-100 d-flex justify-content-start" role="group">
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="標準甜" autocomplete="off"
                value="標準甜" v-model="selectSugar"
              >
              <label class="btn btn-dark-brown fw-bold" for="標準甜"
                :class="{ active: selectSugar === '標準甜'}"
              >正常甜</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="7分甜" autocomplete="off"
                value="7分甜" v-model="selectSugar"
              >
              <label class="btn btn-dark-brown fw-bold" for="7分甜"
                :class="{ active: selectSugar === '7分甜'}"
              >少糖</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="5分甜" autocomplete="off"
                value="5分甜" v-model="selectSugar"
              >
              <label class="btn btn-dark-brown fw-bold" for="5分甜"
                :class="{ active: selectSugar === '5分甜'}"
              >半糖</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="3分甜" autocomplete="off"
                value="3分甜" v-model="selectSugar"
              >
              <label class="btn btn-dark-brown fw-bold" for="3分甜"
                :class="{ active: selectSugar === '3分甜'}"
              >微糖</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="健康甜" autocomplete="off"
                value="健康甜" v-model="selectSugar"
              >
              <label class="btn btn-dark-brown fw-bold" for="健康甜"
                :class="{ active: selectSugar === '健康甜'}"
              >無糖</label>
            </div>
          </div>

          <legend class="mb-3 position-relative d-block fw-bold fz-6 lh-1">冰塊</legend>
          <div class="btn-group mb-5 w-100 d-flex justify-content-start" role="group">
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="正常冰" autocomplete="off"
                value="正常冰" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="正常冰"
                :class="{ active: selectIce === '正常冰'}"
              >正常冰</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="微冰" autocomplete="off"
                value="微冰" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="微冰"
                :class="{ active: selectIce === '微冰'}"
              >微冰</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="去冰" autocomplete="off"
                value="去冰" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="去冰"
                :class="{ active: selectIce === '去冰'}"
              >去冰</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="常溫" autocomplete="off"
                value="常溫" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="常溫"
                :class="{ active: selectIce === '常溫'}"
              >常溫</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="溫" autocomplete="off"
                value="溫" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="溫"
                :class="{ active: selectIce === '溫'}"
              >溫</label>
            </div>
            <div class="mb-1 mr-1 position-relative">
              <input type="radio" class="btn-check"
                name="btnradio" id="熱" autocomplete="off"
                value="熱" v-model="selectIce"
              >
              <label class="btn btn-dark-brown fw-bold" for="熱"
                :class="{ active: selectIce === '熱'}"
              >熱</label>
            </div>
          </div>

          <legend class="mb-3 position-relative d-block fw-bold fz-6 lh-1">數量</legend>
          <div class="d-flex justify-content-start mb-8 position-relative">
            <button type="button" class="bg-white border-black" @click=" qty > 1 ? qty-- : ''">
              <span class="material-symbols-outlined my-1 align-middle">remove</span>
            </button>
            <input type="number" name="quantity" min="1" value="1" disabled
              class="w-10 bg-white" v-model="qty">
            <button type="button" class="bg-white border-black" @click="qty++">
              <span class="material-symbols-outlined my-1 align-middle">add</span>
            </button>
          </div>
          <div class="mb-3 position-relative">
            <button type="button" class="px-10 py-4 border-0 rounded-2 w-50
              bg-primary fw-bold fz-5 btn-addCart"
              @click="addToCart(selectProduct.id, selectSugar, selectIce, qty)"
            >加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid ">

  </div>
</template>

<style lang="scss" scoped>
.btn.active  {
  background: #ffc044;
  color: #201617;
}
.btn-addCart {
  &:hover {
    background: #ffa00b;
    color: #fff;
  }
}
</style>
