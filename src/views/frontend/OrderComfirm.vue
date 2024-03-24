<script>
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {},
      // createAt: '',
      // orderId: '',
      // is_paid: false,
      // products: [],
      // total: 0,
      // user: {},
      // msg: '',
    };
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.order;
          // this.createAt = res.data.order.create_at;
          // this.orderId = res.data.order.id;
          // this.products = res.data.order.products;
          // this.total = res.data.order.total;
          // this.user = res.data.order.user;
          // this.msg = res.data.order?.message;
          // this.is_paid = res.data.order.is_paid;
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    payOrder() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/pay/${id}`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            // 前往訂單完成頁
            this.$router.push({
              name: 'pay-complete',
              params: {
                id,
              },
            });
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '付款成功',
              showConfirmButton: false,
              timer: 3000,
            });
          } else {
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'error',
              title: res.data.message,
              showConfirmButton: false,
              timer: 3000,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<template>
  <div class="container my-10 my-md-20">
    <div class="d-flex justify-content-between align-items-center py-4">
      <h3>訂單確認</h3>
      <RouterLink to="/products"
        class="link-underline link-underline-opacity-0 fz-5">繼續購買</RouterLink>
    </div>

    <div class="d-none d-md-block">
      <ul class="row list-unstyled py-4 mb-0 border border-2 border-bottom-0 fw-bold">
        <li class="col-md-5 text-center">商品資訊</li>
        <li class="col-md-2 text-start">價格</li>
        <li class="col-md-1 text-start">甜度</li>
        <li class="col-md-1 text-start">溫度</li>
        <li class="col-md-1 text-start">數量</li>
        <li class="col-md-2 text-start">小計</li>
      </ul>
    </div>
    <div class="row justify-content-center align-items-center
        list-unstyled p-4 mb-0 border border-2 mb-n-1px position-relative"
      v-for="item in order.products" :key="item.id">

      <li class="col-md-5 mb-4 mb-md-0 d-none d-md-block">
        <img :src="item.product.imageUrl"
          class="img-fluid w-40 h-40 object-fit-cover mr-5" :alt="item.product.title">
        {{ item.product.title }}
      </li>
      <li class="col-6 col-md-2 my-3 mb-md-0 d-md-none">
        <span class="d-md-none fz-6 align-middle">商品名：</span>
        {{ item.product.title }}
      </li>

      <li class="col-6 col-md-2 my-3 mb-md-0">
        <span class="d-md-none fz-6 align-middle">價格：</span>
        NT$ {{ item.product.price }}
      </li>
      <li class="col-6 col-md-1 my-3 mb-md-0">
        <span class="d-md-none fz-6 align-middle">甜度：</span>
        {{ item.sugar }}
      </li>
      <li class="col-6 col-md-1 my-3 mb-md-0">
        <span class="d-md-none fz-6 align-middle">溫度：</span>
        {{ item.ice }}
      </li>
      <li class="col-6 col-md-1 my-3 mb-md-0">
        <span class="d-md-none fz-6 align-middle">數量：</span>
        {{ item.qty }}
      </li>
      <li class="col-6 col-md-2 my-3 mb-md-0">
        <span class="d-md-none fz-6 align-middle">小計：</span>
        NT$ {{ item.final_total }}
      </li>

    </div>
    <div class="row align-items-center mt-4">
      <div class="col-12 text-end fz-5 fw-normal">
        <span class="fz-4 fw-bold mr-3">總計：</span>
        NT$ {{ order.total }}
      </div>
    </div>

  </div>
  <div class="container my-10 my-md-20">
    <div class="d-flex justify-content-between align-items-center py-4">
      <h3>訂單資訊</h3>
    </div>
    <ul class="row align-items-center list-unstyled px-8 py-2 mb-0
      border border-2 mb-n-1px position-relative">
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        訂單時間
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">訂單時間：</span>
        {{ $filters.date(order.create_at) }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        訂單編號
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">訂單編號：</span>
        {{ order.id }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        收件人姓名
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">收件人姓名：</span>
        {{ order.user?.name }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        電子郵件
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">電子郵件：</span>
        {{ order.user?.email }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        收件人電話
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">收件人電話：</span>
        {{ order.user?.tel }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4
        border-bottom align-middle">
        收件人地址
      </li>
      <li class="col-md-6 p-4 border-bottom border-grey-d4 fz-5">
        <span class="d-inline-block d-md-none fz-5 align-middle">收件人地址：</span>
        {{ order.user?.address }}
      </li>
      <li class="col-md-6 d-none d-md-block fz-5 fw-bold my-4 align-middle">
        留言
      </li>
      <li class="col-md-6 p-4 fz-6">
        <span class="d-inline-block d-md-none fz-5 align-middle">留言：</span>
        {{ order.msg }}
      </li>
    </ul>
  </div>
  <div class="container">
    <div class="text-end my-10 my-md-20">
      <button type="button" class="btn btn-primary py-4 px-20
        btnHoverStyle fw-bold text-white bg-secondary"
      @click.prevent="payOrder"
      >確認結帳</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>

.btnHoverStyle {
  transition: all 1s ease;
  &:hover {
    color: #181818;
    background-color: #ffa00b;
  }
}
</style>
