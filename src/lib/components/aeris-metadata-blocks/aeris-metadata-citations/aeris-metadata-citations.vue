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
  <aeris-metadata-layout v-if="visible" :title="$t('citationTitle')" icon="fa fa-quote-left">
    <aeris-metadata-citation v-for="doi in dois" :doi="doi.code" :key="doi.code"/>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-citations",
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
  data() {
    return {
      dois: [],
      visible: true,
      aerisMetadataListener: null
    };
  },
  destroyed: function() {
    document.removeEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
    this.aerisMetadataListener = null;
  },
  created() {
    console.log("Aeris Metadata Citations - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },
  methods: {
    handleRefresh(data) {
      console.log("Aeris Metadata Citations - Refreshing");
      this.visible = false;

      if (!data || !data.detail) {
        return;
      }

      if (data.detail.identifiers) {
        this.visible = true;
        this.dois = data.detail.identifiers;
      }
    }
  }
};
</script>
