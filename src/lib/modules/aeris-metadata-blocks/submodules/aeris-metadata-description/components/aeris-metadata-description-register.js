import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataDescription from "./aeris-metadata-description.vue";

const components = [AerisMetadataDescription];


export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
