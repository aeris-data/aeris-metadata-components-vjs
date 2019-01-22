import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import vueCustomElement from 'vue-custom-element'

//import VueLayers from 'vuelayers'
import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

import VueResource from 'vue-resource';

import app from './app.vue'
import metadata from './modules/metadata.vue'
import quicklookGallery from './modules/quicklook-gallery.vue'
import metadataSynthesis from './modules/aeris-metadata-synthesis.vue'

Vue.use(vueCustomElement);
Vue.use(VueResource);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);
//Vue.use(VueLayers) 



const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/metadata/:id',
      component: metadata,
      props: true
    },
    {
      path: '/quicklook-gallery',
      component: quicklookGallery
    },
    {
      path: '/aeris-metadata-synthesis',
      component: metadataSynthesis
    }
  ]
})

new Vue({
  el: "#app",
  router,
  template: '<app/>',
  components: {
    app,
    metadata,
    quicklookGallery,
    metadataSynthesis
  }
}).$mount('#app')
