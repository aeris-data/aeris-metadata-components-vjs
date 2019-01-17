import HelperRegisterModule from "../../helper-register-module.js";

import AerisMetadataInternationalField from "./aeris-metadata-international-field.vue";

const components = [AerisMetadataInternationalField];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
