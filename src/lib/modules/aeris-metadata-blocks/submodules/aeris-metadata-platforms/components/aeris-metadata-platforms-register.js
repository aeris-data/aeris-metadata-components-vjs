import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataPlatform from "./aeris-metadata-platform";
import AerisMetadataPlatforms from "./aeris-metadata-platforms";

const components = [AerisMetadataPlatform, AerisMetadataPlatforms];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
