import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataQuicklookGallery from "./aeris-metadata-quicklook-gallery.vue";

const components = [AerisMetadataQuicklookGallery];


export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
