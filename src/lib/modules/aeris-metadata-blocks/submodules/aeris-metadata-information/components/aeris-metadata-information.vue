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
  <aeris-metadata-layout v-if="isVisible" :title="$t('otherInformation')" icon="fa fa-info">
    <aeris-metadata-list :items="localItems"/>
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
      default: ""
    },
    items: {
      type: Object,
      default: () => ({})
    }
  },

  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    }
  },

  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    isVisible() {
      return Object.keys(this.items).length !== 0 ? true : false;
    },
    localItems() {
      if (this.items.uuid === null) {
        return [];
      }
      return [
        {
          value: this.items.uuid,
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

  created() {
    this.$i18n.locale = this.language || this.getLanguage;
  },

  methods: {
    localeDate() {
      if (typeof this.items !== "undefined" && this.items.uuid) {
        const localeDate = moment(this.items.lastModification.value);
        localeDate.locale(this.getLanguage);
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
