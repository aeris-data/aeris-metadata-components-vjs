import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataList from "./aeris-metadata-list.vue";

const components = [AerisMetadataList];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
