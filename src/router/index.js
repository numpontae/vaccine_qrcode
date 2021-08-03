import Vue from "vue";
import * as _ from "lodash";
import VueRouter from "vue-router";
import Home from "@/page/Index";
import Register from "@/page/Register";
import Success from "@/page/Success";
import Login from "@/components/Login";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { guest: false }
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
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
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
  if (!to.meta.guest && _.isEmpty(localStorage.getItem('logintoken'))) {
    console.log(from)
    next({ name: `Login`})
  }
  console.log(from)
  console.log(to)
  next()
  
})

export default router;
