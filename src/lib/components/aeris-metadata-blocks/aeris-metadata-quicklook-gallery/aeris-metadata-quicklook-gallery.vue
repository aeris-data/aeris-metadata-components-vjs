<i18n>
{
  "en": {
    "quicklook_gallery": "Quicklook gallery"
  },
  "fr": {
    "quicklook_gallery": "Galerie de quicklooks"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-show="visible" :title="$t('quicklook_gallery')" icon="fa fa-picture-o">
  <div class="aeris-metadata-quick-gallery-host">
    <i class="prev fa fa-chevron-left fa-2x" v-on:mousedown="scrollLeft" v-if="!hideArrows"></i>
    <div class="ql-gallery-container style-scope aeris-metadata-quicklooks-gallery">
      <div class="ql-gallery-img-container style-scope aeris-metadata-quicklooks-gallery">
        <article class="ql-gallery-image" v-for="item in quicklooks">
          <a :href="item.url" rel="photobox" :title="computeDescription(item.description)" :data-pb-album="guid">
            <img :src="item.url" alt="Quicklook">
          </a>
        </article>
      </div>
    </div>
    <i class="next fa fa-chevron-right fa-2x" v-on:mousedown="scrollRight" v-if="!hideArrows"></i>
  </div>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-quicklook-gallery',

  props: {
    lang: {
      type: String,
      default: 'en'
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
    document.removeEventListener('mouseup', this.mouseupListener);
    this.mouseupListener = null;
    window.removeEventListener('resize', this.resizeListener);
    this.resizeListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Quicklook gallery - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.mouseupListener = this.clearInterv.bind(this)
    document.addEventListener('mouseup', this.mouseupListener);
    this.resizeListener = this.checkSize.bind(this);
    window.addEventListener('resize', this.resizeListener);
  },

  updated() {
    var self = this;
    var imgCompletedInterval = setInterval(function() {
    if (self.$el.querySelector("img") && self.$el.querySelector("img").complete) {
        clearInterval(imgCompletedInterval);
        self.checkSize();
        self.photoboxInit();
      }
    }, 500);
  },

  computed: {
    guid: function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return s4() + s4();
    }
  },
  data() {
    return {
      platforms: [],
      visible: false,
      aerisMetadataListener: null,
      resizeListener: null,
      mouseupListener: null,
      hideArrows: true,
      quicklooks: null,
      srInterval: null
    }
  },
  methods: {

    scrollRight: function(ev) {
      this.srInterval = window.setInterval(function() {
        this.$el.querySelector('.ql-gallery-container').scrollLeft += 10
      }.bind(this), 16);
    },

    scrollLeft: function(ev) {
      this.slInterval = window.setInterval(function() {
        this.$el.querySelector('.ql-gallery-container').scrollLeft -= 10
      }.bind(this), 16);
    },

    clearInterv: function() {
      /* Stop scrolling */
      if (this.srInterval) window.clearInterval(this.srInterval);
      if (this.slInterval) window.clearInterval(this.slInterval);
    },

    checkSize: function() {
      this.hideArrows = !(this.$el.querySelector('.ql-gallery-img-container').offsetWidth >= this.$el.querySelector('.ql-gallery-container').offsetWidth);
    },

    photoboxInit: function() {
      Photobox.init({
        opacity: 0.8
      });
    },

    computeDescription: function(internationalString) {
      return (internationalString && internationalString[this.lang]) ? internationalString[this.lang] : ' '; /* Return white-space to avoid title being set "undefined" */
    },

    handleRefresh: function(data) {
      console.log("Aeris Metadata Quicklook Gallery - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.quicklooks = [];
      if (data.detail.quicklooks) {
        this.visible = true;
        this.quicklooks = data.detail.quicklooks;

      } else {
        this.visible = false;
      }
    }

  }
}
</script>

<style>
.aeris-metadata-quick-gallery-host   {
        position: relative;
        text-align: center;
        overflow: hidden
    }
.aeris-metadata-quick-gallery-host .prev,
.aeris-metadata-quick-gallery-host .next {
        position: absolute;
        z-index: 999;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px;
        background-color: #fff;
        color: #333;
        opacity: 0.4
    }
.aeris-metadata-quick-gallery-host .prev:hover,
.aeris-metadata-quick-gallery-host      .next:hover {
        cursor: pointer;
        opacity: 0.8
    }
.aeris-metadata-quick-gallery-host .prev {
        padding-left: 3px;
        left: 15px
    }
.aeris-metadata-quick-gallery-host .next {
        padding-right: 3px;
        right: 15px
    }
    .ql-gallery-container {
        overflow: hidden
    }
    .ql-gallery-img-container {
        display: inline-flex;
        flex-flow: row nowrap;
        overflow-x: hidden;
        overflow-y: visible;
        padding: 10px 0;
        margin: 0 auto
    }
    .ql-gallery-image {
        height: 200px;
        width: auto;
        vertical-align: middle;
        text-align: center;
        transform: translateZ(0);
        transition: transform 0.3s;
    }
    .ql-gallery-image a img {
        height: 100%;
        width: auto;
        min-width: inherit;
        max-width: inherit;
        border: none;
        margin: 0
    }
    .ql-gallery-image:hover {
        cursor: pointer;
        transform: translateZ(0) scale(1.05);
    }
 </style>
