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
  <section v-show="isVisible" data-aeris-metadata-layout data-template="metadata-block">
    <header>
      <h3><i name="download" class="fa fa-download" />{{ $t("download") }}</h3>
    </header>
    <article aeris-year-download-metadata-layout>
      <div v-if="isL0" style="text-align:justify">
        <span class="explication">{{ $t("l0instructions") }}</span>
      </div>
      <div v-else style="text-align:justify">
        <span class="explication">{{ $t("explicationText") }}</span>
        <div v-if="loading" class="loadingbar">
          <i class="fa fa-circle-o-notch fa-spin fa-fw" /> <span>{{ $t("loading") }}</span>
        </div>
        <div v-show="years" class="year-container">
          <div
            v-for="item in years"
            :key="item.year"
            :class="{ selected: item.selected }"
            class="aeris-year"
            @click="toggleYear(item)"
          >
            <div class="year-label">{{ $t("year") }}</div>
            <div class="year-value">{{ item.year }}</div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import moment from "moment";
export default {
  name: "aeris-metadata-year-select-download",

  props: {
    language: {
      type: String,
      default: "en"
    },
    theme: {
      type: Object,
      default: null
    },
    metadata: {
      type: Object,
      default: null
    },
    selectedItemCart: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      years: [],
      service: null,
      identifier: null,
      collectionName: null,
      loading: false,
      isL0: false
    };
  },

  computed: {
    isVisible() {
      return this.years !== null && this.years.length > 0;
    }
  },

  watch: {
    language(language) {
      this.$i18n.locale = language;
    },
    theme(theme) {
      this.ensureTheme(theme);
    },
    metadata(metadata) {
      this.updateMetadataDownload(metadata);
    },
    years(years, oldYears) {
      if (years !== oldYears && this.selectedItemCart) {
        this.updateItemSelectedState(this.selectedItemCart);
      }
    },
    selectedItemCart(selectedItemCart, oldSelectedItemCart) {
      if (selectedItemCart !== oldSelectedItemCart) {
        this.updateItemSelectedState(selectedItemCart);
      }
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.ensureTheme(this.theme);
    this.updateMetadataDownload(this.metadata);
  },

  methods: {
    toggleYear(item) {
      let url_download_service = this.service;
      let cartItem = {
        collectionName: this.collectionName,
        url: url_download_service,
        identifier: this.identifier,
        data: "",
        fileNumber: item.fileNumber,
        totalSize: item.totalSize,
        items: {
          type: "yearfilter",
          elements: [item.year]
        }
      };

      item.selected = !item.selected;
      if (item.selected) {
        this.$emit("addItemCart", cartItem);
      } else {
        this.$emit("removeItemCart", cartItem);
      }
    },

    selectYear(year) {
      if (this.years) {
        for (let i = 0; i < this.years.length; i++) {
          if (this.years[i].year == year) {
            let year = this.years[i];
            year.selected = true;
            this.$set(this.years, i, year);
            break;
          }
        }
      }
    },

    deselectAll() {
      if (this.years) {
        for (let i = 0; i < this.years.length; i++) {
          let year = this.years[i];
          year.selected = false;
          this.$set(this.years, i, year);
        }
      }
    },

    updateItemSelectedState(selectedItemCart) {
      this.deselectAll();
      if (selectedItemCart && selectedItemCart.identifier === this.identifier) {
        let years = selectedItemCart.items.elements;
        for (let j = 0; j < years.length; j++) {
          this.selectYear(years[j]);
        }
      }
    },

    updateMetadataDownload(metadata) {
      let links = metadata ? metadata.links : "";
      if (links && metadata.identifier && metadata.resourceTitle && metadata.dataLevel) {
        this.visible = false;
        this.identifier = metadata.identifier;
        this.collectionName = metadata.resourceTitle;

        if (metadata.dataLevel.toLowerCase() == "l0") {
          this.isL0 = true;
          return;
        } else {
          this.isL0 = false;
        }

        for (let i = 0; i < links.length; i++) {
          let link = links[i];
          if (link.type == "OPENSEARCH_LINK") {
            this.service = link.url;
            break;
          }
        }

        if (this.service && this.identifier) {
          let cached = this.getFromCache(this.getYearCacheKey());
          if (cached) {
            this.years = cached;
            if (this.years.length > 0) {
              this.visible = true;
            }
          } else {
            let url = null;
            if (this.service.endsWith("/")) {
              this.service = this.service.substring(0, this.service.length - 1);
            }
            url = this.service + "/request?collection=" + this.identifier;
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
      }
    },

    handleSuccess(response) {
      let entries = response.data.entries;
      this.loading = false;
      this.years = [];
      if (entries) {
        for (let i = 0; i < entries.length; i++) {
          let date = moment(entries[i].date);
          let item = {};
          item.year = date.year();
          item.selected = false;
          item.totalSize = entries[i].totalSize;
          item.fileNumber = entries[i].fileNumber;
          this.years.push(item);
        }
        this.addToCache(this.getYearCacheKey(), this.years);
      }
      if (entries.length > 0) {
        this.visible = true;
      }
    },

    getYearCacheKey() {
      return this.identifier + "-years";
    },

    getFromCache(key) {
      if (this.$store && this.$store.getters.getYearListCache) {
        return this.$store.getters.getYearListCache[key];
      } else {
        return null;
      }
    },

    addToCache(key, value) {
      if (this.$store && this.$store.getters.getYearListCache) {
        this.$store.commit("setYearListCache", { key, value });
      }
    },

    handleError(response) {
      this.loading = false;
      this.years = [];
    },

    ensureTheme(theme) {
      if (theme && this.$el && this.$el.querySelector("header h3 i")) {
        this.$el.querySelector("header h3 i").style.color = theme.primaryColor;
      }
    }
  }
};
</script>
<style scoped>
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
