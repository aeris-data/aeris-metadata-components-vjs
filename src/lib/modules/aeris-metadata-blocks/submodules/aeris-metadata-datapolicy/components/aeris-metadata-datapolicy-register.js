import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataDataPolicy from "./aeris-metadata-datapolicy.vue";

const components = [AerisMetadataDataPolicy];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
