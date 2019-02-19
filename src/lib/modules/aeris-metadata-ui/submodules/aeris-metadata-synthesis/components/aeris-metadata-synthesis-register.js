import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataSynthesis from "./aeris-metadata-synthesis";
const components = [AerisMetadataSynthesis];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
