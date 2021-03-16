import Vue from "vue";
// import * as _ from "lodash";
import VueRouter from "vue-router";
import Index from "@/page/Index";
import Test from "../components/HelloWorld copy.vue";
// import View from "../components/View.vue";
// import Login from '../components/Login.vue'
// import Version from '../components/Version.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: "/Test",
    name: "Test",
    component: Test,
    meta: { guest: false }
  }
//   {
//     path: "/View",
//     name: "View",
//     component: View,
//     meta: { guest: false }
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login,
//     meta: {guest: true}
//   },
//   {
//     path: '/Version',
//     name: 'Version',
//     component: Version,
//     meta: {guest: true}
//   }
];

// const router = new VueRouter({
//   mode: "history",
//   linkActiveClass: "active",
//   base: process.env.BASE_URL,
//   scrollBehavior() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({ x: 0, y: 0 });
//       }, 500);
//     });
//   },
//   routes
// });

// router.beforeEach((to, from, next) => {
//     next()
//   })

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router;
