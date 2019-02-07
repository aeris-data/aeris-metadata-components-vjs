<i18n>
    {
    "en": {
    "description": "Description"
    },
    "fr": {
    "description": "Description"
    }
    }
</i18n>

<template>
  <aeris-metadata-layout
    v-if="isVisible"
    :title="$t('description')"
    :theme="theme"
    :show-title="showTitle"
    icon="fa fa-comment-o"
  >
    <aeris-metadata-international-field
      :html="markdown"
      :language="language"
      :content="getResourceAbstract"
      no-label-float
    ></aeris-metadata-international-field>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

var marked = require("marked");
export default {
  name: "aeris-metadata-description",

  components: { AerisMetadataInternationalField, AerisMetadataLayout },

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
    markdown: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    resourceAbstract: {
      type: Object,
      default: null
    }
  },

  computed: {
    isVisible() {
      return this.getResourceAbstract ? true : false;
    },
    getResourceAbstract() {
      let resourceAbstract = this.resourceAbstract;
      if (resourceAbstract) {
        if (this.markdown) {
          for (let item in resourceAbstract) {
            if (resourceAbstract.hasOwnProperty(item)) {
              resourceAbstract[item] = marked(this.addSpaces(resourceAbstract[item]));
            }
          }
        }
      }
      return resourceAbstract;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Description - Creating");
    this.$i18n.locale = this.language;
  },

  methods: {
    /* Certaines metadonnées en markdown ne présentent pas d'espace entre le # et la suite du texte. On corrige. */

    addSpaces(value) {
      var aux = value.replace(/#/g, "# ");
      aux = aux.replace(/# #/g, "##");
      aux = aux.replace(/# #/g, "##");
      return aux;
    }
  }
};
</script>
