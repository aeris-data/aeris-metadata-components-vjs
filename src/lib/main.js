import Vue from "vue";

import vueCustomElement from "vue-custom-element";
Vue.use(vueCustomElement);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);
