import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataTitle from "./aeris-metadata-title.vue";

const components = [AerisMetadataTitle];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
