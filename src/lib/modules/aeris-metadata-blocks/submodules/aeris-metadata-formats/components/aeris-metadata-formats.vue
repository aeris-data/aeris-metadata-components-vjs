<i18n>
{
  "en": {
    "formats": "Formats"
  },
  "fr": {
    "formats": "Formats"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="visible" :title="$t('formats')" icon="fa fa-list-ul">
    <div v-for="format in formats" :key="format">
      <aeris-metadata-format :format="JSON.stringify(format)" :lang="lang"/>
    </div>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-formats",

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
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      formats: [],
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
      this.formats = [];
      if (data.detail.formats && data.detail.formats.length>0) {
        this.visible = true;
        this.formats = data.detail.formats;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>
