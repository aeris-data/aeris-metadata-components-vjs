import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataList from "./aeris-metadata-list";

const components = [AerisMetadataList];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
