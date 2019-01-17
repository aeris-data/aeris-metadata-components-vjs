import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataContact from "./aeris-metadata-contact.vue";
import AerisMetadataContacts from "./aeris-metadata-contacts.vue";

const components = [AerisMetadataContact,AerisMetadataContacts];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
