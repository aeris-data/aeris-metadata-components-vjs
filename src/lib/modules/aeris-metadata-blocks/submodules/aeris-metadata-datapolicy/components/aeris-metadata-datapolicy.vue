<i18n>
  {
    "en": {
      "datapolicy": "Data Policy"
    },
    "fr": {
      "datapolicy": "Charte de données"
    }
  }
</i18n>

<template>
  <aeris-metadata-layout v-if="visible" :title="$t('datapolicy')" icon="fa fa-copyright">
    <aeris-metadata-international-field v-if="visible" :html="markdown" :content="value" no-label-float/>
  </aeris-metadata-layout>
</template>

<script>
var marked = require("marked");
export default {
name: "aeris-metadata-datapolicy",

  props: {
    lang: {
      type: String,
      default: "en"
    },
    markdown: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      visible: false,
      description: null,
      aerisMetadataListener: null
    };
  },

  computed: {
    value: function() {
      return JSON.stringify(this.description);
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
    console.log("Aeris Metadata Description - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  methods: {
    handleRefresh: function(data) {
      this.visible = false;

      if (!data) {
        return;
      }

      if (!data.detail.distributionInformation) {
        return;
      }

      if (!data.detail.distributionInformation.description) {
        return;
      }

      if (this.markdown) {
        var descriptions = data.detail.distributionInformation.description;

        /* Convert markdown description to html for each language */
        for (var item in descriptions) {
          if (descriptions.hasOwnProperty(item)) {
            descriptions[item] = marked(descriptions[item]);
          }
        }
        this.description = descriptions;
      } else {
        this.description = data.detail.distributionInformation.description;
      }
      this.visible = true;
    }
  }
};
</script>
