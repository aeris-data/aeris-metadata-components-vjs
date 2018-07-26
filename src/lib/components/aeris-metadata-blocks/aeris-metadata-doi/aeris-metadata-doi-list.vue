<i18n>
{
  "en": {
    "citation": "Citation"
  },
  "fr": {
    "citation": "Citation"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-if="visible" :title="$t('citation')" icon="fa fa-bookmark-o">
<aeris-metadata-doi v-for="publication in publications" :key="publication.title" :doi="publication.doi" :lang="lang"></aeris-metadata-doi>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-doi-list',

  props: {
    lang: {
      type: String,
      default: 'en'
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value
    }
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Doi List - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  computed: {},
  data() {
    return {
      publications: [],
      visible: true,
      aerisMetadataListener: null
    }
  },
  methods: {

    handleRefresh: function(data) {
      console.log("Aeris Metadata Doi List - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.publications = [];
      if (data.detail.publications) {
        this.visible = true;
        console.log(data.detail.publications)
        this.publications = data.detail.publications;
      } else {
        this.visible = false;
      }
    }
  }
}
</script>
