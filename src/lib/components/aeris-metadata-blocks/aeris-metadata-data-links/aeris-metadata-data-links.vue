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
  <aeris-metadata-layout v-if="visible" :title="$t('dataAccess')" icon="fa fa-database">
    <div v-show="httpLinks.length >0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t('httpLinks') }}:</h5>
      </div>
      <div v-for="link in httpLinks" :key="link">
        <aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"/>
      </div>
    </div>
    <div v-show="ftpLinks.length >0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t('ftpLinks') }}:</h5>
      </div>
      <div v-for="link in ftpLinks" :key="link">
        <aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"/>
      </div>
    </div>
    <div v-show="orderLinks.length >0" class="aeris-link-category">
      <div class="link-category-header">
        <h5 class="aeris-metadata-emphasis-text">{{ $t('orderLinks') }}:</h5>
      </div>
      <div v-for="link in orderLinks" :key="link">
        <aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"/>
      </div>
    </div>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-data-links",

  props: {
    lang: {
      type: String,
      default: "fr"
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
    console.log("Aeris Metadata Data links - Creating");
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
      httpLinks: [],
      ftpLinks: [],
      orderLinks: [],
      visible: false,
      aerisMetadataListener: null
    };
  },
  methods: {
    handleRefresh: function(data) {
      this.visible = false;
      this.links = [];
      if (!data || !data.detail) {
        return;
      }
      if (data.detail.links) {
        var aux = data.detail.links;
        this.httpLinks = aux.filter(this.filterByType("HTTP_DOWNLOAD_LINK"));
        this.ftpLinks = aux.filter(this.filterByType("FTP_DOWNLOAD_LINK"));
        this.orderLinks = aux.filter(this.filterByType("ORDER_LINK"));
        if (
          this.httpLinks.length > 0 ||
          this.ftpLinks.length > 0 ||
          this.orderLinks.length > 0
        ) {
          this.visible = true;
        }
      }
    },

    filterByType: function(type) {
      return function(item) {
        return item.type === type ? true : false;
      };
    }
  }
};
</script>
