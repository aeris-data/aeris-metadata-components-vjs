import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataModifications from "./aeris-metadata-modifications";

const components = [AerisMetadataModifications];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
