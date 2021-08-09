import Vue from "vue";
import * as _ from "lodash";
import VueRouter from "vue-router";
import Home from "@/page/Index";
import Register from "@/page/Register";
import Success from "@/page/Success";
import Login from "@/components/Login";
import ExportFile from "@/page/ExportFile";


Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   meta: { guest: false }
  // },
  // {
  //   path: "/Register",
  //   name: "Register",
  //   component: Register,
  //   meta: { guest: true }
  // },
  // {
  //   path: "/Success",
  //   name: "Success",
  //   component: Success,
  //   meta: { guest: true }
  // },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { guest: true }
  },
  {
    path: "/",
    name: "Home",
    component: ExportFile,
    meta: { guest: false }
  },
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
  // if (to.query.page == 'Register')
  // {
  //   next({ name: `Register`, query: {token: to.query.token}})
  // }
  // if (to.query.page == 'Success')
  // {
  //   next({ name: `Success`})
  // }
  next()
  
})

export default router;
