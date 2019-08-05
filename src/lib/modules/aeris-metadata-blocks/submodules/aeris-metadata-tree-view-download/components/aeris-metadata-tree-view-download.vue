<i18n>
{
  "en": {
  	"download": "Download",
  	"explicationText": "Select the files you want to download."
  },
  "fr": {
  	"download": "Téléchargement",
  	"explicationText": "Sélectionnez les fichiers que vous souhaitez télécharger."
  }
}
</i18n>

<template>
  <section
    :style="{ '--primaryColor': theme ? theme.primaryColor : null }"
    aeris-metadata-single-file-download
    data-template="metadata-block"
  >
    <header>
      <h3><i name="download" class="fas fa-download primaryTheme" />{{ $t("download") }}</h3>
    </header>
    <article>
      <p>{{ $t("explicationText") }}</p>
      <v-treeview v-model="selection" :items="files" selection-type="independent" selectable return-object></v-treeview>
    </article>
  </section>
</template>

<script>
import deepdash from "deepdash-es";
import lodash from "lodash";
const _ = deepdash(lodash);

export default {
  name: "aeris-metadata-tree-view-download",

  props: {
    language: {
      type: String,
      default: "en",
      required: false
    },
    theme: {
      type: Object,
      default: null,
      required: false
    },
    metadata: {
      type: Object,
      required: true
    },
    files: {
      type: Array,
      default: null,
      required: true
    },
    isInCart: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      selection: []
    };
  },

  computed: {
    selectionTree() {
      return this.selection.length > 0
        ? _.filterDeep(
            _.mapDeep(this.files, f => _.set(f, "checked", this.selection.includes(f))),
            (value, key, parent) => parent.checked || _.some(parent.children, c => c.checked)
          )
        : null;
    },
    url() {
      return this.metadata.links.find(m => m.type === "OPENSEARCH_LINK").url;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    selectionTree(value) {
      this.updateCart(value);
    },
    isInCart(isInCart) {
      !isInCart ? (this.selection = []) : null;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  },

  methods: {
    updateCart(selectionTree) {
      selectionTree
        ? this.$emit("addItemCart", {
            type: "POST",
            metadataTitle: this.metadata.resourceTitle,
            metadataIdentifier: this.metadata.identifier,
            url: this.url,
            body: selectionTree,
            fileNumber: _.reduceDeep(
              this.selectionTree,
              (acc, value, key) => (key === "type" && value === "FILE" ? acc + 1 : acc),
              0
            ),
            fileSize: _.reduceDeep(selectionTree, (acc, value, key) => (key === "size" ? acc + value : acc), 0),
            filterDescription: `Files: ${_.reduceDeep(
              _.filterDeep(this.selectionTree, (value, key, parent) => parent.type === "FILE" && key === "name", {
                leavesOnly: true
              }),
              (acc, value, key) => (key === "name" ? (acc ? `${acc}, ${value}` : value) : acc),
              ""
            )}`
          })
        : this.$emit("removeItemCart", this.metadata.identifier);
    },

    changeInput(newSelection) {
      this.selection = newSelection;
    }
  }
};
</script>

<style scoped>
section {
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

h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}

article {
  margin-left: 20px;
}
</style>
