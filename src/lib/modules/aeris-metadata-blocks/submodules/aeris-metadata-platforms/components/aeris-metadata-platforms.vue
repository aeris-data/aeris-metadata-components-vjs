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
  <aeris-metadata-layout v-if="isVisible" :title="$t('platforms')" icon="fa fa-cubes">
    <aeris-metadata-platform
      v-for="platform in platforms"
      :key="platform.name"
      :platform="JSON.stringify(platform)"
      :lang="lang"
    />
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataPlatform from "../../../../aeris-metadata-blocks/submodules/aeris-metadata-platforms/components/aeris-metadata-platform";

export default {
  name: "aeris-metadata-platforms",
  components: { AerisMetadataLayout, AerisMetadataPlatform },

  props: {
    language: {
      type: String,
      default: ""
    },
    platforms: {
      type: Array,
      default: []
    }
  },

  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    }
  },

  // destroyed: function() {
  //   document.removeEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
  //   this.aerisMetadataListener = null;
  // },

  created() {
    console.log("Aeris Metadata Platform - Creating");
    this.$i18n.locale = this.language || this.getLanguage;
    // this.aerisMetadataListener = this.handleRefresh.bind(this);
    // document.addEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
  },
  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    isVisible() {
      return this.platforms.length >= 1;
    }
  }
  // data() {
  //   return {
  //     platforms: [],
  //     visible: false,
  //     aerisMetadataListener: null
  //   };
  // },
  // methods: {
  //   handleRefresh: function(data) {
  //     this.visible = false;
  //     if (!data || !data.detail) {
  //       return;
  //     }
  //     this.platforms = [];
  //     if (data.detail.platforms && data.detail.platforms.length > 0) {
  //       this.visible = true;
  //       this.platforms = data.detail.platforms;
  //     } else {
  //       this.visible = false;
  //     }
  //   }
  // }
};
</script>
