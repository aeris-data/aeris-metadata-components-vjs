import Vue from "vue";

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import Vuex from "vuex";
Vue.use(Vuex);

import VueLayers from "vuelayers";
Vue.use(VueLayers);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

import app from "./app.vue";
import metadata from "./modules/metadata.vue";
import quicklookGallery from "./modules/quicklook-gallery.vue";
import metadataSynthesis from "./modules/aeris-metadata-synthesis.vue";
import AerisMetadataCitationsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-citations/aeris-metadata-citations-test";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/metadata/:id",
      component: metadata,
      props: true
    },
    {
      path: "/quicklook-gallery",
      component: quicklookGallery
    },
    {
      path: "/aeris-metadata-synthesis",
      component: metadataSynthesis
    },
    {
      path: "/aeris-metadata-citations",
      component: AerisMetadataCitationsTest
    }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<app/>",
  components: {
    app
  }
}).$mount("#app");
