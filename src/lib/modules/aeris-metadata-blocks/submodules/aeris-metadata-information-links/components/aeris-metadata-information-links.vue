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
  <aeris-metadata-layout v-if="isVisible" :title="$t('informationLinks')" :theme="theme" icon="fa fa-link">
    <aeris-metadata-information-link
      v-for="link in informationLinks"
      :key="link.url"
      :language="language"
      :link="link"
    ></aeris-metadata-information-link>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataInformationLink from "./aeris-metadata-information-link";
export default {
  name: "aeris-metadata-information-links",

  components: { AerisMetadataLayout, AerisMetadataInformationLink },

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
    links: {
      type: Array,
      default: null
    }
  },

  data() {
    return {
      informationLinks: []
    };
  },

  computed: {
    isVisible() {
      let visible = this.informationLinks.length > 0;
      return visible;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    links(value) {
      this.getLinks(value);
    }
  },

  created: function() {
    console.log("Aeris Metadata Information links - Creating");
    this.$i18n.locale = this.language;
    this.getLinks(this.links);
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
