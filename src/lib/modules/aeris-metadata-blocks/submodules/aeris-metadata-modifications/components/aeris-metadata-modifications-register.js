import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataModifications from "./aeris-metadata-modifications.vue";

const components = [AerisMetadataModifications];


export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
