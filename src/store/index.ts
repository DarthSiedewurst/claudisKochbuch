import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {user: '', password :''},
  mutations: {
    setUser(state:any,user: string) {
      state.user = user
    },
    setPassword(state:any,password: string) {
      state.password = password
    }
  },
  actions: {},
  modules: {}
});
