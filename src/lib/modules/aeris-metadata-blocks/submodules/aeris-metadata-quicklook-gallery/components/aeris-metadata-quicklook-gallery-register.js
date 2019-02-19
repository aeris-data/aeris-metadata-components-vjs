import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataQuicklookGallery from "./aeris-metadata-quicklook-gallery";

const components = [AerisMetadataQuicklookGallery];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
