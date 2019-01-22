import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataLayout from "./aeris-metadata-layout.vue";

const components = [AerisMetadataLayout];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
