import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataInformationLink from "./aeris-metadata-information-link";
import AerisMetadataInformationLinks from "./aeris-metadata-information-links";

const components = [AerisMetadataInformationLink, AerisMetadataInformationLinks];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
