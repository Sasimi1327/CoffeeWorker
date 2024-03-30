<script>
import cartStore from '@/stores/cart';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    closeCollapsed() {
      this.isCollapsed = true;
    },
    openOffcanvas() {
      this.bsOffcanvas.show();
    },
  },
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container py-2 d-flex justify-content-between align-items-center">
      <button class="navbar-toggler" type="button"
        :class="{ collapsed: isCollapsed }"
        @click="isCollapsed = !isCollapsed"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="material-symbols-outlined align-middle py-2" v-if="isCollapsed">
          menu
        </span>
        <span class="material-symbols-outlined align-middle py-2" v-else>
          close
        </span>
      </button>

      <h1 class="mx-auto mr-md-auto ml-md-0 mb-0">
        <a href="#" class="navbar-brand logo">
          CoffeeWorker
        </a>
      </h1>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/"
              class="nav-link animated-border active text-center mx-md-2 p-3"
              aria-current="page">
                咖啡時光
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products"
              class="nav-link animated-border text-center mx-md-2 p-3"
              aria-current="page">
                品味咖啡
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/brand"
              class="nav-link animated-border text-center mx-md-2 p-3"
              aria-current="page">
                品牌堅持
            </RouterLink>
          </li>
        </ul>
      </div>

      <RouterLink type="button" class="btn position-relative p-2 border-0"
        to="/cart"
      >
        <span class="material-symbols-outlined align-middle"
          style="height: 32px; width: 32px;">
          shopping_cart
        </span>
        <span class="position-absolute top-0 start-85
          translate-middle badge rounded-pill bg-primary text-white rounded-circle"
          style="height: 24px; width: 24px;">
          {{ carts.length }}
        </span>
      </RouterLink>
    </div>
  </nav>

  <div class="collapse mt-2 navbar-collapse"
    :class="{ show: !isCollapsed }" id="navbarNav">
    <ul class="navbar-nav d-md-none">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            咖啡時光
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/products" class="nav-link text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            品味咖啡
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/brand" class="nav-link hvr-pop text-center py-6 fz-5" aria-current="page"
        @click="closeCollapsed">
            品牌堅持
        </RouterLink>
      </li>
    </ul>
  </div>

  <!-- <div class="offcanvas offcanvas-end" tabindex="-1"
    id="myOffcanvas" aria-labelledby="myOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="myOffcanvasLabel">Offcanvas right</h5>
      <button type="button" class="btn-close"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      ...
    </div>
  </div> -->

  <RouterView />

  <footer class="container-fluid bg-black px-10">
    <div class="row">
      <div class="col-md-6 col-lg-4 py-10 py-md-20">
        <h3 class="mb-8 fw-normal lh-base text-white fz-7">
          品嘗我們精心調製的研磨咖啡，開始你的每日工作，
          每一口都是我們的貢獻與熱忱，讓您精神倍增，效益加倍。
        </h3>
        <ul class="d-flex justify-content-center align-items-center list-unstyled">
          <li class="social-item rounded-circle p-2 mx-2 d-flex align-items-center"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Instagram"
          >
            <a href="https://www.instagram.com/" class="lh-base" target="_blank">
              <img src="@/assets/social_icons/ic_ig.svg" alt="ig">
            </a>
          </li>
          <li class="social-item rounded-circle p-2 mx-2 d-flex align-items-center"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Facebook"
          >
            <a href="https://zh-tw.facebook.com/" class="social-link" target="_blank">
              <img src="@/assets/social_icons/ic_fb.svg" alt="fb">
            </a>
          </li>
          <li class="social-item rounded-circle p-2 mx-2 d-flex align-items-center"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Line"
          >
            <a href="https://line.me/zh-hant/" class="social-link" target="_blank">
              <img src="@/assets/social_icons/ic_line.svg" alt="line">
            </a>
          </li>
          <li class="social-item rounded-circle p-2 mx-2 d-flex align-items-center"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Youtube"
          >
            <a href="https://www.youtube.com/" class="social-link" target="_blank">
              <img src="@/assets/social_icons/ic_yt.svg" alt="yt">
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-lg-4 my-md-10">
        <h3 class="mb-8 fw-bold lh-base text-white fz-5 text-center">
          營業時間
        </h3>
        <ul>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週一</div>
            <div class="line"></div>
            <div class="col-4 ml-4">9:00 - 21:30</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週二</div>
            <div class="line"></div>
            <div class="col-4 ml-4">9:00 - 21:30</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週三</div>
            <div class="line"></div>
            <div class="col-4 ml-4">9:00 - 21:30</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週四</div>
            <div class="line"></div>
            <div class="col-4 ml-4">9:00 - 21:30</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週五</div>
            <div class="line"></div>
            <div class="col-4 ml-4">9:00 - 21:30</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週六</div>
            <div class="line"></div>
            <div class="col-4 ml-4">休息日</div>
          </li>
          <li class="d-flex justify-content-between align-items-center text-white">
            <div class="col-2 mr-4 text-end">週日</div>
            <div class="line"></div>
            <div class="col-4 ml-4">休息日</div>
          </li>
        </ul>
      </div>
      <address class="col-md-6 col-lg-4 my-md-10">
        <h3 class="mb-8 fw-bold lh-base text-white fz-5 text-center">
          聯絡方式
        </h3>
        <ul class="row flex-column list-unstyled text-white">
          <li class="offset-1 col-11 mb-5 align-middle fz-6">
            <div class="material-symbols-outlined py-1 mr-3 d-inline-flex align-bottom">call</div>
            <a href="tel:+886-2-8115486" class="text-white text-decoration-none">
              (02) 2811 - 5486
            </a>
          </li>
          <li class="offset-1 col-11 mb-5 align-middle fz-6">
            <span class="material-symbols-outlined py-1 mr-3 d-inline-flex align-bottom">mail</span>
            <a href="mailto:CoffeeWorker@gmail.com" class="text-white text-decoration-none">
              CoffeeWorker@gmail.com
            </a>
          </li>
          <li class="offset-1 col-11 align-middle fz-6">
            <span class="material-symbols-outlined py-1 mr-3 d-inline-flex align-bottom">home</span>
            台北市北投區天母西路132號
          </li>
        </ul>
      </address>
    </div>
    <div class="py-6 px-3 py-md-4 px-md-0 text-center d-flex flex-column
        flex-md-row justify-content-center align-items-center text-white">
      <div class="mr-md-2 fz-8 lh-base fw-normal">本作品僅為專題使用，非從事商業用途。</div>
      <div class="fz-8 lh-base fw-normal">Copyright © 2024 Sasimi. All rights reserved.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* * {
  border: 1px solid red
} */
.logo {
  background-image: url('../assets/Logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  height: 120px;
  text-decoration: none;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.nav-link.active.router-link-exact-active {
  color: #ffa00b;
  border-bottom: 2px solid #ffa00b;
}
.animated-border {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #181818;
  transition: color 0.3s;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffa00b;
    transition: width 0.3s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
}
.social-item {
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: #ffa00b;
  &:hover {
    border: 1px solid #ffa00b;
    background-color: #201617;
  }
}
.line {
  position: relative;
  display: block;
  height: 1px;
  width: 100%;
  flex: 1;
  top: 0px;
  border: 1px dashed #fff;
}
</style>
