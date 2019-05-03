<i18n>
{
  "en": {
    "gallery": "Gallery"
  },
  "fr": {
    "gallery": "Galerie"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('gallery')" :theme="theme" icon="fas fa-image">
    <aeris-gallery :images="quicklooks"></aeris-gallery>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import { AerisGallery } from "aeris-commons-components-vjs";

export default {
  name: "aeris-metadata-quicklook-gallery",

  components: { AerisMetadataLayout, AerisGallery },

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
    quicklooks: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    isVisible() {
      let visible = this.quicklooks !== null && this.quicklooks.length > 0;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });
      return visible;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  }
};
</script>
