import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      id: '',
      name:''
    },
    isAuthorised: false,
  },
  mutations: {
    setUID(state, id) {
      state.userData.id = id;
    },
    setName(state, name){
      state.userData.name = name;
    },
    setAuthParam(state, flag) {
      state.isAuthorised = flag;
    }
  },
})
