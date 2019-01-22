import AerisMetadataCitations from "./submodules/aeris-metadata-citations/components/aeris-metadata-citations-register.js";
import AerisMetadataContacts from "./submodules/aeris-metadata-contacts/components/aeris-metadata-contacts-register.js";
import AerisMetadataDataPolicy from "./submodules/aeris-metadata-datapolicy/components/aeris-metadata-datapolicy-register.js";
import AerisMetadataDataLinks from "./submodules/aeris-metadata-data-links/components/aeris-metadata-data-links-register.js";
import AerisMetadataDescription from "./submodules/aeris-metadata-description/components/aeris-metadata-description-register.js";
import AerisMetadataDoi from "./submodules/aeris-metadata-doi/components/aeris-metadata-doi-register.js";
import AerisMetadataFormats from "./submodules/aeris-metadata-formats/components/aeris-metadata-formats-register.js";
import AerisMetadataInformations from "./submodules/aeris-metadata-information/components/aeris-metadata-information-register.js";
import AerisMetadataInformationLink from "./submodules/aeris-metadata-information-links/components/aeris-metadata-information-links-register.js";
import AerisMetadataInstruments from "./submodules/aeris-metadata-instruments/components/aeris-metadata-instruments-register.js";
import AerisMetadataModifications from "./submodules/aeris-metadata-modifications/components/aeris-metadata-modifications-register.js";
import AerisMetadataParameters from "./submodules/aeris-metadata-parameters/components/aeris-metadata-parameters-register.js";
import AerisMetadataPlatforms from "./submodules/aeris-metadata-platforms/components/aeris-metadata-platforms-register.js";
import AerisMetadataPublications from "./submodules/aeris-metadata-publications/components/aeris-metadata-publications-register.js";
import AerisMetadataQuicklookGallery from "./submodules/aeris-metadata-quicklook-gallery/components/aeris-metadata-quicklook-gallery-register.js";
import AerisMetadataSingleFileDonwload from "./submodules/aeris-metadata-single-file-download/components/aeris-metadata-single-file-download-register.js";
import AerisMetadataSpatialExtents from "./submodules/aeris-metadata-spatial-extents/components/aeris-metadata-spatial-extents-register.js";
import AerisMetadataTemporalExtents from "./submodules/aeris-metadata-temporal-extents/components/aeris-metadata-temporal-extents-register.js";
import AerisMetadataTitle from "./submodules/aeris-metadata-title/components/aeris-metadata-title-register.js";
import AerisMetadataYearSelectDownload from "./submodules/aeris-metadata-year-select-download/components/aeris-metadata-year-select-download-register.js";

var components = [
AerisMetadataYearSelectDownload,
AerisMetadataTitle,
AerisMetadataTemporalExtents,
AerisMetadataSpatialExtents,
AerisMetadataSingleFileDonwload,
AerisMetadataQuicklookGallery,
AerisMetadataPublications,
AerisMetadataPlatforms,
AerisMetadataParameters,
AerisMetadataModifications,
AerisMetadataInstruments,
AerisMetadataInformationLink,
AerisMetadataInformations,
AerisMetadataFormats,
AerisMetadataDoi,
AerisMetadataDescription,
AerisMetadataDataLinks,
AerisMetadataDataPolicy,
AerisMetadataContacts,
AerisMetadataCitations]

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