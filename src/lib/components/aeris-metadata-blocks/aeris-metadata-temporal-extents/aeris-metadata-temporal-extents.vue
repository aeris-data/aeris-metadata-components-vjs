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
  <aeris-metadata-layout v-if="visible" :title="$t('temporalExtents')" icon="fa fa-clock-o">
    <div v-for="temporalExtent in temporalExtents" :key="temporalExtent.beginDate">
      <aeris-metadata-temporal-extent v-if="temporalExtent.comment" :begin="temporalExtent.beginDate" :end="temporalExtent.endDate" :comment="JSON.stringify(temporalExtent.comment)" :lang="lang"/>
      <aeris-metadata-temporal-extent v-else :begin="temporalExtent.beginDate" :end="temporalExtent.endDate" :lang="lang"/>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import moment from "moment";

export default {
  name: "aeris-metadata-temporal-extents",

  props: {
    lang: {
      type: String,
      default: "en"
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  destroyed: function() {
    document.removeEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  computed: {},

  data() {
    return {
      temporalExtents: [],
      visible: false,
      aerisMetadataListener: null
    };
  },
  methods: {
    sort: function(a, b) {
      var aMoment = moment(a.beginDate, "YYYY-MM-DD");
      var bMoment = moment(b.beginDate, "YYYY-MM-DD");
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    },

    handleRefresh: function(data) {
      this.visible = false;
      if (!data || !data.detail) {
        return;
      }
      this.temporalExtents = [];
      if (data.detail.temporalExtents && data.detail.temporalExtents.length>0) {
        this.visible = true;
        var temporalExtents = data.detail.temporalExtents;
        temporalExtents.sort(this.sort);
        this.temporalExtents = temporalExtents;
      } else {
        this.visible = false;
      }
    }
  }
};
</script>
