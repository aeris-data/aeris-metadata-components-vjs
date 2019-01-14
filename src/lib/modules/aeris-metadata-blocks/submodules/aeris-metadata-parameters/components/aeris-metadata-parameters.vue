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
  <aeris-metadata-layout v-if="visible" :title="$t('parameters')" icon="fa fa-thermometer-half">
    <div v-for="parameter in parameters" :key="parameter.name">
      <aeris-metadata-parameter :parameter="JSON.stringify(parameter)" :lang="lang"/>
    </div>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-parameters",

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
    console.log("Aeris Metadata Parameters - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      parameters: [],
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
      this.parameters = [];
      if (data.detail.parameters && data.detail.parameters.length>0) {
        this.visible = true;
        this.parameters = data.detail.parameters;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>
