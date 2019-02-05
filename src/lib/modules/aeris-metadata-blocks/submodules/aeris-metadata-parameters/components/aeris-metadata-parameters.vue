<i18n>
{
  "en": {
    "parameters": "Parameters"
  },
  "fr": {
    "parameters": "Paramètres"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('parameters')" icon="fa fa-thermometer-half">
    <div v-for="parameter in parameters" :key="parameter.name">
      <aeris-metadata-parameter :parameter="parameter" :language="language"></aeris-metadata-parameter>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataParameter from "./aeris-metadata-parameter";

export default {
  name: "aeris-metadata-parameters",

  components: { AerisMetadataLayout, AerisMetadataParameter },

  props: {
    language: {
      type: String,
      default: "en"
    },
    parameters: {
      type: Array,
      default: null
    }
  },

  computed: {
    isVisible() {
      return this.parameters !== null && this.parameters.length > 0;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Parameters - Creating");
    this.$i18n.locale = this.language;
  }
};
</script>
