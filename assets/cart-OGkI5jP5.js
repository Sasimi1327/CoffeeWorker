import { G as defineStore, H as axios } from "./index-Y8Vdyrzx.js";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const cartStore = defineStore("cart", {
  state: () => ({
    carts: [],
    total: 0,
    final_total: 0,
    // 狀態
    loading: false,
    isAddToCart: false,
    isUpdateItem: false,
    isDelItem: false,
    isDiscount: false
  }),
  actions: {
    getCarts() {
      this.loading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios.get(url).then((res) => {
        this.carts = res.data.data.carts;
        this.total = res.data.data.total;
        this.final_total = res.data.data.final_total;
        this.isDiscount = this.total !== this.final_total;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
    },
    updateCartItem(item) {
      this.loading = true;
      this.isUpdateItem = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.product_id,
        qty: item.qty
      };
      axios.put(url, { data }).then(() => {
        this.getCarts();
        this.isUpdateItem = false;
        this.loading = false;
      }).catch(() => {
        this.isUpdateItem = false;
        this.loading = false;
      });
    },
    deleteCartItem(item) {
      this.loading = true;
      this.isDelItem = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      axios.delete(url).then(() => {
        this.getCarts();
        this.isDelItem = false;
        this.loading = false;
      }).catch(() => {
        this.isDelItem = false;
        this.loading = false;
      });
    },
    addToCart(productId, sugar = "標準甜", ice = "正常冰", qty = 1) {
      this.loading = true;
      this.isAddToCart = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      const data = {
        data: {
          product_id: productId,
          qty,
          sugar,
          ice
        }
      };
      axios.post(url, data).then(() => {
        this.getCarts();
        this.isAddToCart = false;
        this.loading = false;
      }).catch(() => {
        this.isAddToCart = false;
        this.loading = false;
      });
    }
  }
});
export {
  cartStore as c
};
