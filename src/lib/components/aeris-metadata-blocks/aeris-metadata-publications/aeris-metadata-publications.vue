<i18n>
{
  "en": {
    "publications": "Publications"
  },
  "fr": {
    "publications": "Publications"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-if="visible" :title="$t('publications')" icon="fa fa-bookmark-o">
  <aeris-metadata-publication v-for="publication in publications" :key="publication.title" :publication="JSON.stringify(publication)" :lang="lang"></aeris-metadata-publication>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-publications',

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
    console.log("Aeris Metadata Publications - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  computed: {},
  data() {
    return {
      publications: [],
      visible: false,
      aerisMetadataListener: null
    }
  },
  methods: {

    handleRefresh: function(data) {
      console.log("Aeris Metadata Publications - Refreshing");
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
