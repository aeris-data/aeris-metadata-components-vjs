import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataPublication from "./aeris-metadata-publication.vue";
import AerisMetadataPublications from "./aeris-metadata-publication.vue";

const components = [AerisMetadataPublication,AerisMetadataPublications];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
