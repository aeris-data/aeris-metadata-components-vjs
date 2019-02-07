<i18n>
{
  "en": {
    "formats": "Formats"
  },
  "fr": {
    "formats": "Formats"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('formats')" :theme="theme" icon="fa fa-list-ul">
    <div v-for="format in getFormats" :key="format.version + format.description">
      <aeris-metadata-format :format="format" :language="language"></aeris-metadata-format>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataFormat from "./aeris-metadata-format";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

export default {
  name: "aeris-metadata-formats",

  components: { AerisMetadataFormat, AerisMetadataLayout },

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
    formats: {
      type: Array,
      default: null
    }
  },

  computed: {
    isVisible() {
      return this.formats !== null && this.formats.length > 0;
    },
    getFormats() {
      let formats = [];
      if (this.formats !== null && this.formats.length > 0) {
        formats = this.formats;
      }

      return formats;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.language;
  }
};
</script>
