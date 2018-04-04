import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;
Vue.use(Vuex);
sync(store, router, { moduleName: "Route" });


new Vue({
  render: h => h(AppComponent)
}).$mount('#app')

// new Vue({
//   el: "#app",
//   router,
//   store,
//   template: "<App/>",
//   components: { App }
// });
