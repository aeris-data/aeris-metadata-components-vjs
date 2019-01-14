<i18n>
{
  "en": {
    "platforms": "Platforms"
  },
  "fr": {
    "platforms": "Plateformes"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="visible" :title="$t('platforms')" icon="fa fa-cubes">
    <aeris-metadata-platform v-for="platform in platforms" :key="platform.name" :platform="JSON.stringify(platform)" :lang="lang"/>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-platforms",

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
    console.log("Aeris Metadata Platform - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      platforms: [],
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
      this.platforms = [];
      if (data.detail.platforms && data.detail.platforms.length>0) {
        this.visible = true;
        this.platforms = data.detail.platforms;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>
