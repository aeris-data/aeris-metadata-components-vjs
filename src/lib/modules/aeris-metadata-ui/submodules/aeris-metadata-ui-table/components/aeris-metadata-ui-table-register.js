import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataUiTable from "./aeris-metadata-ui-table.vue";

const components = [AerisMetadataUiTable];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
