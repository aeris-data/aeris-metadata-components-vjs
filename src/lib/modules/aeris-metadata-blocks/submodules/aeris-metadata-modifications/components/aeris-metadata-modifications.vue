<i18n>
{
  "en": {
    "modifications": "Modifications",
    "author" : "Author"
  },
  "fr": {
    "modifications": "Modifications",
    "author": "Auteur"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('modifications')" :theme="theme" icon="fa fa-history">
    <section v-for="modification in currentModifications" :key="modification.date">
      <article class="tempExt">
        <div class="metadata-temporal">
          <div>
            <i class="fa fa-calendar" /><span> {{ format(modification.date) }}</span>
          </div>
          <div class="metadata-author-description">
            <i class="fa fa-user" /> : {{ modification.author }}
            <div v-if="modification.name">( {{ modification.name }} )</div>
          </div>
        </div>
      </article>
    </section>
  </aeris-metadata-layout>
</template>

<script>
import moment from "moment";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

export default {
  name: "aeris-metadata-modifications",

  components: { AerisMetadataLayout },

  props: {
    language: {
      type: String,
      default: "en"
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },
    modifications: {
      type: Array,
      default: null
    },
    orcidService: {
      type: String,
      default: "https://sedoo.aeris-data.fr/aeris-rest-services/rest/orcid/name/"
    }
  },

  data() {
    return {
      currentModifications: null
    };
  },

  computed: {
    isVisible() {
      return this.currentModifications !== null && this.currentModifications.length > 0;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    modifications(modifications, oldModifications) {
      if (modifications !== oldModifications) {
        this.updateModificationAuthorName(modifications);
      }
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.updateModificationAuthorName(this.modifications);
  },

  methods: {
    format(value) {
      return moment(value).format("LLL");
    },

    sort(a, b) {
      var aMoment = moment(a.date);
      var bMoment = moment(b.date);
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    },

    updateModificationAuthorName(modifications) {
      let modificationsTmp = [];
      if (modifications !== null && modifications.length > 0) {
        modificationsTmp = modifications;
        modificationsTmp.sort(this.sort);
        modificationsTmp.reverse();
        let authors = [];
        let keys = [];
        modificationsTmp.forEach(modification => {
          let author = {};
          author.author = modification.author;
          if (author.author && keys.indexOf(author.author) === -1) {
            authors.push(author);
            keys.push(author.autho);
          }
        });

        authors.forEach(author => {
          let url = this.orcidService + author.author;
          this.$http.get(url).then(response => {
            author.name = response.bodyText;
          });
        });

        modificationsTmp.forEach(modification => {
          authors.forEach(author => {
            if (modification.author == author.author) {
              modification.name = author.name;
            }
          });
        });
      }

      this.currentModifications = modificationsTmp;
    }
  }
};
</script>

<style scoped>
.metadata-author-description {
  margin-left: 0.5em;
  padding: 3px 0 0 10px;
  border-left: 1px solid #bbb;
  font-size: 0.8em;
  line-height: 1.5em;
}
</style>
