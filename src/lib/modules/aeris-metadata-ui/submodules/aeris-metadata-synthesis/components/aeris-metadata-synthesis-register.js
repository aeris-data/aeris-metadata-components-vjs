import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataSynthesis from "./aeris-metadata-synthesis.vue";

const components = [AerisMetadataSynthesis];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
