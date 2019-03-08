<i18n>
{
  "en": {
  	"download": "Download",
  	"addToCart": "Add to your downloads",
  	"addedToCart": "Added to your downloads",
  	"explicationText": "To download the data files, add them to your downloads by clicking here.",
  	"addingToCart": "Addition in progress"
  },
  "fr": {
  	"download": "Téléchargement",
  	"addToCart": "Ajouter à vos téléchargements",
  	"addedToCart": "Ajouté à vos téléchargements",
  	"explicationText": "Pour télécharger les fichiers de données, ajoutez-les à vos téléchargements en cliquant ici.",
  	"addingToCart": "Ajout en cours"
  }
}
</i18n>
<template>
  <section v-if="isVisible" :style="applyTheme" data-aeris-metadata-layout data-template="metadata-block">
    <header>
      <h3><i name="download" class="fa fa-download primaryTheme" />{{ $t("download") }}</h3>
    </header>
    <article v-if="!isInCart">
      <p>{{ $t("explicationText") }}</p>
      <aeris-ui-icon-button
        :text="$t('addToCart')"
        icon="fa fa-cart-arrow-down"
        type="button"
        @click="addToCart"
      ></aeris-ui-icon-button>
    </article>
    <article v-else>
      <p>{{ $t("explicationText") }}</p>
      <div class="primaryTheme"><i :aria-hidden="true" class="fa fa-check" /> {{ $t("addedToCart") }}</div>
    </article>
  </section>
</template>

<script>
import { AerisUiIconButton } from "aeris-commons-components-vjs";
export default {
  name: "aeris-metadata-single-file-download",

  components: { AerisUiIconButton },

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
    isInCart: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      downloadEntry: {},
      service: null,
      identifier: null,
      collectionName: null
    };
  },

  computed: {
    isVisible() {
      return this.service !== null;
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
    language(value) {
      this.$i18n.locale = value;
    },
    theme(theme) {
      this.ensureTheme(theme);
    },
    metadata(metadata) {
      this.updateMetadataDownload(metadata);
    },
    isInCart() {
      this.$nextTick(() => {
        this.ensureTheme(this.theme);
      });
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.ensureTheme(this.theme);
    this.updateMetadataDownload(this.metadata);
  },

  methods: {
    updateMetadataDownload(metadata) {
      let links = metadata ? metadata.links : "";
      if (links && metadata.identifier && metadata.resourceTitle) {
        this.identifier = metadata.identifier;
        this.collectionName = metadata.resourceTitle;

        let links = metadata.links;
        if (links && links.length > 0) {
          for (let i = 0; i < links.length; i++) {
            let link = links[i];
            if (link.type == "OPENSEARCH_LINK") {
              this.service = link.url;
              break;
            }
          }
        }
        this.ensureTheme(this.theme);
      }
    },

    handleSuccess(response, uuid) {
      this.downloadEntries = response.data.entries;
      if (this.downloadEntries.length > 0) {
        this.downloadEntry = this.downloadEntries[0];
        let url_download_service = this.service;
        let cartItem = {
          collectionName: this.collectionName,
          url: url_download_service,
          collectionId: this.identifier,
          identifier: this.identifier,
          data: "",
          fileNumber: this.downloadEntry.fileNumber,
          totalSize: this.downloadEntry.totalSize,
          type: "nofilter"
        };

        this.$emit("addItemCart", cartItem);
        this.$store.dispatch("deleteNotification", uuid);
      }
    },

    handleError(response, uuid) {
      this.$store.dispatch("deleteNotification", uuid);
    },

    addToCart() {
      if (!this.isInCart) {
        let uuid = this.identifier;
        let notification = {
          message: this.$i18n.t("addingToCart"),
          type: "wait",
          uuid: uuid
        };
        this.$store.dispatch("addNewNotification", notification);

        if (this.service && this.identifier) {
          let url = null;
          if (this.service.endsWith("/")) {
            this.service = this.service.substring(0, this.service.length - 1);
          }
          url = this.service + "/request?collection=" + this.identifier;
          this.$http.get(url).then(
            response => {
              this.handleSuccess(response, uuid);
            },
            response => {
              this.handleError(response, uuid);
            }
          );
        }
      }
      this.ensureTheme(this.theme);
    },

    ensureTheme(theme) {
      let buttonAddToCard = document.querySelector("#addToCard");
      if (buttonAddToCard) {
        buttonAddToCard.style.color = theme.primaryColor;
        buttonAddToCard.style.background = "#FFFFFF";
        buttonAddToCard.style.borderColor = theme.primaryColor;
      }
    }
  }
};
</script>
<style scoped>
.primaryTheme {
  color: var(--primaryColor);
}
</style>
