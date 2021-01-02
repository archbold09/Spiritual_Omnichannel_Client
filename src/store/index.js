import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: '',
    sidebar: {
      baseSidebar: true,
    },
  },
  mutations: {
    baseSidebarState(state) {
      state.sidebar.baseSidebar = !state.sidebar.baseSidebar
    },
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    }
  },
  actions: {},
  modules: {},
});
