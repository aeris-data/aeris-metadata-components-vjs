<i18n>
{
  "en": {
    "formats": "Formats"
  },
  "fr": {
    "formats": "Formats"
  }
}
</i18n>

<template>
<div class="aeris-metadata-temporal-extent-host" v-show="visible">
  <div class="component-container">
    <header>
      <h3><i class="fa fa-list-ul"></i> {{ $t('formats') }}</h3>
      <div class="aeris-icon-group"></div>
    </header>
    <main>
      <span v-for="format in formats">
       <aeris-metadata-format :format="JSON.stringify(format)" :lang="lang"></aeris-metadata-format>
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

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  computed: {},
  data() {
    return {
      formats: [],
      visible: true,
      aerisMetadataListener: null,
      aerisThemeListener: null
    }
  },
  methods: {

    handleRefresh: function(data) {
      console.log("Aeris Metadata Formats - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.formats = [];
      this.lang = data.lang || this.lang
      if (data.detail.formats) {
        this.visible = true;
        console.log(data.detail.formats)
        this.formats = data.detail.formats;
      } else {
        this.visible = false;
      }
    },

    handleTheme(e) {
      this.theme = e.detail;
      this.ensureTheme();
    },

    ensureTheme() {
      if (this.$el.querySelector("header")) {
        this.$el.querySelector("header").style.background = this.theme.primary;
      }
    }


  }
}
</script>

<style>
 </style>
