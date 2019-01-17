import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataParameter from "./aeris-metadata-parameter.vue";
import AerisMetadataParameters from "./aeris-metadata-parameters.vue";

const components = [AerisMetadataParameter,AerisMetadataParameters];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
