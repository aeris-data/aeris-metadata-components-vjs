<i18n>
  {
    "en": {
      "datapolicy": "Data Policy"
    },
    "fr": {
      "datapolicy": "Charte de données"
    }
  }
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('datapolicy')" :theme="theme" icon="fas fa-copyright">
    <aeris-metadata-international-field
      :html="markdown"
      :content="description"
      no-label-float
    ></aeris-metadata-international-field>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
var marked = require("marked");
export default {
  name: "aeris-metadata-datapolicy",

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
    distributionInformation: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      description: null
    };
  },

  computed: {
    isVisible() {
      let visible = this.description !== null;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });   
      return visible;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    distributionInformation(value) {
      this.getDescription(value);
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.getDescription(this.distributionInformation);
  },

  methods: {
    getDescription(distributionInformation) {
      if (distributionInformation && distributionInformation.description) {
        let description = this.distributionInformation.description;
        if (this.markdown) {
          for (let item in description) {
            if (description.hasOwnProperty(item)) {
              description[item] = marked(description[item]);
            }
          }
        }
        this.description = description;
      } else {
        this.description = null;
      }
    }
  }
};
</script>
