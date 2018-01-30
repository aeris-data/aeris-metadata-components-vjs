e.<i18n>
{
  "en": {
    "otherInformation": "Other information",
    "uuid": "Unique identifier",
    "lastModification": "Last modification",
    "dataCenter": "AERIS data center",
    "projection": "Projection",
    "dataLevel": "Data processing level"
  },
  "fr": {
    "otherInformation": "Autres informations",
    "uuid": "Identifiant unique",
    "lastModification": "Dernière modifications",
    "dataCenter": "Centre de données AERIS",
    "projection": "Projection",
    "dataLevel": "Niveau de traitement de la donnèes"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-show="visible" :title="$t('otherInformation')" :type="type" :isVisible="visible" :order="order" icon="fa fa-info">
  <aeris-metadata-list-definition-layout :items="JSON.stringify(items)"></aeris-metadata-list-definition-layout>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-information',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    order: {
      type: Number
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  computed: {

    items() {
      return [{
          value: this.data.id,
          name: this.$i18n.t('uuid')
        },
        {
          value: this.formatDate(this.data.lastModification),
          name: this.$i18n.t('lastModification')
        },
        {
          value: this.data.aerisDataCenter,
          name: this.$i18n.t('dataCenter')
        },
        {
          value: this.data.projection,
          name: this.$i18n.t('projection')
        },
        {
          value: this.data.dataLevel,
          name: this.$i18n.t('dataLevel')
        }
      ]
    }
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Information - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  data() {
    return {
      aerisMetadataListener: null,
      data: [],
      visible: false,
      type: 'otherInformation'
    }
  },

  methods: {

    handleRefresh: function(e) {
      console.log("Aeris Metadata Information - Refreshing");
      this.visible = e.detail.id || e.detail.lastModification || e.detail.aerisDataCenter || e.detail.projection || e.detail.dataLevel;

      if (this.visible) {
        this.data = {
          id: e.detail.id,
          lastModification: e.detail.lastModification,
          aerisDataCenter: e.detail.aerisDataCenter,
          projection: e.detail.projection,
          dataLevel: e.detail.dataLevel
        }
      }
    },

    formatDate: function(date) {
      if (date) {
        var momentDate = moment(date);
        if (momentDate.isValid()) return moment(date).format('LLL');
      }

      return date;
    }
  }
}
</script>
