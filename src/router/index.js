import Vue from "vue";

import VueRouter from "vue-router";
import Home from "@/page/Index";
import Register from "@/page/Register";
import Success from "@/page/Success";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { guest: true }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: { guest: true }
  },
  {
    path: "/Success",
    name: "Success",
    component: Success,
    meta: { guest: true }
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  },
  routes
});

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
  
})

export default router;
