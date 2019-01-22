

import AerisMetadataInternationalField from "./components/aeris-metadata-international-field-register.js";

var components = [AerisMetadataInternationalField];



function registerVueComponents(Vue, components) {
  for (let component in components) {
    if (components[component]) {
      Vue.component(components[component]);
    }
  }
}

export default {
  registerVueComponents,
};