import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cart', {
  state: () => ({
    carts: [],
    total: 0,
    final_total: 0,
    // 狀態
    loading: false,
    isAddToCart: false,
    isUpdateItem: false,
    isDelItem: false,
    isDiscount: false,
  }),
  actions: {
    getCarts() {
      this.loading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios.get(url)
        .then((res) => {
          this.carts = res.data.data.carts; // 購物車
          this.total = res.data.data.total; // 總金額
          this.final_total = res.data.data.final_total; // 總金額(含優惠券)
          this.isDiscount = this.total !== this.final_total;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    updateCartItem(item) {
      this.loading = true;
      this.isUpdateItem = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios.put(url, { data })
        .then(() => {
          this.getCarts();
          this.isUpdateItem = false;
          this.loading = false;
        })
        .catch(() => {
          this.isUpdateItem = false;
          this.loading = false;
        });
    },
    deleteCartItem(item) {
      this.loading = true;
      this.isDelItem = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      axios.delete(url)
        .then(() => {
          this.getCarts();
          this.isDelItem = false;
          this.loading = false;
        })
        .catch(() => {
          this.isDelItem = false;
          this.loading = false;
        });
    },
    addToCart(productId, sugar = '標準甜', ice = '正常冰', qty = 1) {
      this.loading = true;
      this.isAddToCart = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      const data = {
        data: {
          product_id: productId,
          qty,
          sugar,
          ice,
        },
      };
      axios.post(url, data)
        .then(() => {
          this.getCarts();
          this.isAddToCart = false;
          this.loading = false;
        })
        .catch(() => {
          this.isAddToCart = false;
          this.loading = false;
        });
    },
  },
});
