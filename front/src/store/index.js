import Vue from "vue";
import Vuex from "vuex";
import ArenaStore from './modules/arena';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ArenaStore
  }
});
