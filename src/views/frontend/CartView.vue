<script>
import Swal from 'sweetalert2';

import { currency } from '@/methods/filters';
import cartStore from '@/stores/cart';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ['updateCartItem', 'deleteCartItem']),
    checkBeforeRemove(item) {
      Swal.fire({
        title: '刪除產品確認',
        text: `是否刪除 【${item.product.title ? item.product.title : item.id}】 (刪除後將無法恢復)`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: '取消刪除',
        confirmButtonText: '確認刪除',
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCartItem(item);
        }
      });
    },
    getPercent(number) {
      return currency(Number(number));
    },
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'final_total', 'loading', 'isUpdateItem', 'isDelItem']),
    isComplete() {
      return this.carts.length !== 0;
    },
  },
  watch: {
    loading() {
      this.isLoading = this.loading;
    },
    isUpdateItem() {
      if (!this.isUpdateItem) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '已更新購物車項目',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    isDelItem() {
      if (!this.isDelItem) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: '已刪除購物車項目',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>

<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container my-10 my-md-20">
    <div class="d-flex justify-content-between align-items-center py-4">
      <h3>您的購物車列表</h3>
      <RouterLink to="/products"
        class="link-underline link-underline-opacity-0 fz-5">再逛逛吧</RouterLink>
    </div>
    <div v-if="!carts?.length" class="text-center">
      <h2 class="fz-1">購物車是空的</h2>
      <router-link to="/products" type="button"
        class="btn btn-primary btnHoverStyle mt-6 mt-md-10 px-10 py-4 rounded-2
        fz-7 fw-bold text-white bg-secondary"
      >更多商品</router-link>
    </div>
    <template v-else>
      <table class="w-100 text-center d-none d-md-block">
        <thead>
          <tr class="fz-4">
            <th colspan="2" scope="col" class="py-3">咖啡品項</th>
            <th scope="col" class="py-3">數量</th>
            <th scope="col" class="py-3">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td class="w-25">
              <img :src="item.product.imageUrl" alt="item.id"
                class="img-thumbnail w-100 h-100 object-fit-cover" >
            </td>
            <td class="w-30 p-4 text-start">
              <h6>名稱： {{ item.product.title }}</h6>
              <h6>價格： NT$ {{ item.product.price }}</h6>
              <h6>甜度： {{ item.sugar }}</h6>
              <h6>溫度： {{ item.ice }}</h6>
            </td>
            <td class="w-25 px-5">
              <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center">
                  <button type="button" class="bg-white border-black"
                    @click=" item.qty > 1 ?
                            (item.qty--, updateCartItem(item)) :
                            checkBeforeRemove(item)">
                    <span v-if="item.qty > 1" class="material-symbols-outlined
                      my-1 align-middle">remove</span>
                    <span v-else class="material-symbols-outlined my-1 align-middle">delete</span>
                  </button>
                  <input type="number" name="quantity" min="1" value="1" disabled
                    class="w-30 bg-white" v-model="item.qty">
                  <button type="button" class="bg-white border-black"
                    @click="item.qty++; updateCartItem(item)"
                  >
                    <span class="material-symbols-outlined my-1 align-middle">add</span>
                  </button>
                </div>
              </div>
            </td>
            <td class="w-20 fw-bold fz-5">
              NT$ {{ getPercent(item.product.price*item.qty) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-md-none">
        <div class="row justify-content-center align-items-center position-relative
          p-4 mb-0 mb-n-1px border border-2" v-for="item in carts" :key="item.id">
          <div class="col-6 my-2">
            <h6>名稱： {{ item.product.title }}</h6>
          </div>
          <div class="col-6 my-2">
            <h6>價格： NT$ {{ item.product.price }}</h6>
          </div>
          <div class="col-6 my-2">
            <h6>甜度： {{ item.sugar }}</h6>
          </div>
          <div class="col-6 my-2">
            <h6>溫度： {{ item.ice }}</h6>
          </div>
          <div class="col-6 my-2">
            <div class="d-flex justify-content-start">
              <button type="button" class="bg-white border-black"
                @click=" item.qty > 1 ?
                        (item.qty--, updateCartItem(item)) :
                        checkBeforeRemove(item)">
                <span v-if="item.qty > 1" class="material-symbols-outlined
                  my-1 align-middle">remove</span>
                <span v-else class="material-symbols-outlined my-1 align-middle">delete</span>
              </button>
              <input type="number" name="quantity" min="1" value="1" disabled
                class="w-30 bg-white" v-model="item.qty">
              <button type="button" class="bg-white border-black"
                @click="item.qty++; updateCartItem(item)"
              >
                <span class="material-symbols-outlined my-1 align-middle">add</span>
              </button>
            </div>
          </div>
          <div class="col-6 my-3">
            <h6 class="fw-bold fz-5 text-secondary"
            >小計： NT$ {{ getPercent(item.product.price*item.qty) }}</h6>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div v-if="isComplete" class="container my-5 my-md-10">
    <div class="row align-items-center">
      <div class="col-12 text-end fz-5 fw-normal">
        <span class="fz-4 fw-bold mr-3">總計:</span>
        NT$ {{ getPercent(this.total) }}
      </div>
      <div class="col-12 text-end fz-5 text-primary"
        v-if="this.total !== this.final_total">
        <span class="fz-4 fw-bold mr-3">折扣價:</span>
        NT$ {{ this.final_total }}
      </div>
    </div>
    <div class="text-end">
      <RouterLink to="/userinfo" type="button"
        class="btn btn-primary btnHoverStyle mt-5 mt-md-10 px-15 py-4 rounded-2
        fz-5 fw-bold text-white bg-secondary"
      >填寫客戶資訊</RouterLink>
    </div>
  </div>
</template>

<style lang='scss' scoped>
table {
  border: 1px solid #ffa00b;
  border-collapse: collapse;
}
th {
  border-bottom: 1px solid #ffa00b;
}
.mb-n-1px {
  margin-bottom: -1px;
}
.btnHoverStyle {
  transition: all 1s ease;
  &:hover {
    color: #181818;
    background-color: #ffa00b;
  }
}
</style>
