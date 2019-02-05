import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataSpatialExtents from "./aeris-metadata-spatial-extents";

const components = [AerisMetadataSpatialExtents];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
