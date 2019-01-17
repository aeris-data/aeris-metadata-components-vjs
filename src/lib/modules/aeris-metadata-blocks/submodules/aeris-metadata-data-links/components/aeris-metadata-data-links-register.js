import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataDataLinks from "./aeris-metadata-data-links.vue";

const components = [AerisMetadataDataLinks];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
