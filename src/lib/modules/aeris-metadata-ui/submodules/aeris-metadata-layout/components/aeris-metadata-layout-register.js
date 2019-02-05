import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataLayout from "./aeris-metadata-layout";

const components = [AerisMetadataLayout];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
