import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    layout: "",
    sidebar: {
      baseSidebar: true,
    },
    userData: {}
  },
  getters: {
    token: (state) => {
      return state.token;
    },
    userData: (state) => {
      return state.userData;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state,userData){
      state.userData = userData
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
  plugins: [createPersistedState()],
});
