import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataInstrument from "./aeris-metadata-instrument";
import AerisMetadataInstruments from "./aeris-metadata-instruments";

const components = [AerisMetadataInstrument, AerisMetadataInstruments];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
