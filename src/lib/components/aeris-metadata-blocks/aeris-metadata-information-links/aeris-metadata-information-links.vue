<i18n>
{
  "en": {
    "informationLinks": "Information links"
  },
  "fr": {
    "informationLinks": "Liens d'information"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="visible" :title="$t('informationLinks')" icon="fa fa-link">
    <aeris-metadata-information-link v-for="link in links" :key="link.url" :lang="lang" :link="JSON.stringify(link)"/>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-information-links",

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
    console.log("Aeris Metadata Information links - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  computed: {},
  data() {
    return {
      links: null,
      visible: false,
      aerisMetadataListener: null
    };
  },
  methods: {
    handleRefresh: function(data) {
      console.log("Aeris Metadata Links - Refreshing");
      this.visible = false;
      this.links = [];
      if (!data || !data.detail) {
        return;
      }
      if (data.detail.links) {
        var allLinks = data.detail.links;
        var informationLinks = [];
        allLinks.forEach(function(item) {
          console.log("Type: " + item.type);
          if (item.type === "INFORMATION_LINK") {
            informationLinks.push(item);
          }
        });
        this.links = informationLinks;
        this.links.length > 0 ? (this.visible = true) : null;
      }
    }
  }
};
</script>
