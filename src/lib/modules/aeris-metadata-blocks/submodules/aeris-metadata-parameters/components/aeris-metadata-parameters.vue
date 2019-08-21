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
    <div v-for="(parameter, index) in parameters" :key="index">
      <aeris-metadata-parameter :parameter="parameter" :language="language" :theme="theme"></aeris-metadata-parameter>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataParameter from "./aeris-metadata-parameter";
import { getTitle } from "../utils/utils";

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
      return this.parameters !== null && this.parameters.length > 0;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    parameters: {
      handler(newParameters, oldParameters) {
        if (newParameters !== oldParameters) {
          this.updateParameters();
        }
      },
      deep: true
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.updateParameters();
  },

  methods: {
    updateParameters() {
      var currentComponent = this;
      function compare(parameter1, parameter2) {
        let parameter1Label = getTitle(parameter1, currentComponent.language);
        let parameter2Label = getTitle(parameter2, currentComponent.language);
        if (parameter1Label > parameter2Label) {
          return 1;
        } else if (parameter1Label < parameter2Label) {
          return -1;
        } else {
          return 0;
        }
      }
      if (this.parameters) {
        this.parameters.sort(compare);
      }
    }
  }
};
</script>
