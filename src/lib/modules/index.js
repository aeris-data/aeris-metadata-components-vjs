import Vue from "vue";
//aeris-metadata-block
import AerisMetadataCitation from "./aeris-metadata-blocks/submodules/aeris-metadata-citations/components/aeris-metadata-citations-register.js";
import AerisMetadataContacts from "./aeris-metadata-blocks/submodules/aeris-metadata-contacts/components/aeris-metadata-contacts-register.js";
import AerisMetadataDataPolicy from "./aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/components/aeris-metadata-datapolicy-register.js";
import AerisMetadataDataLinks from "./aeris-metadata-blocks/submodules/aeris-metadata-data-links/components/aeris-metadata-data-links-register.js";
import AerisMetadataDescription from "./aeris-metadata-blocks/submodules/aeris-metadata-description/components/aeris-metadata-description-register.js";
import AerisMetadataDoi from "./aeris-metadata-blocks/submodules/aeris-metadata-doi/components/aeris-metadata-doi-register.js";
import AerisMetadataFormats from "./aeris-metadata-blocks/submodules/aeris-metadata-formats/components/aeris-metadata-formats-register.js";
import AerisMetadataInformations from "./aeris-metadata-blocks/submodules/aeris-metadata-information/components/aeris-metadata-information-register.js";
import AerisMetadataInformationLink from "./aeris-metadata-blocks/submodules/aeris-metadata-information-links/components/aeris-metadata-information-links-register.js";
import AerisMetadataInstruments from "./aeris-metadata-blocks/submodules/aeris-metadata-instruments/components/aeris-metadata-instruments-register.js";
import AerisMetadataModifications from "./aeris-metadata-blocks/submodules/aeris-metadata-modifications/components/aeris-metadata-modifications-register.js";
import AerisMetadataParameters from "./aeris-metadata-blocks/submodules/aeris-metadata-parameters/components/aeris-metadata-parameters-register.js";
import AerisMetadataPlatforms from "./aeris-metadata-blocks/submodules/aeris-metadata-platforms/components/aeris-metadata-platforms-register.js";
import AerisMetadataPublications from "./aeris-metadata-blocks/submodules/aeris-metadata-publications/components/aeris-metadata-publications-register.js";
import AerisMetadataQuicklookGallery from "./aeris-metadata-blocks/submodules/aeris-metadata-quicklook-gallery/components/aeris-metadata-quicklook-gallery-register.js";
import AerisMetadataSingleFileDonwload from "./aeris-metadata-blocks/submodules/aeris-metadata-single-file-download/components/aeris-metadata-single-file-download-register.js";
import AerisMetadataSpatialExtents from "./aeris-metadata-blocks/submodules/aeris-metadata-spatial-extents/components/aeris-metadata-spatial-extents-register.js";
import AerisMetadataTemporalExtents from "./aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/components/aeris-metadata-temporal-extents-register.js";
import AerisMetadataTitle from "./aeris-metadata-blocks/submodules/aeris-metadata-title/components/aeris-metadata-title-register.js";
import AerisMetadataYearSelectDownload from "./aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/components/aeris-metadata-year-select-download-register.js";

//aeris-metadata-international-field-register
import AerisMetadataInternationalField from "./aeris-metadata-international-field/components/aeris-metadata-international-field-register.js";

//aeris-metadata-services-register
import AerisMetadataServices from "./aeris-metadata-services/components/aeris-metadata-services-register.js";

//aeris-metadata-ui
import AerisMetadataUiTable from "./aeris-metadata-ui/submodules/aeris-metadata-ui-table/components/aeris-metadata-ui-table-register.js";
import AerisMetadataLayout from "./aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout-register.js";
import AerisMetadataList from "./aeris-metadata-ui/submodules/aeris-metadata-list/components/aeris-metadata-list-register.js";
import AerisMetadataSynthesis from "./aeris-metadata-ui/submodules/aeris-metadata-synthesis/components/aeris-metadata-synthesis-register.js";

Vue.use(AerisMetadataSynthesis);
Vue.use(AerisMetadataList);
Vue.use(AerisMetadataLayout);
Vue.use(AerisMetadataUiTable);
Vue.use(AerisMetadataServices);
Vue.use(AerisMetadataInternationalField);
Vue.use(AerisMetadataYearSelectDownload);
Vue.use(AerisMetadataTitle);
Vue.use(AerisMetadataTemporalExtents);
Vue.use(AerisMetadataSpatialExtents);
Vue.use(AerisMetadataSingleFileDonwload);
Vue.use(AerisMetadataQuicklookGallery);
Vue.use(AerisMetadataPublications);
Vue.use(AerisMetadataPlatforms);
Vue.use(AerisMetadataParameters);
Vue.use(AerisMetadataModifications);
Vue.use(AerisMetadataInstruments);
Vue.use(AerisMetadataInformationLink);
Vue.use(AerisMetadataInformations);
Vue.use(AerisMetadataFormats);
Vue.use(AerisMetadataDoi);
Vue.use(AerisMetadataDescription);
Vue.use(AerisMetadataDataLinks);
Vue.use(AerisMetadataDataPolicy);
Vue.use(AerisMetadataContacts);
Vue.use(AerisMetadataCitation);