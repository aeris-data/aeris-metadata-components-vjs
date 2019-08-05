<i18n>
{
  "en": {
  	"download": "Download",
  	"explicationText": "To download the data files, add them to your downloads by clicking on each year.",
  	"year": "year",
    "l0instructions": "Only level-2 files can be downloaded directly. If you are interested in getting level-0 data, please contact the investigators"
  },
  "fr": {
  	"download": "Téléchargement",
  	"explicationText": "Pour télécharger les fichiers de données, ajoutez-les à vos téléchargements en cliquant sur les différentes années.",
  	"year": "ann.",
  	"l0instructions": "Seuls les fichiers de niveau 2 peuvent être téléchargés directement. Si vous êtes intéressés par les fichier de niveau 0, contactez les responsables."
  }
}
</i18n>

<template>
  <section v-show="isVisible" :style="applyTheme" aeris-year-download-metadata-layout data-template="metadata-block">
    <header>
      <h3><i name="download" class="fas fa-download primaryTheme" />{{ $t("download") }}</h3>
    </header>
    <article>
      <div v-if="isL0" style="text-align:justify">
        <span class="explication">{{ $t("l0instructions") }}</span>
      </div>
      <div v-else style="text-align:justify">
        <span class="explication">{{ $t("explicationText") }}</span>
        <div v-show="years" class="year-container">
          <div
            v-for="item in years"
            :key="item.year"
            :class="{ selected: selection.includes(item) }"
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
import _ from "lodash";
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
    years: {
      type: Array,
      required: true
    },
    isInCart: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      service: null,
      identifier: null,
      collectionName: null,
      isL0: false,
      selection: []
    };
  },

  computed: {
    isVisible() {
      return this.years !== null && this.years.length > 0;
    },
    applyTheme() {
      if (this.theme && this.theme.primaryColor) {
        return {
          "--primaryColor": this.theme.primaryColor
        };
      } else {
        return "";
      }
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
    isInCart(isInCart) {
      !isInCart ? (this.selection = []) : null;
    },
    selection(selection) {
      selection.length > 0
        ? this.$emit("addItemCart", {
            type: "GET",
            metadataTitle: this.collectionName,
            metadataIdentifier: this.identifier,
            url: encodeURI(
              `${this.service.replace(/\/$/, "")}/download?collectionId=${this.identifier}&filter=${selection
                .map(item => item.year)
                .join(",")}`
            ),
            fileNumber: _.reduce(selection, (acc, item) => acc + item.fileNumber, 0),
            fileSize: _.reduce(selection, (acc, item) => acc + item.totalSize, 0),
            filterDescription: `Years: ${_.reduce(
              selection,
              (acc, item) => (acc ? `${acc}, ${item.year}` : item.year),
              ""
            )}`
          })
        : this.$emit("removeItemCart", this.identifier);
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.ensureTheme(this.theme);
    this.updateMetadataDownload(this.metadata);
  },

  methods: {
    toggleYear(item) {
      const index = this.selection.findIndex(i => i === item);
      index != -1 ? this.selection.splice(index, 1) : this.selection.push(item);
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
      }
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
  background: var(--primaryColor);
  color: #fff;
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

.primaryTheme {
  color: var(--primaryColor);
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  backface-visibility: hidden;
}

header i {
  margin-left: 20px;
  color: #999;
  margin-right: 12px;
}

article {
  margin-left: 20px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
</style>
