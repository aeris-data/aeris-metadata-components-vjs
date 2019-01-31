import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataPublication from "./aeris-metadata-publication";
import AerisMetadataPublications from "./aeris-metadata-publications";

const components = [AerisMetadataPublications, AerisMetadataPublication];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
}