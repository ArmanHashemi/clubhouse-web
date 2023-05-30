import { LocalStorage } from "quasar";

export default ({ router, store, Vue }) => {
  router.beforeEach(async (to, from, next) => {
    // is this route need Auth ?????
    if (to.meta.auth) {
      LocalStorage.has("token") ? next() : next({ name: "login" });
    } else {
      // no dont need auth
      next();
    }
  });
};
