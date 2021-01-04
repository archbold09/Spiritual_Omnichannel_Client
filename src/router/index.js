import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// import API from '@/api'
// import Layout from "@/components/Layout.vue";

import Home from "../views/Home.vue";
import Contact from "@/views/Contact.vue";
import Inbox from "@/views/Inbox.vue";
import Login from "../views/Login.vue";
import Error404 from "../views/Error404.vue";

//layouts
import LayoutLogin from "../layouts/LayoutLogin.vue";
import LayoutDashboard from "../layouts/LayoutDashboard.vue";
// import API from "../api";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: LayoutLogin },
  },
  {
    path: "/dashboard/home",
    name: "Home",
    component: Home,
    meta: { layout: LayoutDashboard },
  },
  {
    path: "/dashboard/contact",
    name: "Contact",
    component: Contact,
    meta: { layout: LayoutDashboard },
  },
  {
    path: "/dashboard/inbox",
    name: "Inbox",
    component: Inbox,
    meta: { layout: LayoutDashboard },
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const protectedRoutes = ["/dashboard/home"];
  if (protectedRoutes.includes(to.path) && !store.getters.token) next("/login");
  else next();
});

export default router;
