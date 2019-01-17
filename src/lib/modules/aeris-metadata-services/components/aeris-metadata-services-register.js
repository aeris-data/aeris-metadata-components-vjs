import HelperRegisterModule from "../../helper-register-module.js";

import AerisMetadataService from "./aeris-metadata-services.vue";

const components = [AerisMetadataService];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
