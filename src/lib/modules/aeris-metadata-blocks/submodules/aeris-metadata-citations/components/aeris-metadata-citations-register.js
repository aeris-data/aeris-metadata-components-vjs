import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataCitation from "./aeris-metadata-citation";
import AerisMetadataCitations from "./aeris-metadata-citations";

const components = [AerisMetadataCitation, AerisMetadataCitations];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
