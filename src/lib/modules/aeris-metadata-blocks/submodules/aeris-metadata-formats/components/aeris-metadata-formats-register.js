import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataFormat from "./aeris-metadata-format.vue";
import AerisMetadataFormats from "./aeris-metadata-formats.vue";

const components = [AerisMetadataFormat,AerisMetadataFormats];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
