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
  <aeris-metadata-layout v-if="visible" :title="$t('instruments')" icon="fa fa-calculator">
    <aeris-metadata-instrument v-for="instrument in instruments" :key="instrument.thesaurusConcat" :instrument="JSON.stringify(instrument)" :lang="lang"/>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-instruments",

  props: {
    lang: {
      type: String,
      default: "en"
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  destroyed: function() {
    document.removeEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Instrument - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      instruments: [],
      visible: false,
      aerisMetadataListener: null
    };
  },
  methods: {
    handleRefresh: function(data) {
      this.visible = false;
      if (!data || !data.detail) {
        return;
      }
      this.instruments = [];
      if (data.detail.instruments && data.detail.instruments.length>0) {
        this.visible = true;
        this.instruments = data.detail.instruments;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>
