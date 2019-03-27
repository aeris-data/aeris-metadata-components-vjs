<i18n>
{
  "en": {
    "dataAccess": "Data access",
    "httpLinks": "Http download links",
    "ftpLinks": "Ftp download links",
    "orderLinks": "Data order links"
  },
  "fr": {
    "dataAccess": "Accès aux données",
     "httpLinks": "Liens de téléchargement Http",
    "ftpLinks": "Liens de téléchargement Ftp",
    "orderLinks": "Liens de commande de données"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('dataAccess')" :theme="theme" icon="fas fa-database">
    <section v-show="httpLinks.length > 0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t("httpLinks") }}:</h5>
      </div>
      <div v-for="link in httpLinks" :key="link.type + '_' + link.url">
        <aeris-metadata-information-link :language="language" :link="link"></aeris-metadata-information-link>
      </div>
    </section>
    <section v-show="ftpLinks.length > 0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t("ftpLinks") }}:</h5>
      </div>
      <div v-for="link in ftpLinks" :key="link.type + '_' + link.url">
        <aeris-metadata-information-link :language="language" :link="link"></aeris-metadata-information-link>
      </div>
    </section>
    <section v-show="orderLinks.length > 0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t("orderLinks") }}:</h5>
      </div>
      <div v-for="link in orderLinks" :key="link.type + '_' + link.url">
        <aeris-metadata-information-link :language="language" :link="link"></aeris-metadata-information-link>
      </div>
    </section>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataInformationLink from "../../aeris-metadata-information-links/components/aeris-metadata-information-link";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
export default {
  name: "aeris-metadata-data-links",

  components: { AerisMetadataInformationLink, AerisMetadataLayout },

  props: {
    language: {
      type: String,
      default: "fr"
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
      httpLinks: [],
      ftpLinks: [],
      orderLinks: []
    };
  },

  computed: {
    isVisible() {
      let visible = this.httpLinks.length > 0 || this.ftpLinks.length > 0 || this.orderLinks.length > 0;
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

  created() {
    this.$i18n.locale = this.language;
    this.getLinks(this.links);
  },

  methods: {
    getLinks(links) {
      if (links && links.length > 0) {
        this.httpLinks = links.filter(this.filterByType("HTTP_DOWNLOAD_LINK"));
        this.ftpLinks = links.filter(this.filterByType("FTP_DOWNLOAD_LINK"));
        this.orderLinks = links.filter(this.filterByType("ORDER_LINK"));
      }
    },

    filterByType(type) {
      return function(item) {
        return item.type === type ? true : false;
      };
    }
  }
};
</script>
