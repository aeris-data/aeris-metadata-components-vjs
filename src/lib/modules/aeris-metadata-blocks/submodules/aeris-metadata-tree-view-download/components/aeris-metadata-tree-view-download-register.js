import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataTreeViewDownload from "./aeris-metadata-tree-view-download";

const components = [AerisMetadataTreeViewDownload];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
