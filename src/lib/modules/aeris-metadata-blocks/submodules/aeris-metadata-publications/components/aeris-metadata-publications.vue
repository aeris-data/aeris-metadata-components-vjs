<i18n>
{
  "en": {
    "publications": "Publications"
  },
  "fr": {
    "publications": "Publications"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('publications')" :theme="theme" icon="fas fa-bookmark">
    <aeris-metadata-publication
      v-for="publication in publications"
      :key="publication.title"
      :publication="publication"
      :language="language"
      :theme="theme"
    ></aeris-metadata-publication>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataPublication from "../../../../aeris-metadata-blocks/submodules/aeris-metadata-publications/components/aeris-metadata-publication";

export default {
  name: "aeris-metadata-publications",
  components: { AerisMetadataLayout, AerisMetadataPublication },
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
    publications: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  computed: {
    isVisible() {
      let visible = this.publications !== null && this.publications.length >= 1;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });
      return visible;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  }
};
</script>
