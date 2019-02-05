import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataFormat from "./aeris-metadata-format";
import AerisMetadataFormats from "./aeris-metadata-formats";

const components = [AerisMetadataFormat, AerisMetadataFormats];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
