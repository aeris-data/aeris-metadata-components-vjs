import AerisMetadataServices from "./components/aeris-metadata-services-register.js";

var components = [AerisMetadataServices];

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