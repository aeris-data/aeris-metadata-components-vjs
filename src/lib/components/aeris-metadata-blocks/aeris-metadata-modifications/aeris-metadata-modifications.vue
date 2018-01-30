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
<aeris-metadata-layout data-aeris-metadata-modifications v-show="visible" :title="$t('modifications')" :type="type" :isVisible="visible" :order="order" icon="fa fa-history">
  <ul>
    <li v-for="modification in modifications">
      <aeris-metadata-ui-card>
        <i class="fa fa-calendar"></i>
        <ul>
          <li>
            <p>{{format(modification.date)}}</p>
          </li>
          <li>
            <p>{{modification.author}}</p>
            <p v-if="modification.name">({{modification.name}})</p>
          </li>
        </ul>
      </aeris-metadata-ui-card>
    </li>
  </ul>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-modifications',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    order: {
      type: Number
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
  },

  created: function() {
    console.log("Aeris Modifications - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  data() {
    return {
      modifications: [],
      visible: false,
      aerisMetadataListener: null,
      orcidService: "https://sedoo.aeris-data.fr/aeris-rest-services/rest/orcid/name/",
      type: 'aerisModifications'
    }
  },
  methods: {

    format: function(value) {
      return moment(value).format('LLL');
    },

    sort: function(a, b) {
      var aMoment = moment(a.date);
      var bMoment = moment(b.date);
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    },

    handleError: function() {

    },

    handleSuccess: function(response, author) {
      if (this.modifications) {
        for (var i = 0; i < this.modifications.length; i++) {
          var modification = this.modifications[i]
          if (modification.author == author) {
            modification.name = response.bodyText
            this.$set(this.modifications, i, modification)
          }
        }
      }
    },

    handleRefresh: function(data) {
      console.log("Aeris Modifications - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.modifications = [];
      if (data.detail.modifications) {
        this.visible = true;
        var modifications = data.detail.modifications;
        modifications.sort(this.sort);
        this.modifications = modifications.reverse();
        for (var i = 0; i < modifications.length; i++) {
          var modification = modifications[i]
          if (modification.author) {
            var url = this.orcidService + modification.author;
            let aux = modification.author
            this.$http.get(url)
              .then((response) => {
                this.handleSuccess(response, aux)
              }, (response) => {
                this.handleError(response)
              });
          }
        }
      } else {
        this.visible = false;
      }
    }
  }
}
</script>

<style>
[data-aeris-metadata-modifications] ul {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-modifications] li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 8px 0 0 0px;
  margin: 4px 8px;
}
</style>
