<i18n>
{
  "en": {
  	"download": "Download",
  	"explicationText": "To download the data files, add them to your downloads by clicking on each year.",
  	"year": "year",
  	"loading": "Loading...",
    "l0instructions": "Only level-2 files can be downloaded directly. If you are interested in getting level-0 data, please contact the investigators"
  },
  "fr": {
  	"download": "Téléchargement",
  	"explicationText": "Pour télécharger les fichiers de données, ajoutez-les à vos téléchargements en cliquant sur les différentes années.",
  	"year": "ann.",
  	"loading": "Chargement...",
  	"l0instructions": "Seuls les fichiers de niveau 2 peuvent être téléchargés directement. Si vous êtes intéressés par les fichier de niveau 0, contactez les responsables."
  }
}
</i18n>

<template>
  <div v-show="visible" data-aeris-metadata-layout data-template="metadata-block">
    <header>
      <h3><i name="download" class="fa fa-download"/>{{ $t('download') }}</h3>
    </header>
    <div aeris-year-download-metadata-layout >
      <div v-if="isL0" style="text-align:justify">
        <span class="explication">{{ $t('l0instructions') }}</span>
      </div>
      <div v-else style="text-align:justify">
        <span class="explication">{{ $t('explicationText') }}</span>
        <div v-if="loading" class="loadingbar">
          <i class="fa fa-circle-o-notch fa-spin fa-fw"/>
          <span>{{ $t("loading") }}</span>
        </div>
        <div v-show="years" class="year-container">
          <div v-for="item in years" :key="item.year" :class="isSelected(item, years)" class="aeris-year" @click="toggleYear(item)">
            <div class="year-label">{{ $t('year') }}</div>
            <div class="year-value">{{ item.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "aeris-metadata-year-select-download",

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
    document.removeEventListener(
      "cartContentResponse",
      this.cartContentResponseListener
    );
    this.cartContentResponseListener = null;
    document.removeEventListener("aerisTheme", this.aerisThemeListener);
    this.aerisThemeListener = null;
  },
  created: function() {
    console.log("Aeris year select download - Creating");
    this.$i18n.locale = this.lang;
    // to get the datas
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
    this.cartContentResponseListener = this.cartContentResponse.bind(this);
    document.addEventListener(
      "cartContentResponse",
      this.cartContentResponseListener
    );
    // to get the theme
    this.aerisThemeListener = this.handleTheme.bind(this);
    document.addEventListener("aerisTheme", this.aerisThemeListener);
  },
  computed: {},
  data() {
    return {
      visible: false,
      aerisMetadataListener: null,
      cartResponseListener: null,
      cartContentResponseListener: null,
      aerisThemeListener: null,
      years: [],
      service: null,
      uuid: null,
      collectionName: null,
      loading: false,
      isL0: false,
      theme: null
    };
  },
  methods: {
    toggleYear: function(item) {
      for (var i = 0; i < this.years.length; i++) {
        if (this.years[i].year == item.year) {
          var url_download_service = this.service;
          var obj = {
            collectionName: JSON.stringify(this.collectionName),
            url: url_download_service,
            collectionId: this.uuid,
            id: this.uuid,
            data: "",
            fileNumber: item.fileNumber,
            totalSize: item.totalSize,
            type: "yearfilter",
            elements: [item.year]
          };
          if (this.years[i].state == false) {
            var event = new CustomEvent("addItemToCartEvent", {
              detail: obj,
              lang: this.lang
            });
            document.dispatchEvent(event);
          } else {
            var event = new CustomEvent("deleteItemFromCartEvent", {
              detail: obj,
              lang: this.lang
            });
            document.dispatchEvent(event);
          }
          break;
        }
      }
    },

    isSelected: function(item) {
      for (var i = 0; i < this.years.length; i++) {
        if (this.years[i].year == item.year) {
          if (this.years[i].state) {
            return "selected";
          }
          break;
        }
      }
      return "";
    },

    selectYear: function(year) {
      if (this.years) {
        for (var i = 0; i < this.years.length; i++) {
          if (this.years[i].year == year) {
            var aux = this.years[i];
            aux.state = true;
            this.$set(this.years, i, aux);
            break;
          }
        }
      }
    },

    deselectAll: function() {
      if (this.years) {
        for (var i = 0; i < this.years.length; i++) {
          var aux = this.years[i];
          aux.state = false;
          this.$set(this.years, i, aux);
        }
      }
    },

    cartContentResponse: function(e) {
      this.deselectAll();
      var cartContent = e.detail.cartContent;
      if (cartContent) {
        console.log(cartContent);
        for (var i = 0; i < cartContent.length; i++) {
          var cartItem = cartContent[i];
          if (cartItem.collectionId == this.uuid) {
            var years = cartItem.items.elements;
            for (var j = 0; j < years.length; j++) {
              this.selectYear(years[j]);
            }
          }
        }
      }
    },

    handleRefresh: function(e) {
      console.log("Aeris year select download  - Refreshing");
      this.visible = false;
      this.uuid = e.detail.id;
      this.collectionName = e.detail.resourceTitle;
      if (!e.detail.dataLevel) {
        return;
      }
      if (e.detail.dataLevel.toLowerCase() == "l0") {
        this.isL0 = true;
        return;
      } else {
        this.isL0 = false;
      }
      var aux = e.detail.links;
      if (aux) {
        for (var i = 0; i < aux.length; i++) {
          var link = aux[i];
          if (link.type == "OPENSEARCH_LINK") {
            this.service = link.url;
            break;
          }
        }
      }
      if (this.service && this.uuid) {
        var cached = this.getFromCache(this.getYearCacheKey());
        if (cached) {
          this.years = cached;
          if (this.years.length > 0) {
            this.visible = true;
          }
          var event = new CustomEvent("cartContentRequest", {});
          document.dispatchEvent(event);
        } else {
          var url = null;
          if (this.service.endsWith("/")) {
            this.service = this.service.substring(0, this.service.length - 1);
          }
          url = this.service + "/request?collection=" + this.uuid;
          this.loading = true;
          this.$http.get(url).then(
            response => {
              this.handleSuccess(response);
            },
            response => {
              this.handleError(response);
            }
          );
        }
      }
    },

    handleSuccess: function(response) {
      var entries = response.body.entries;
      console.log("Aeris year select download - Entries : " + entries);
      this.loading = false;
      this.years = [];
      if (entries) {
        for (var i = 0; i < entries.length; i++) {
          var aux = window.moment(entries[i].date);
          var item = {};
          item.year = aux.year();
          item.state = false;
          item.totalSize = entries[i].totalSize;
          item.fileNumber = entries[i].fileNumber;
          this.years.push(item);
        }
        this.addToCache(this.getYearCacheKey(), this.years);
        var event = new CustomEvent("cartContentRequest", {});
        document.dispatchEvent(event);
      }
      if (entries.length > 0) {
        this.visible = true;
      }
    },

    getYearCacheKey: function() {
      return this.uuid + "-years";
    },

    getFromCache: function(key) {
      if (!window.cacheaeris) {
        return null;
      } else {
        return window.cacheaeris[key];
      }
    },

    addToCache: function(key, value) {
      if (!window.cacheaeris) {
        window.cacheaeris = {};
      }
      window.cacheaeris[key] = value;
    },

    handleError: function(response) {
      this.loading = false;
      this.years = [];
      console.log("Aeris year select download - Error while accessing server:");
      var error = response.status;
      var message = response.statusText;
      if (!error) message = "Can't connect to the server";
      console.log("Error " + error + ": " + message);
    },

    handleTheme: function(event) {
      this.theme = event.detail;
      this.ensureTheme();
    },

    ensureTheme: function() {
      if (this.$el && this.$el.querySelector("header h3 i")) {
        this.$el.querySelector("header h3 i").style.color = this.theme.primary;
      }
    }
  } // methods
}; // default
</script>
<style>
[aeris-year-download-metadata-layout] {
  display: flex;
  flex-direction: column;
  border: none;
  background: #fafafa;
  padding: 24px;
}

[aeris-year-download-metadata-layout] p {
  padding: 15px 0;
}

[aeris-year-download-metadata-layout] .aeris-year:hover {
  background: gainsboro;
}

[aeris-year-download-metadata-layout] .aeris-year {
  display: inline-block;
  padding: 2px;
  margin: 2px;
}

[aeris-year-download-metadata-layout] .aeris-year.selected {
  background: gainsboro;
}

[aeris-year-download-metadata-layout] .loadingbar {
  background: gainsboro;
  padding: 3px;
}

[aeris-year-download-metadata-layout] .year-container {
  margin-top: 5px;
  margin-bottom: 5px;
}

[aeris-year-download-metadata-layout] .year-value {
  display: block;
  width: 40px;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  position: relative;
}

[aeris-year-download-metadata-layout] .year-label {
  display: block;
  text-align: center;
  font-size: 9px;
  text-transform: uppercase;
  margin-bottom: 2px;
  letter-spacing: 0.7px;
  cursor: pointer;
}
</style>
