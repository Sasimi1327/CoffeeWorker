<script>
import Swal from 'sweetalert2';

import cartStore from '@/stores/cart';
import { mapState, mapActions } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapState(cartStore, ['carts', 'loading']),
    isComplete() {
      return this.form.user.name
          && this.form.user.email
          && this.form.user.tel
          && this.form.user.address;
    },
  },
  watch: {
    loading() {
      this.isLoading = this.loading;
    },
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onSubmit() {
      if (this.carts.length === 0) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: '購物車為空',
          showConfirmButton: false,
          timer: 3000,
        });
        this.$router.push('/products');
      }
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          this.getCarts();
          this.isLoading = false;
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: '已建立訂單',
            showConfirmButton: false,
            timer: 3000,

          });
          // 清空表單 input
          this.form.message = '';
          this.$refs.form.resetForm();
          // 前往確認訂單頁
          this.$router.push({
            name: 'order-detail',
            params: {
              id: res.data.orderId,
            },
          });
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: err.response?.data.message,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
  },
};
</script>

<template>
  <VueLoading v-model:active="isLoading" />
  <div class="container my-10 my-md-20">
    <div class="d-flex justify-content-between align-items-center py-4">
      <h3>填寫顧客資訊</h3>
      <RouterLink to="/cart"
        class="link-underline link-underline-opacity-0 fz-5">回購物車列表</RouterLink>
    </div>

    <v-form ref="form" v-slot="{ errors }" @submit="onSubmit">
      <div class="row">
        <div class="col-md-6 mb-6">
          <!-- 姓名：必填 -->
          <div class="form-floating mb-3">
            <v-field
              type="text"
              class="form-control"
              id="name"
              name="姓名"
              placeholder="請輸入姓名"
              :class="{
                'is-invalid': errors['姓名'],
                'is-valid': form.user.name && !errors['姓名']
              }"
              rules="required"
              v-model="form.user.name"
            ></v-field>
            <label for="name">收件人姓名</label>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

        </div>
        <div class="col-md-6 mb-6">
          <!-- Email：必填 / 需要符合格式 / input type 為 email -->
          <div class="form-floating mb-3">
            <v-field
              type="email"
              class="form-control"
              id="email"
              name="電子郵件"
              placeholder="請輸入電子郵件"
              :class="{
                'is-invalid': errors['電子郵件'],
                'is-valid': form.user.email && !errors['電子郵件']
              }"
              rules="email|required"
              v-model="form.user.email"
            ></v-field>
            <label for="email">電子郵件</label>
            <error-message name="電子郵件" class="invalid-feedback"></error-message>
          </div>

        </div>
        <div class="col-md-6 mb-6">
          <!-- 電話：必填 / 超過 8 碼 / input type 為 tel -->
          <div class="form-floating mb-3">
            <v-field
              type="tel"
              class="form-control"
              id="tel"
              name="電話"
              placeholder="請輸入電話"
              :class="{
                'is-invalid': errors['電話'],
                'is-valid': form.user.tel && !errors['電話']
              }"
              :rules="{
                numeric: true,
                required: true,
                min: 8,
                regex: /^(09)([0-9]{2})([0-9]{6})$|^(0)([0-9]{1})([0-9]{6,8})$/
              }"
              v-model="form.user.tel"
            ></v-field>
            <label for="tel">收件人電話</label>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

        </div>
        <div class="col-md-6 mb-6">
          <!-- 地址：必填 -->
          <div class="form-floating mb-3">
            <v-field
              type="text"
              class="form-control"
              id="address"
              name="地址"
              placeholder="請輸入地址"
              :class="{
                'is-invalid': errors['地址'],
                'is-valid': form.user.address && !errors['地址']
              }"
              rules="required"
              v-model="form.user.address"
            ></v-field>
            <label for="address">收件人地址</label>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

        </div>
        <div class="col-12 mb-6">
          <!-- 留言：非必填 -->
          <div class="form-floating mb-3">
            <textarea
              id="msg"
              class="form-control"
              placeholder="請輸入留言"
              v-model="form.message"
              style="height: 100px"
            ></textarea>
            <label for="msg">留言</label>
          </div>
        </div>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary py-4 px-20 btnCustomHover fw-bold"
        :disabled="!isComplete"
        >送出訂單</button>
      </div>
    </v-form>

  </div>
</template>
