import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

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

import AerisMetadataInformationTest from "./modules/aeris-metadata-blocks/submodules/aeris-metadata-information/aeris-metadata-information-test";

const LanguageStore = {
  state: {
    language: "en"
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

const ThemeStore = {
  state: {
    primaryColor: "#0b6bb3",
    secondaryColor: "#f39c12"
  },

  getters: {
    getPrimaryColor: state => state.primaryColor,
    getSecondaryColor: state => state.secondaryColor
  },

  mutations: {
    setPrimaryColor(state, primaryColor) {
      state.primaryColor = primaryColor;
    },
    setSecondaryColor(state, secondaryColor) {
      state.secondaryColor = secondaryColor;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    LanguageStore,
    ThemeStore
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
      path: "/information",
      component: AerisMetadataInformationTest
    }
  ]
});

new Vue({
  el: "#app",
  store,
  router,
  template: "<app/>",
  components: {
    app,
    metadata,
    quicklookGallery,
    metadataSynthesis
  }
}).$mount("#app");
