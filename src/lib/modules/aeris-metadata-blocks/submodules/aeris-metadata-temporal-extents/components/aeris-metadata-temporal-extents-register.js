import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataTemporalExtent from "./aeris-metadata-temporal-extent";
import AerisMetadataTemporalExtents from "./aeris-metadata-temporal-extents";

const components = [AerisMetadataTemporalExtent, AerisMetadataTemporalExtents];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
