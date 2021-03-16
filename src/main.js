import Vue from 'vue'
import App from './App.vue'
import Buefy from "buefy";
import router from "./router";
import axios from "@/config/axios";
import '@/assets/scss/buefy.scss'
import VeeValidate from 'vee-validate'
import "@mdi/font/css/materialdesignicons.css";
import VueSignature from "vue-signature-pad";

Vue.use(Buefy);
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(VeeValidate);
Vue.use(VueSignature);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
