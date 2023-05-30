import Vue from "vue";
import { colors, LocalStorage, Screen } from "quasar";
import VueGlobalEmitter from "vue-global-emitter";
import { store } from "src/store";

Screen.setSizes({ sm: 640, md: 768, lg: 1024, xl: 1280 });

const globalMixin = {
  data() {
    return {};
  },
  mounted() {
    store.commit("main/SET_STATE", {
      key: "theme",
      value: LocalStorage.getItem("theme"),
    });
    this.changeTheme();
  },
  computed: {
    themeMode() {
      return store.state.main.theme ? store.state.main.theme : "light";
    },
  },
  methods: {
    changeTheme() {
      if (this.themeMode === "dark") {
        colors.setBrand("primary", "#86EFAC");
        colors.setBrand("secondary", "#27272A");
        colors.setBrand("accent", "#FAFAFA");
        colors.setBrand("tertiary", "#E7E7E7");
        colors.setBrand("fourtiary", "#18181B");
        colors.setBrand("reverse", "#F5F5F5");
        colors.setBrand("primaryl", "#323238");
      } else {
        colors.setBrand("primary", "#14532D");
        colors.setBrand("secondary", "#FFFFFF");
        colors.setBrand("accent", "#343741");
        colors.setBrand("tertiary", "#71717A");
        colors.setBrand("fourtiary", "#F5F5F5");
        colors.setBrand("reverse", "#18181B");
        colors.setBrand("primaryl", "#E7E5E4");
      }
    },
  },
};
Vue.mixin(globalMixin);
Vue.use(VueGlobalEmitter);
