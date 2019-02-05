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
  <aeris-metadata-layout v-if="isVisible" :title="$t('publications')" icon="fa fa-bookmark-o">
    <aeris-metadata-publication
      v-for="publication in publications"
      :key="publication.title"
      :publication="publication"
      :language="language"
    />
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
    publications: {
      type: Array,
      default: []
    }
  },

  computed: {
    isVisible() {
      return this.publications.length >= 1;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  }
};
</script>
