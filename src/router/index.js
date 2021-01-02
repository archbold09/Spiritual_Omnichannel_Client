import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "@/components/Layout.vue";
// import Home from '../views/Home.vue'
import Contact from "@/views/Contact.vue";
import Inbox from "@/views/Inbox.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: Inbox,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
