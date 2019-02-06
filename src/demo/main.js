import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import VueResource from "vue-resource";
Vue.use(VueResource);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vuex from "vuex";
Vue.use(Vuex);

import VueLayers from "vuelayers";
Vue.use(VueLayers);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

import app from "./app.vue";
import AerisMetadataServicesTest from "./modules/aeris-metadata-services/aeris-metadata-services-test.vue";
import quicklookGallery from "./modules/quicklook-gallery.vue";
import metadataSynthesis from "./modules/aeris-metadata-synthesis.vue";
import AerisMetadataCitationsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-citations/aeris-metadata-citations-test";
import AerisMetadataPublicationsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-publications/aeris-metadata-publications-test";
import AerisMetadataInformationLinksTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-information-links/aeris-metadata-information-links-test";
import AerisMetadataDatapolicyTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/aeris-metadata-datapolicy-test";
import AerisMetadataDescriptionTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-description/aeris-metadata-description-test";
import AerisMetadataInternationalFieldTest from "./modules/aeris-metadata-international-field/aeris-metadata-international-field-test";
import AerisMetadataTemporalExtentsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/aeris-metadata-temporal-extents-test";
import AerisMetadataFormatsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-formats/aeris-metadata-formats-test";
import AerisMetadataModificationsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-modifications/aeris-metadata-modifications-test";
import AerisMetadataSpatialExtentsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-spatial-extents/aeris-metadata-spatial-extents-test";
import AerisMetadataParametersTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-parameters/aeris-metadata-parameters-test";
import AerisMetadataUiTableTest from "./modules/aeris-metadata-ui/submodules/aeris-metadata-ui-table/aeris-metadata-ui-table-test";
import AerisMetadataYearSelectDownloadTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/aeris-metadata-year-select-download-test";
import AerisMetadataCitationsTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-citations/aeris-metadata-citations-test";
import AerisMetadataInformationTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-information/aeris-metadata-information-test";

import yearSelectDownloadModule from "../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/store/aeris-metadata-year-select-download-store";

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    yearSelectDownloadModule
  }
});

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
    },
    {
      path: "/aeris-metadata-publications",
      component: AerisMetadataPublicationsTest
    },
    {
      path: "/information-links",
      component: AerisMetadataInformationLinksTest
    },
    {
      path: "/temporal-extents",
      component: AerisMetadataTemporalExtentsTest
    },
    {
      path: "/formats",
      component: AerisMetadataFormatsTest
    },
    {
      path: "/modifications",
      component: AerisMetadataModificationsTest
    },
    {
      path: "/spatial-extents",
      component: AerisMetadataSpatialExtentsTest
    },
    {
      path: "/parameters",
      component: AerisMetadataParametersTest
    },
    {
      path: "/ui-table",
      component: AerisMetadataUiTableTest
    },
    {
      path: "/year-select-download",
      component: AerisMetadataYearSelectDownloadTest
    },
    {
      path: "/metadata/:id",
      component: AerisMetadataServicesTest,
      props: true
    },
    {
      path: "/description",
      component: AerisMetadataDescriptionTest
    },
    {
      path: "/aeris-metadata-synthesis",
      component: metadataSynthesis
    },
    {
      path: "/aeris-metadata-citations",
      component: AerisMetadataCitationsTest
    },
    {
      path: "/information",
      component: AerisMetadataInformationTest
    }
  ]
});

const languageStore = {
  state: {
    language: "fr"
  },

  getters: {
    getLanguage: state => state.language
  },

  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    languageStore
  }
});

new Vue({
  el: "#app",
  router,
  store,
  template: "<app/>",
  components: {
    app
  }
}).$mount("#app");
