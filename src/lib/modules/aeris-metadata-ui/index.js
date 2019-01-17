import Vue from "vue";

import AerisMetadataUiTable from "./submodules/aeris-metadata-ui-table/components/aeris-metadata-ui-table-register.js";
import AerisMetadataLayout from "./submodules/aeris-metadata-layout/components/aeris-metadata-layout-register.js";
import AerisMetadataList from "./submodules/aeris-metadata-list/components/aeris-metadata-list-register.js";
import AerisMetadataSynthesis from "./submodules/aeris-metadata-synthesis/components/aeris-metadata-synthesis-register.js";

Vue.use(AerisMetadataSynthesis);
Vue.use(AerisMetadataList);
Vue.use(AerisMetadataLayout);
Vue.use(AerisMetadataUiTable);