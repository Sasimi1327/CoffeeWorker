import { createApp } from 'vue';
import { createPinia } from 'pinia';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';

import { date, currency } from '@/methods/filters';

// Vue Validate
import * as VeeValidate from 'vee-validate';
import VeeValidateRules from '@vee-validate/rules';
import * as VeeValidateI18n from '@vee-validate/i18n';
import zhTW from './i18n/zh_TW.json';

import App from './App.vue';
import router from './router';
import './assets/all.scss';

// 全部加入
Object.keys(VeeValidateRules).forEach((rule) => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});
// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW', zhTW),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});

const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};
app.component('VueLoading', Loading);

app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
