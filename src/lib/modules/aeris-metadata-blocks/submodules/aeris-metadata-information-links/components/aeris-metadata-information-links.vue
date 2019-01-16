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
  <aeris-metadata-layout v-if="isVisible" :title="$t('informationLinks')" icon="fa fa-link">
    <aeris-metadata-information-link
      v-for="link in informationLinks"
      :key="link.url"
      :lang="lang"
      :link="link"
    ></aeris-metadata-information-link>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataInformationLink from "./aeris-metadata-information-link";
export default {
  name: "aeris-metadata-information-links",

  props: {
    lang: {
      type: String,
      default: "en"
    },
    links: {
      type: Array,
      default: null
    }
  },

  components: { AerisMetadataLayout, AerisMetadataInformationLink },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    },
    links(value) {
      this.getLinks(value);
    }
  },

  created: function() {
    console.log("Aeris Metadata Information links - Creating");
    this.$i18n.locale = this.lang;
    this.getLinks(this.links);
  },

  computed: {
    isVisible() {
      let visible = this.informationLinks.length > 0;
      return visible;
    }
  },
  data() {
    return {
      informationLinks: []
    };
  },
  methods: {
    getLinks(links) {
      if (links && links.length > 0) {
        links.forEach(item => {
          if (item.type === "INFORMATION_LINK") {
            this.informationLinks.push(item);
          }
        });
      }
    }
  }
};
</script>
