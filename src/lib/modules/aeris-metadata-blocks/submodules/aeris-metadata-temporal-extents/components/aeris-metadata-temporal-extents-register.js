import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataTemporalExtend from "./aeris-metadata-temporal-extent.vue";
import AerisMetadataTemporalExtends from "./aeris-metadata-temporal-extents.vue";

const components = [AerisMetadataTemporalExtend,AerisMetadataTemporalExtends];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
