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
  <aeris-metadata-layout v-if="isVisible" :title="$t('platforms')" :theme="theme" icon="fas fa-cubes">
    <aeris-metadata-platform
      v-for="(platform, index) in platforms"
      :key="platform.name + index"
      :platform="platform"
      :language="language"
      :theme="theme"
    ></aeris-metadata-platform>
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
      default: "en"
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },
    platforms: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  computed: {
    isVisible() {
      return this.platforms !== null && this.platforms.length >= 1;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    platforms: {
      handler(newPlatforms, oldPlatforms) {
        if (newPlatforms !== oldPlatforms) {
          this.updatePlatforms();
        }
      },
      deep: true
    }
  },

  created() {
    this.$i18n.locale = this.language;
  },
  methods: {
    getClassName(platform, language) {
      let className = "";
      if (metadata.thesaurusClass.code != "" && metadata.thesaurusClass.code != "NULL") {
        className =
          language == "fr"
            ? metadata.thesaurusClass.name.fr
              ? metadata.thesaurusClass.name.fr
              : metadata.thesaurusClass.name.en
            : metadata.thesaurusClass.name.en;
      }
      return className;
    },
    updatePlatforms() {
      var currentComponent = this;
      function compare(platform1, platform2) {
        let platform1Label = platform1.name
          ? platform1.name
          : currentComponent.getClassName(platform1, currentComponent.language);
        let platform2Label = platform2.name
          ? platform2.name
          : currentComponent.getClassName(platform2, currentComponent.language);
        if (platform1Label > platform2Label) {
          return 1;
        } else if (platform1Label < platform2Label) {
          return -1;
        } else {
          return 0;
        }
      }
      if (this.platforms) {
        this.platforms.sort(compare);
      }
    }
  }
};
</script>
