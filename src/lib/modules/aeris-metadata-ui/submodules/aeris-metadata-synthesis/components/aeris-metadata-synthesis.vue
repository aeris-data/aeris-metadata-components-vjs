<template>
  <div class="aeris-metadata-synthesis-host">
    <aeris-metadata-services
      :identifier="id"
      :language="language"
      service="https://sedoo.aeris-data.fr/catalogue/rest/metadatarecette/id"
      @metadata="updateMetadata"
    ></aeris-metadata-services>
    <div v-if="metadata !== null" class="metadata-container">
      <aeris-metadata-title
        :resource-title="metadata.resourceTitle"
        :theme="theme"
        language="language"
      ></aeris-metadata-title>
      <aeris-metadata-description
        :resource-abstract="metadata.resourceAbstract"
        :theme="theme"
        :language="language"
        markdown="true"
      ></aeris-metadata-description>
      <aeris-metadata-temporal-extents
        :temporal-extents="metadata.temporalExtents"
        :theme="theme"
        :language="language"
      ></aeris-metadata-temporal-extents>
      <aeris-metadata-data-links
        :links="metadata.links"
        :theme="theme"
        :language="language"
      ></aeris-metadata-data-links>
      <aeris-metadata-information-links
        :links="metadata.links"
        :theme="theme"
        :language="language"
      ></aeris-metadata-information-links>
      <aeris-metadata-platforms
        :platforms="metadata.platforms"
        :theme="theme"
        :language="language"
      ></aeris-metadata-platforms>
      <aeris-metadata-formats :formats="metadata.formats" :theme="theme" :language="language"></aeris-metadata-formats>
      <aeris-metadata-parameters
        :parameters="metadata.parameters"
        :theme="theme"
        :language="language"
      ></aeris-metadata-parameters>
      <aeris-metadata-citations
        :identifiers="metadata.identifiers"
        :theme="theme"
        :language="language"
      ></aeris-metadata-citations>
      <aeris-metadata-publications
        :publications="metadata.publications"
        :theme="theme"
        :language="language"
      ></aeris-metadata-publications>
      <aeris-metadata-spatial-extents
        :spatial-extents="metadata.spatialExtents"
        :theme="theme"
        :language="language"
      ></aeris-metadata-spatial-extents>
      <aeris-metadata-contacts
        :contacts="metadata.contacts"
        :theme="theme"
        :language="language"
      ></aeris-metadata-contacts>
    </div>
  </div>
</template>

<script>
import {
  AerisMetadataTitle,
  AerisMetadataDescription,
  AerisMetadataTemporalExtents,
  AerisMetadataDataLinks,
  AerisMetadataInformationLinks,
  AerisMetadataPlatforms,
  AerisMetadataFormats,
  AerisMetadataParameters,
  AerisMetadataCitations,
  AerisMetadataPublications,
  AerisMetadataQuicklookGallery,
  AerisMetadataSpatialExtents,
  AerisMetadataContacts,
  AerisMetadataServices
} from "../../../../aeris-metadata-components";

export default {
  name: "aeris-metadata-synthesis",

  components: {
    AerisMetadataTitle,
    AerisMetadataDescription,
    AerisMetadataTemporalExtents,
    AerisMetadataDataLinks,
    AerisMetadataInformationLinks,
    AerisMetadataPlatforms,
    AerisMetadataFormats,
    AerisMetadataParameters,
    AerisMetadataCitations,
    AerisMetadataPublications,
    AerisMetadataQuicklookGallery,
    AerisMetadataSpatialExtents,
    AerisMetadataContacts,
    AerisMetadataServices
  },

  props: {
    language: {
      type: String,
      default: "en"
    },

    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },

    service: {
      type: String,
      default: "https://sedoo.aeris-data.fr/catalogue/rest/projectrecette/id/"
    },

    identifier: {
      type: String,
      default: ""
    }
  },
  data() {
    null;
  },
  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris metadata synthesis - Creating");
    this.$i18n.locale = this.language;
  },
  methods: {
    updateMetadata(metadata) {
      this.metadata = metadata;
    }
  }
};
</script>

<style scoped>
.aeris-metadata-synthesis-host .metadata-container {
  margin: 0 auto;
  max-width: 1000px;
}

.aeris-metadata-synthesis-host .component-container {
  margin-bottom: 10px;
}
</style>
