import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataDoi from "./aeris-metadata-doi.vue";
import AerisMetadataDoiList from "./aeris-metadata-doi-list.vue";

const components = [AerisMetadataDoi,AerisMetadataDoiList];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
