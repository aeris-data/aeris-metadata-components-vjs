import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataCitation from "./aeris-metadata-citation.vue";
import AerisMetadataCitations from "./aeris-metadata-citations.vue";

const components = [AerisMetadataCitation,AerisMetadataCitations];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);      clearInterval(timer);
    }, 2000);
  }
};
