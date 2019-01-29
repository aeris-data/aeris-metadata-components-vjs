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
      :platform="platform"
      :language="language"
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

  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    isVisible() {
      return this.platforms.length >= 1;
    }
  },

  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language || this.getLanguage;
  }
};
</script>
