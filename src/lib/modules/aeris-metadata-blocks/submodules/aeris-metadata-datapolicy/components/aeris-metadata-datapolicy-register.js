import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataDatapolicy from "./aeris-metadata-datapolicy";

const components = [AerisMetadataDatapolicy];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
