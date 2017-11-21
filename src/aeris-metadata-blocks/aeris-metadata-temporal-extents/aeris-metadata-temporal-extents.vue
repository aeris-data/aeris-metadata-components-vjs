/*
 dependances:

moment-js.html
metadata-temporal.html"
metadata-shared-styles.html"

*/
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
<div class="aeris-metadata-temporal-extent-host" v-show="visible">
  <div class="component-container">
    <header>
      <h3><i class="fa fa-clock-o"></i> {{ $t('temporalExtents') }}</h3>
      <div class="aeris-icon-group"></div>
    </header>
    <main>
      <span v-for="temporalExtent in temporalExtents">

       <aeris-metadata-temporal-extent :begin="temporalExtent.beginDate" :end="temporalExtent.endDate" :comment="JSON.stringify(temporalExtent.comment)" v-if="temporalExtent.comment" :lang="lang"></aeris-metadata-temporal-extent>
       <aeris-metadata-temporal-extent :begin="temporalExtent.beginDate" :end="temporalExtent.endDate"  v-else :lang="lang"></aeris-metadata-temporal-extent>
       </span>
    </main>
  </div>
</div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },


  },


  watch: {
    lang(value) {
      this.$i18n.locale = value
    }
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisThemeListener = this.handleTheme.bind(this)
    document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  computed: {},

  data() {
    return {
      temporalExtents: [],
      visible: true,
      aerisThemeListener: null,
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

    handleTheme: function(event) {
      this.$el.querySelector("header").style.background = event.detail.primary
    },

    handleRefresh: function(data) {
      console.log("Aeris Metadata Temporal Extents - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.temporalExtents = [];
      this.lang = data.lang || this.lang
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

<style>
 </style>
