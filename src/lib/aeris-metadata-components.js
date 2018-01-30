import AerisMetadata from './components/aeris-metadata/aeris-metadata.vue';
import AerisMetadataList from './components/aeris-metadata-ui/aeris-metadata-list.vue'
import AerisMetadataUiCard from './components/aeris-metadata-ui/aeris-metadata-ui-card.vue';
import AerisMetadataListDefinitionLayout from './components/aeris-metadata-layouts/aeris-metadata-list-definition-layout.vue'
import AerisMetadataListDefinitionMultipleLayout from './components/aeris-metadata-layouts/aeris-metadata-list-definition-multiple-layout.vue'
import AerisMetadataLayout from './components/aeris-metadata-layouts/aeris-metadata-layout.vue';
import AerisMetadataInternationalField from './components/aeris-metadata-international-field/aeris-metadata-international-field.vue'
import AerisMetadataContacts from './components/aeris-metadata-blocks/aeris-metadata-contacts/aeris-metadata-contacts.vue'
import AerisMetadataTemporalExtent from './components/aeris-metadata-blocks/aeris-metadata-temporal-extents/aeris-metadata-temporal-extent.vue'
import AerisMetadataTemporalExtents from './components/aeris-metadata-blocks/aeris-metadata-temporal-extents/aeris-metadata-temporal-extents.vue'
import AerisMetadataSpatialExtents from './components/aeris-metadata-blocks/aeris-metadata-spatial-extents/aeris-metadata-spatial-extents.vue'
import AerisMetadataFormats from './components/aeris-metadata-blocks/aeris-metadata-formats/aeris-metadata-formats.vue'
import AerisMetadataDescription from './components/aeris-metadata-blocks/aeris-metadata-description/aeris-metadata-description.vue'
import AerisMetadataInformationLink from './components/aeris-metadata-blocks/aeris-metadata-information-links/aeris-metadata-information-link.vue'
import AerisMetadataInformationLinks from './components/aeris-metadata-blocks/aeris-metadata-information-links/aeris-metadata-information-links.vue'
import AerisMetadataDataLinks from './components/aeris-metadata-blocks/aeris-metadata-data-links/aeris-metadata-data-links.vue'
import AerisMetadataInformation from './components/aeris-metadata-blocks/aeris-metadata-information/aeris-metadata-information.vue'
import AerisMetadataPublications from './components/aeris-metadata-blocks/aeris-metadata-publications/aeris-metadata-publications.vue'
import AerisMetadataPublication from './components/aeris-metadata-blocks/aeris-metadata-publications/aeris-metadata-publication.vue'
import AerisMetadataParameter from './components/aeris-metadata-blocks/aeris-metadata-parameters/aeris-metadata-parameter.vue'
import AerisMetadataParameters from './components/aeris-metadata-blocks/aeris-metadata-parameters/aeris-metadata-parameters.vue'
import AerisMetadataPlatforms from './components/aeris-metadata-blocks/aeris-metadata-platforms/aeris-metadata-platforms.vue'
import AerisMetadataPlatform from './components/aeris-metadata-blocks/aeris-metadata-platforms/aeris-metadata-platform.vue'
import AerisMetadataQuicklookGallery from './components/aeris-metadata-blocks/aeris-metadata-quicklook-gallery/aeris-metadata-quicklook-gallery.vue'
import AerisMetadataDoi from './components/aeris-metadata-blocks/aeris-metadata-doi/aeris-metadata-doi.vue'
import AerisMetadataDatapolicy from './components/aeris-metadata-blocks/aeris-metadata-datapolicy/aeris-metadata-datapolicy.vue'
import AerisMetadataModifications from './components/aeris-metadata-blocks/aeris-metadata-modifications/aeris-metadata-modifications.vue'
import AerisMetadataSingleFileDownload from './components/aeris-metadata-blocks/aeris-metadata-single-file-download/aeris-metadata-single-file-download.vue';
import AerisMetadataYearSelectDownload from './components/aeris-metadata-blocks/aeris-metadata-year-select-download/aeris-metadata-year-select-download.vue';
import AerisMetadataSynthesis from './components/misc/aeris-metadata-synthesis.vue';

const AerisMetadataComponents = {
  AerisMetadata,
  AerisMetadataList,
  AerisMetadataUiCard,
  AerisMetadataListDefinitionLayout,
  AerisMetadataListDefinitionMultipleLayout,
  AerisMetadataLayout,
  AerisMetadataInternationalField,
  AerisMetadataContacts,
  AerisMetadataTemporalExtent,
  AerisMetadataTemporalExtents,
  AerisMetadataSpatialExtents,
  AerisMetadataFormats,
  AerisMetadataDescription,
  AerisMetadataInformationLink,
  AerisMetadataInformationLinks,
  AerisMetadataDataLinks,
  AerisMetadataInformation,
  AerisMetadataPublications,
  AerisMetadataPublication,
  AerisMetadataParameter,
  AerisMetadataParameters,
  AerisMetadataPlatforms,
  AerisMetadataPlatform,
  AerisMetadataQuicklookGallery,
  AerisMetadataDoi,
  AerisMetadataDatapolicy,
  AerisMetadataModifications,
  AerisMetadataSingleFileDownload,
  AerisMetadataYearSelectDownload,
  AerisMetadataSynthesis
};

AerisMetadataComponents.install = (Vue) => {

  for (let component in AerisMetadataComponents) {
    if (AerisMetadataComponents[component] && component !== 'install') {
      Vue.component(AerisMetadataComponents[component].name, AerisMetadataComponents[component]);
    }
  }
};

export default AerisMetadataComponents;
