<template>
  <div>
    <aeris-metadata-services
      :identifier="id"
      lang="fr"
      service="https://sedoo.aeris-data.fr/catalogue/rest/metadatarecette/id"
      @metadata="updateMetadata"
      @notification="updateNotification"
    >
      <div v-if="metadata !== null" class="metadatapanel">
        <aeris-metadata-description
          :resource-abstract="metadata.resourceAbstract"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
          markdown=""
        ></aeris-metadata-description>
        <aeris-metadata-contacts
          :contacts="metadata.contacts"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-contacts>
        <aeris-metadata-spatial-extents
          :spatial-extents="metadata.spatialExtents"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-spatial-extents>
        <aeris-metadata-information-links
          :links="metadata.links"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-information-links>
        <aeris-metadata-information
          :items="getOtherInformations"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-information>
        <aeris-metadata-datapolicy
          :distribution-information="metadata.distributionInformation"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-datapolicy>
        <aeris-metadata-temporal-extents
          :temporal-extents="metadata.temporalExtents"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-temporal-extents>
        <aeris-metadata-modifications
          :modifications="metadata.modifications"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-modifications>
        <aeris-metadata-citations
          :identifiers="metadata.identifiers"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-citations>
        <aeris-metadata-platforms
          :platforms="metadata.platforms"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-platforms>
        <aeris-metadata-instruments
          :instruments="metadata.instruments"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-instruments>
        <aeris-metadata-formats
          :formats="metadata.formats"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-formats>
        <aeris-metadata-parameters
          :parameters="metadata.parameters"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-parameters>
        <aeris-metadata-data-links
          :links="metadata.links"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-data-links>
        <aeris-metadata-publications
          :publications="metadata.publications"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-publications>
        <aeris-metadata-quicklook-gallery
          :quicklooks="metadata.quicklooks"
          :theme="getThemeFromStore"
          :language="getLanguageFromStore"
        ></aeris-metadata-quicklook-gallery>
      </div>

      <aeris-notifier
        :delete-notif-uuid="uuid"
        :new-notification="notification"
        :theme="getThemeFromStore"
        :language="getLanguageFromStore"
      ></aeris-notifier>
      <aeris-language :theme="theme"></aeris-language>
      <aeris-theme></aeris-theme>
    </aeris-metadata-services>
  </div>
</template>

<script>
import {
  AerisMetadataCitations,
  AerisMetadataContacts,
  AerisMetadataDataLinks,
  AerisMetadataDatapolicy,
  AerisMetadataDescription,
  AerisMetadataFormats,
  AerisMetadataInformation,
  AerisMetadataInformationLinks,
  AerisMetadataInstruments,
  AerisMetadataModifications,
  AerisMetadataParameters,
  AerisMetadataPlatforms,
  AerisMetadataPublications,
  AerisMetadataQuicklookGallery,
  AerisMetadataSpatialExtents,
  AerisMetadataTemporalExtents,
  AerisMetadataServices
} from "../../../lib/modules/aeris-metadata-components";

import { AerisNotifier, AerisTheme, AerisLanguage } from "aeris-commons-components-vjs";

export default {
  name: "aeris-metadata-services-test",
  components: {
    AerisMetadataCitations,
    AerisMetadataContacts,
    AerisMetadataDataLinks,
    AerisMetadataDatapolicy,
    AerisMetadataDescription,
    AerisMetadataFormats,
    AerisMetadataInformation,
    AerisMetadataInformationLinks,
    AerisMetadataInstruments,
    AerisMetadataModifications,
    AerisMetadataParameters,
    AerisMetadataPlatforms,
    AerisMetadataPublications,
    AerisMetadataQuicklookGallery,
    AerisMetadataSpatialExtents,
    AerisMetadataTemporalExtents,
    AerisMetadataServices,
    AerisNotifier,
    AerisTheme,
    AerisLanguage
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      metadata: null,
      notification: null,
      uuid: null,
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  },
  computed: {
    getOtherInformations() {
      if (this.metadata) {
        return {
          identifier: this.metadata.identifier,
          lastModification: this.metadata.lastModification,
          aerisDataCenter: this.metadata.aerisDataCenter,
          dataLevel: this.metadata.dataLevel
        };
      } else {
        return null;
      }
    },
    getThemeFromStore() {
      if (this.$store && this.$store.getters.getPrimaryColor) {
        return {
          primaryColor: this.$store.getters.getPrimaryColor,
          secondaryColor: this.$store.getters.getSecondaryColor
        };
      } else {
        return {};
      }
    },
    getLanguageFromStore() {
      if (this.$store && this.$store.getters.getLanguage) {
        return this.$store.getters.getLanguage;
      } else {
        return "en";
      }
    }
  },
  created() {
    setTimeout(() => {
      this.$store.commit("setLanguage", "fr");
      this.$store.commit("setPrimaryColor", "pink");
    }, 4000);
    setTimeout(() => {
      this.$store.commit("setLanguage", "en");
      this.$store.commit("setPrimaryColor", "#0b6bb3");
    }, 8000);
  },
  methods: {
    updateMetadata(metadata) {
      this.metadata = metadata;
    },
    updateNotification(notification) {
      if (notification.message) {
        this.notification = notification;
        this.uuid = null;
      } else {
        this.notification = null;
        this.uuid = notification.uuid;
      }
    }
  }
};
</script>

<style scoped>
.metadatapanel {
  --gap: 12px;
  --heightHeader: 80px;
  height: 100%;
  background: #ddd;
  column-count: 2;
  column-gap: var(--gap);
  column-fill: balance;
  padding: 10px;
}

.metadatapanel > div {
  height: calc(100% - var(--heightHeader));
  overflow-y: auto;
}
</style>
