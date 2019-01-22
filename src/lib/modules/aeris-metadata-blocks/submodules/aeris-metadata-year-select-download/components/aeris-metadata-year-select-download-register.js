import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadatayearSelectdonwload from "./aeris-metadata-year-select-download.vue";

const components = [AerisMetadatayearSelectdonwload];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
