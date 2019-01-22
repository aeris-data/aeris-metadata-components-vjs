import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataInformation from "./aeris-metadata-information.vue";

const components = [AerisMetadataInformation];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
