import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataPlateforme from "./aeris-metadata-platform.vue";
import AerisMetadataPlateformes from "./aeris-metadata-platforms.vue";

const components = [AerisMetadataPlateforme, AerisMetadataPlateformes];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
