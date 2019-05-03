<i18n>
{
  "en": {
    "otherInformation": "Other information",
    "uuid": "Unique identifier",
    "lastModification": "Last modification",
    "dataCenter": "AERIS data center",
    "dataLevel": "Data processing level"
  },
  "fr": {
    "otherInformation": "Autres informations",
    "uuid": "Identifiant unique",
    "lastModification": "Dernière modifications",
    "dataCenter": "Centre de données AERIS",
    "dataLevel": "Niveau de traitement de la donnèes"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('otherInformation')" :theme="theme" icon="fas fa-info">
    <aeris-metadata-list :items="localItems" :theme="theme"></aeris-metadata-list>
  </aeris-metadata-layout>
</template>

<script>
import moment from "moment";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataList from "../../../../aeris-metadata-ui/submodules/aeris-metadata-list/components/aeris-metadata-list";

export default {
  name: "aeris-metadata-information",

  components: {
    AerisMetadataLayout,
    AerisMetadataList
  },

  props: {
    language: {
      type: String,
      default: "en"
    },
    items: {
      type: Object,
      default: () => ({})
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  computed: {
    isVisible() {
      let visible = Object.keys(this.items).length !== 0 ? true : false;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });
      return visible;
    },
    localItems() {
      if (this.items.identifier === null) {
        return [];
      }
      return [
        {
          value: this.items.identifier,
          name: this.$i18n.t("uuid")
        },
        {
          value: this.localeDate(),
          name: this.$i18n.t("lastModification")
        },
        {
          value: this.items.aerisDataCenter,
          name: this.$i18n.t("dataCenter")
        },
        {
          value: this.items.dataLevel,
          name: this.$i18n.t("dataLevel")
        }
      ];
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  },

  methods: {
    localeDate() {
      if (typeof this.items !== "undefined" && this.items.identifier && this.items.lastModification) {
        const localeDate = moment(this.items.lastModification.value);
        localeDate.locale(this.language);
        return this.formatDate(localeDate);
      }
    },

    formatDate(date) {
      if (date.isValid()) return date.format("LLL");
      return date;
    }
  }
};
</script>
