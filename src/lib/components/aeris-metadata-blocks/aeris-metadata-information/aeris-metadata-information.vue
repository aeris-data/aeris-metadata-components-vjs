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
<aeris-metadata-layout v-if="visible" :title="$t('otherInformation')" icon="fa fa-info">
  <aeris-metadata-list :items="JSON.stringify(items)"></aeris-metadata-list>
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
      visible: false
    }
  },

  methods: {

    handleRefresh: function(e) {
      console.log("Aeris Metadata Information - Refreshing");
      this.visible = false;
      if (e.detail) {
    	  if (!e.detail.id && !e.detail.lastModification && !e.detail.aerisDataCenter && !e.detail.dataLevel) {
	        return
	      }
      }
      this.data = {
        id: e.detail.id,
        lastModification: (e.detail.lastModification ? e.detail.lastModification.value : ''),
        aerisDataCenter: e.detail.aerisDataCenter,
        dataLevel: e.detail.dataLevel
      };
      this.visible = true;
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
