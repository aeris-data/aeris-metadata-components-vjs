<i18n>
{
  "en": {
    "citationTitle": "How to cite"
  },
  "fr": {
    "citationTitle": "Proposition de citation"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('citationTitle')" icon="fa fa-quote-left">
    <aeris-metadata-citation v-for="identifier in identifiers" :doi="identifier.code" :key="identifier.code"/>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout"
import AerisMetadataCitation from "../../../../aeris-metadata-blocks/submodules/aeris-metadata-citations/components/aeris-metadata-citation"

export default {
  name: "aeris-metadata-citations",
  components : { AerisMetadataLayout, AerisMetadataCitation },
  props: {
    language: {
      type: String,
      default: ""
    },
    identifiers: {
      type: Array,
      default: []
    }
  },
  computed: {
    isVisible() {
      return this.identifiers.length >= 1
    }
  },
  created() {
    this.$i18n.locale = this.language;
  },
};
</script>
