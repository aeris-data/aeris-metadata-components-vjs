<i18n>
{
  "en": {
    "gallery": "Gallery"
  },
  "fr": {
    "gallery": "Galerie"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-show="visible" :title="$t('gallery')" icon="fa fa-picture-o">
    <div class="aeris-metadata-gallery-host">
      <div class="ql-gallery-container style-scope">
        <div class="ql-gallery-img-container style-scope">
          <article v-for="item in quicklooks" :key="item.url" class="ql-gallery-image">
            <a :href="item.url" :title="computeDescription(item.description)" :data-pb-album="guid" rel="photobox">
              <img :src="item.url" alt="Quicklook">
            </a>
          </article>
        </div>
      </div>
    </div>
  </aeris-metadata-layout>
</template>

<script>
export default {
  name: "aeris-metadata-quicklook-gallery",

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
    console.log("Aeris Metadata Quicklook gallery - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  updated() {
    var self = this;
    var imgCompletedInterval = setInterval(function() {
      if (
        self.$el.querySelector("img") &&
        self.$el.querySelector("img").complete
      ) {
        clearInterval(imgCompletedInterval);
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
      quicklooks: null
    };
  },
  methods: {
    photoboxInit: function() {
      Photobox.init({
        opacity: 0.8
      });
    },

    computeDescription: function(internationalString) {
      return internationalString && internationalString[this.lang]
        ? internationalString[this.lang]
        : " "; /* Return white-space to avoid title being set "undefined" */
    },

    handleRefresh: function(data) {
      this.visible = false;
      if (!data || !data.detail) {
        return;
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
};
</script>

<style>
[data-aeris-metadata-layout] article {
  margin-left: 10px;
  margin-bottom: 10px;
}
.aeris-metadata-gallery-host {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.aeris-metadata-gallery-host .prev,
.aeris-metadata-gallery-host .next {
  position: absolute;
  z-index: 999;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  background-color: #fff;
  color: #333;
  opacity: 0.4;
}
.aeris-metadata-gallery-host .prev:hover,
.aeris-metadata-gallery-host .next:hover {
  cursor: pointer;
  opacity: 0.8;
}
.aeris-metadata-gallery-host .prev {
  padding-left: 3px;
  left: 15px;
}
.aeris-metadata-gallery-host .next {
  padding-right: 3px;
  right: 15px;
}
.ql-gallery-container {
  overflow: hidden;
}
.ql-gallery-img-container {
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
}
.ql-gallery-image {
  height: 100px;
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
  margin: 0;
}
.ql-gallery-image:hover {
  cursor: pointer;
  transform: translateZ(0) scale(1.05);
}
</style>
