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
  <section :style="applyTheme" aeris-metadata-single-file-download data-template="metadata-block">
    <header>
      <h3><i name="download" class="fas fa-download primaryTheme" />{{ $t("download") }}</h3>
    </header>
    <article v-if="!isInCart">
      <p>{{ $t("explicationText") }}</p>
      <aeris-ui-icon-button
        :text="$t('addToCart')"
        icon="fas fa-cart-arrow-down"
        type="button"
        @click="addToCart"
      ></aeris-ui-icon-button>
    </article>
    <article v-else>
      <p>{{ $t("explicationText") }}</p>
      <div class="primaryTheme"><i :aria-hidden="true" class="fas fa-check" /> {{ $t("addedToCart") }}</div>
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
    metadataTitle: {
      type: Object,
      default: null,
      required: true
    },
    metadataIdentifier: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    isInCart: {
      type: Boolean,
      default: false
    },
    totalSize: {
      type: Number,
      required: true
    },
    fileNumber: {
      type: Number,
      required: true
    }
  },

  computed: {
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
    isInCart() {
      this.$nextTick(() => {
        this.ensureTheme(this.theme);
      });
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.ensureTheme(this.theme);
  },

  methods: {
    addToCart() {
      if (!this.isInCart) {
        this.$emit("addItemCart", {
          type: "GET",
          metadataTitle: this.metadataTitle,
          metadataIdentifier: this.metadataIdentifier,
          url: `${this.url.replace(/\/$/, "")}/download?collectionId=${this.metadataIdentifier}`,
          fileNumber: this.fileNumber,
          fileSize: this.totalSize
        });
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
[aeris-metadata-single-file-download] {
  display: flex;
  flex-direction: column;
  border: none;
  background: #fafafa;
}
.primaryTheme {
  color: var(--primaryColor);
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
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
