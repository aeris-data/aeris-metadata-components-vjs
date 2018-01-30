<i18n>
{
  "en": {
    "temporalExtents": "Temporal extents"
  },
  "fr": {
    "temporalExtents": "Extensions temporelles"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-show="visible" :title="$t('temporalExtents')" :type="type" :isVisible="visible" :order="order" icon="fa fa-clock-o">

  <div v-for="temporalExtent in temporalExtents">
    <aeris-metadata-temporal-extent :begin="temporalExtent.beginDate" :end="temporalExtent.endDate" :comment="JSON.stringify(temporalExtent.comment)" v-if="temporalExtent.comment" :lang="lang"></aeris-metadata-temporal-extent>
    <aeris-metadata-temporal-extent :begin="temporalExtent.beginDate" :end="temporalExtent.endDate" v-else :lang="lang"></aeris-metadata-temporal-extent>
  </div>
</aeris-metadata-layout>

</template>

<script>
export default {

  name: 'aeris-metadata-temporal-extents',

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
      this.$i18n.locale = value
    }
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  computed: {},

  data() {
    return {
      type: 'aerisTemporalExtents',
      temporalExtents: [],
      visible: false,
      aerisMetadataListener: null
    }
  },
  methods: {

    sort: function(a, b) {
      var aMoment = moment(a.beginDate, 'YYYY-MM-DD');
      var bMoment = moment(b.beginDate, 'YYYY-MM-DD');
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    },

    handleRefresh: function(data) {
      console.log("Aeris Metadata Temporal Extents - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.temporalExtents = [];
      if (data.detail.temporalExtents) {
        this.visible = true;
        console.log(data.detail.temporalExtents)
        var temporalExtents = data.detail.temporalExtents;
        temporalExtents.sort(this.sort);
        this.temporalExtents = temporalExtents;
      } else {
        this.visible = false;
      }
    }
  }
}
</script>
