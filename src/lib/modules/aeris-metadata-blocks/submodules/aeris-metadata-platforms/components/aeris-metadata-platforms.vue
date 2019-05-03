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
      v-for="platform in platforms"
      :key="platform.name"
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
      let visible = this.platforms !== null && this.platforms.length >= 1;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });
      return visible;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  }
};
</script>
