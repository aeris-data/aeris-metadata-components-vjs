import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataInstrument from "./aeris-metadata-instrument.vue";
import AerisMetadataInstruments from "./aeris-metadata-instruments.vue";

const components = [AerisMetadataInstrument,AerisMetadataInstruments];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
