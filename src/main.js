import Vue from 'vue'
import App from './App.vue'
import Buefy from "buefy";
import router from "./router";
import axios from "@/config/axios";
import '@/assets/scss/buefy.scss'
import VeeValidate from 'vee-validate'
import "@mdi/font/css/materialdesignicons.css";
import VueSignature from "vue-signature-pad";
import store from "./store";
import VueI18n from "vue-i18n";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(Buefy);
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(VeeValidate);
Vue.use(VueSignature);
Vue.use(VueI18n);

import en from "./locales/en/";
import th from "./locales/th/";

const messages = {
  en,
  th
};

const i18n = new VueI18n({
  locale: localStorage.getItem("locale")
    ? localStorage.getItem("locale")
    : "en", // set locale
  messages // set locale messagess
});

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')
