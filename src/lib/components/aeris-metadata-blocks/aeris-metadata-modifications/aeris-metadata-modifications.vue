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
  <aeris-metadata-layout v-if="visible" :title="$t('modifications')" icon="fa fa-history">
    <div v-for="modification in modifications" :key="modification.date">
      <article class="tempExt">
        <div class="metadata-temporal">
          <div>
            <i class="fa fa-calendar" /><span> {{ format(modification.date) }}</span>
          </div>
          <div class="metadata-author-description">
            <i class="fa fa-user" /> : {{ modification.author }}
            <div v-if="modification.name">
              ( {{ modification.name }} )
            </div>
          </div>
        </div>
      </article>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import moment from "moment";

export default {
  name: "aeris-metadata-modifications",

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
    console.log("Aeris Modifications - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      modifications: [],
      visible: false,
      aerisMetadataListener: null,
      orcidService:
        "https://sedoo.aeris-data.fr/aeris-rest-services/rest/orcid/name/"
    };
  },
  methods: {
    format: function(value) {
      return moment(value).format("LLL");
    },

    sort: function(a, b) {
      var aMoment = moment(a.date);
      var bMoment = moment(b.date);
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    },

    handleError: function() {},

    handleSuccess: function(response, author) {
      if (this.modifications) {
        for (var i = 0; i < this.modifications.length; i++) {
          var modification = this.modifications[i];
          if (modification.author == author) {
            modification.name = response.bodyText;
            this.$set(this.modifications, i, modification);
          }
        }
      }
    },

    handleRefresh: function(data) {
      this.visible = false;
      if (!data || !data.detail) {
        return;
      }
      this.modifications = [];
      if (data.detail.modifications) {
        this.visible = true;
        var modifications = data.detail.modifications;
        modifications.sort(this.sort);
        this.modifications = modifications.reverse();
        for (var i = 0; i < modifications.length; i++) {
          var modification = modifications[i];
          if (modification.author) {
            var url = this.orcidService + modification.author;
            let aux = modification.author;
            this.$http.get(url).then(
              response => {
                this.handleSuccess(response, aux);
              },
              response => {
                this.handleError(response);
              }
            );
          }
        }
      } else {
        this.visible = false;
      }
    }
  }
};
</script>

<style>
.metadata-author-description {
  margin-left: 0.5em;
  padding: 3px 0 0 10px;
  border-left: 1px solid #bbb;
  font-size: 0.8em;
  line-height: 1.5em;
}
</style>
