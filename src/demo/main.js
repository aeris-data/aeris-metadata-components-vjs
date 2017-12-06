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

import VueCustomElementRecorder from '../lib/vue-custom-element-recorder.js'
VueCustomElementRecorder.run();

import app from './app.vue'
import metadata from './metadata.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/:id',
    component: metadata,
    props: true
  }]
})

new Vue({
  el: "#app",
  router,
  template: '<app/>',
  components: {
    app,
    metadata
  }
}).$mount('#app')
