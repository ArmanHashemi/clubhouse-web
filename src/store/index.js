import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import localForage from "localforage";
import main from "./main";

Vue.use(Vuex);
let store = null;
const vuexPersist = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
  reducer: (state) => state,
});

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      main,
    },

    plugins: [vuexPersist.plugin],
    strict: process.env.DEBUGGING,
  });
  store = Store;

  return Store;
}

export { store };
