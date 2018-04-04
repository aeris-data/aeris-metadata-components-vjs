import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueLayers from 'vuelayers'
Vue.use(VueLayers)

import {
  VueColorPlugin,
  VueAerisLanguagePlugin
} from 'aeris-mixins'
Vue.use(VueColorPlugin)
Vue.use(VueAerisLanguagePlugin)

import AerisMetadataComponents from '../lib/aeris-metadata-components.js'
Vue.use(AerisMetadataComponents);

import VueCustomElementRecorder from '../lib/vue-custom-element-recorder.js'
VueCustomElementRecorder.run();

import app from './app.vue'
import metadata from './metadata.vue'
import quicklookGallery from './quicklook-gallery.vue'
import metadataSynthesis from './aeris-metadata-synthesis.vue'

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
