import Vue from "vue";

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import VueLayers from "vuelayers";
Vue.use(VueLayers);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

import app from "./app.vue";
import metadata from "./modules/metadata.vue";
import quicklookGallery from "./modules/quicklook-gallery.vue";
import metadataSynthesis from "./modules/aeris-metadata-synthesis.vue";

import AerisMetadataContactsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-contacts/aeris-metadata-contacts-test";
import AerisMetadataDataLinksTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-data-links/aeris-metadata-data-links-test";
import AerisMetadataInformationLinksTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-information-links/aeris-metadata-information-links-test";
import AerisMetadataDatapolicyTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/aeris-metadata-datapolicy-test";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/contacts",
      component: AerisMetadataContactsTest
    },
    {
      path: "/data-links",
      component: AerisMetadataDataLinksTest
    },
    {
      path: "/datapolicy",
      component: AerisMetadataDatapolicyTest
    },
    {
      path: "/information-links",
      component: AerisMetadataInformationLinksTest
    },
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
