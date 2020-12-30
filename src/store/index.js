import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: {
      baseSidebar: true,
    },
  },
  mutations: {
    baseSidebarState(state, value) {
      state.sidebar.baseSidebar = value;
    },
  },
  actions: {},
  modules: {},
});
