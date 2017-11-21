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
<div class="aeris-metadata-modifications-host" v-show="visible">
  <div class="component-container">
    <header>
      <h3><i class="fa fa-history"></i> {{ $t('modifications') }}</h3>
      <div class="aeris-icon-group"></div>
    </header>
    <main>
      <div v-for="modification in modifications">
        <article class="tempExt">
          <div class="metadata-temporal">
            <div>
              <i class="fa fa-calendar" /><span> {{format(modification.date)}}</span>
            </div>
            <div class="metadata-author-description">
              <i class="fa fa-user" /> : {{modification.author}}
              <div v-if="modification.name">
                ( {{modification.name}} )
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  </div>
</div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },


  },


  watch: {
    lang(value) {
      this.$i18n.locale = value
    }
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
  },

  created: function() {
    console.log("Aeris Modifications - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisThemeListener = this.handleTheme.bind(this)
    document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  computed: {},

  data() {
    return {
      modifications: [],
      visible: true,
      aerisThemeListener: null,
      aerisMetadataListener: null,
      orcidService: "https://sedoo.aeris-data.fr/aeris-rest-services/rest/orcid/name/"
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

    handleTheme: function(event) {
      this.$el.querySelector("header").style.background = event.detail.primary
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
      this.lang = data.lang || this.lang
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

.metadata-author-description {
    margin-left: 0.5em;
padding: 3px 0 0 10px;
border-left: 1px solid #bbb;
font-size: 0.8em;
line-height: 1.5em;
}

 </style>
