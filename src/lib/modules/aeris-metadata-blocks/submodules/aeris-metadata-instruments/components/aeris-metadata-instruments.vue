<i18n>
{
  "en": {
    "instruments": "Instruments"
  },
  "fr": {
    "instruments": "Instruments"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('instruments')" :theme="theme" icon="fas fa-calculator">
    <aeris-metadata-instrument
      v-for="instrument in instruments"
      :key="instrument.thesaurusConcat"
      :instrument="instrument"
      :language="language"
      :theme="theme"
    ></aeris-metadata-instrument>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataInstrument from "./aeris-metadata-instrument";
import { getTitle } from "../utils/utils";
export default {
  name: "aeris-metadata-instruments",

  components: { AerisMetadataLayout, AerisMetadataInstrument },

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
    instruments: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  computed: {
    isVisible() {
      return this.instruments !== null && this.instruments.length > 0;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    instruments: {
      handler(newInstruments, oldInstruments) {
        if (newInstruments !== oldInstruments) {
          this.updateInstruments();
        }
      },
      deep: true
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.updateInstruments();
  },
  methods: {
    updateInstruments() {
      var currentComponent = this;
      function compare(instrument1, instrument2) {
        let instrument1Label = getTitle(instrument1, currentComponent.language);
        let instrument2Label = getTitle(instrument2, currentComponent.language);
        if (instrument1Label > instrument2Label) {
          return 1;
        } else if (instrument1Label < instrument2Label) {
          return -1;
        } else {
          return 0;
        }
      }
      if (this.instruments) {
        this.instruments.sort(compare);
      }
    }
  }
};
</script>
