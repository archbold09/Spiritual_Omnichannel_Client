import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    layout: "",
    sidebar: {
      baseSidebar: true,
    },
  },
  getters: {
    token: (state) => {
      return state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    baseSidebarState(state) {
      state.sidebar.baseSidebar = !state.sidebar.baseSidebar;
    },
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
  },
  actions: {},
  modules: {},
});
