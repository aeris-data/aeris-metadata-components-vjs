import HelperRegisterModule from "../../../../helper-register-module.js";

import AerisMetadataSingleFileDownload from "./aeris-metadata-single-file-download.vue";

const components = [AerisMetadataSingleFileDownload];


export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
