import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataSapatialExtents from "./aeris-metadata-spatial-extents.vue";

const components = [AerisMetadataSapatialExtents];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
