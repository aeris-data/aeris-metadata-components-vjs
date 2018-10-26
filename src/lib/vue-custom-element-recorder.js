import Vue from "vue";

import AerisMetadata from "./components/aeris-metadata/aeris-metadata.vue";
import AerisMetadataList from "./components/aeris-metadata-ui/aeris-metadata-list.vue";
import AerisMetadataUiTable from "./components/aeris-metadata-ui/aeris-metadata-ui-table.vue";
import AerisMetadataLayout from "./components/aeris-metadata-layouts/aeris-metadata-layout.vue";
import AerisMetadataInternationalField from "./components/aeris-metadata-international-field/aeris-metadata-international-field.vue";
import AerisMetadataContact from "./components/aeris-metadata-blocks/aeris-metadata-contacts/aeris-metadata-contact.vue";
import AerisMetadataContacts from "./components/aeris-metadata-blocks/aeris-metadata-contacts/aeris-metadata-contacts.vue";
import AerisMetadataTemporalExtent from "./components/aeris-metadata-blocks/aeris-metadata-temporal-extents/aeris-metadata-temporal-extent.vue";
import AerisMetadataTemporalExtents from "./components/aeris-metadata-blocks/aeris-metadata-temporal-extents/aeris-metadata-temporal-extents.vue";
import AerisMetadataSpatialExtents from "./components/aeris-metadata-blocks/aeris-metadata-spatial-extents/aeris-metadata-spatial-extents.vue";
import AerisMetadataFormats from "./components/aeris-metadata-blocks/aeris-metadata-formats/aeris-metadata-formats.vue";
import AerisMetadataFormat from "./components/aeris-metadata-blocks/aeris-metadata-formats/aeris-metadata-format.vue";
import AerisMetadataDescription from "./components/aeris-metadata-blocks/aeris-metadata-description/aeris-metadata-description.vue";
import AerisMetadataInformationLink from "./components/aeris-metadata-blocks/aeris-metadata-information-links/aeris-metadata-information-link.vue";
import AerisMetadataInformationLinks from "./components/aeris-metadata-blocks/aeris-metadata-information-links/aeris-metadata-information-links.vue";
import AerisMetadataDataLinks from "./components/aeris-metadata-blocks/aeris-metadata-data-links/aeris-metadata-data-links.vue";
import AerisMetadataInformation from "./components/aeris-metadata-blocks/aeris-metadata-information/aeris-metadata-information.vue";
import AerisMetadataPublications from "./components/aeris-metadata-blocks/aeris-metadata-publications/aeris-metadata-publications.vue";
import AerisMetadataPublication from "./components/aeris-metadata-blocks/aeris-metadata-publications/aeris-metadata-publication.vue";
import AerisMetadataParameter from "./components/aeris-metadata-blocks/aeris-metadata-parameters/aeris-metadata-parameter.vue";
import AerisMetadataParameters from "./components/aeris-metadata-blocks/aeris-metadata-parameters/aeris-metadata-parameters.vue";
import AerisMetadataPlatforms from "./components/aeris-metadata-blocks/aeris-metadata-platforms/aeris-metadata-platforms.vue";
import AerisMetadataPlatform from "./components/aeris-metadata-blocks/aeris-metadata-platforms/aeris-metadata-platform.vue";
import AerisMetadataQuicklookGallery from "./components/aeris-metadata-blocks/aeris-metadata-quicklook-gallery/aeris-metadata-quicklook-gallery.vue";
import AerisMetadataDoi from "./components/aeris-metadata-blocks/aeris-metadata-doi/aeris-metadata-doi.vue";
import AerisMetadataDatapolicy from "./components/aeris-metadata-blocks/aeris-metadata-datapolicy/aeris-metadata-datapolicy.vue";
import AerisMetadataModifications from "./components/aeris-metadata-blocks/aeris-metadata-modifications/aeris-metadata-modifications.vue";
import AerisMetadataSingleFileDownload from "./components/aeris-metadata-blocks/aeris-metadata-single-file-download/aeris-metadata-single-file-download.vue";
import AerisMetadataYearSelectDownload from "./components/aeris-metadata-blocks/aeris-metadata-year-select-download/aeris-metadata-year-select-download.vue";
import AerisMetadataInstrument from "./components/aeris-metadata-blocks/aeris-metadata-instruments/aeris-metadata-instrument.vue";
import AerisMetadataInstruments from "./components/aeris-metadata-blocks/aeris-metadata-instruments/aeris-metadata-instruments.vue";
import AerisMetadataSynthesis from "./components/misc/aeris-metadata-synthesis.vue";
import AerisMetadataTitle from "./components/aeris-metadata-blocks/aeris-metadata-title/aeris-metadata-title.vue";
import AerisMetadataCitations from "./components/aeris-metadata-blocks/aeris-metadata-citations/aeris-metadata-citations.vue";
import AerisMetadataCitation from "./components/aeris-metadata-blocks/aeris-metadata-citations/aeris-metadata-citation.vue";

const css = [
  "https://unpkg.com/vuelayers/lib/style.css",
  "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
];
const js = [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js"
];

css.forEach(file => {
  let link = document.createElement("link");
  link.setAttribute("type", "text/css");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", file);
  document.head.appendChild(link);
});

js.forEach(file => {
  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file);
  document.head.appendChild(script);
});

const components = [
  AerisMetadata,
  AerisMetadataList,
  AerisMetadataUiTable,
  AerisMetadataLayout,
  AerisMetadataInternationalField,
  AerisMetadataContact,
  AerisMetadataContacts,
  AerisMetadataTemporalExtent,
  AerisMetadataTemporalExtents,
  AerisMetadataSpatialExtents,
  AerisMetadataFormats,
  AerisMetadataFormat,
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
  AerisMetadataInstruments,
  AerisMetadataInstrument,
  AerisMetadataSynthesis,
  AerisMetadataTitle,
  AerisMetadataCitations,
  AerisMetadataCitation
];

const VueCustomElementRecorder = {
  run() {
    if (!window.registredAerisElements) {
      window.registredAerisElements = [];
    }

    var timer;

    function stopTimer() {
      clearInterval(timer);
    }

    function registerComponents() {
      console.info("trying to register aeris metadata components");
      console.info("Début registration des aeris metadata components");
      console.info(
        "Registred elements at this time: " + window.registredAerisElements
      );

      for (let component in components) {
        if (components[component]) {
          if (
            window.registredAerisElements.indexOf(components[component].name) <
            0
          ) {
            Vue.customElement(
              components[component].name,
              components[component]
            );
            window.registredAerisElements.push(components[component].name);
          }
        }
      }

      window.registredAerisElements.push("aeris-metadata-components-vjs");
      stopTimer();
      console.info("aeris metadata components registration complete");
    }

    timer = setInterval(function() {
      registerComponents();
    }, 1000);
  }
};

export default VueCustomElementRecorder;
