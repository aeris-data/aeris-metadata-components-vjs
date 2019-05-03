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
  <aeris-metadata-layout v-if="isVisible" :title="$t('parameters')" :theme="theme" icon="fas fa-thermometer-half">
    <div v-for="parameter in parameters" :key="parameter.name">
      <aeris-metadata-parameter :parameter="parameter" :language="language" :theme="theme"></aeris-metadata-parameter>
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
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },
    parameters: {
      type: Array,
      default: null
    }
  },

  computed: {
    isVisible() {
      let visible = this.parameters !== null && this.parameters.length > 0;
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
