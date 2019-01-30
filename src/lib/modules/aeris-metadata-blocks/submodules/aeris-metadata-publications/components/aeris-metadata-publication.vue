<i18n>
{
  "en": {
    "description": "Description",
    "authors": "Authors",
    "journal": "Journal",
    "publicationYear":"Publication year",
    "doi":"DOI"
   },
  "fr": {
    "description": "Description",
    "authors": "Auteurs",
    "journal": "Journal",
    "publicationYear":"Année de publication",
    "doi":"DOI"
  }
}
</i18n>

<template>
  <div class="aeris-metadata-publication-host">
    <div :class="{ showBody: deployed }" class="aeris-publication-container">
      <header class="aeris-publication-header" @click="deployed = !deployed">
        <span>
          <h5 class="aeris-publication-header">{{ value.title }}</h5>
        </span>
        <i class="fa fa-chevron-down"/>
      </header>
      <article v-if="deployed">
        <div>
          <div v-if="value.description">
            <p>{{ value.description }}</p>
          </div>
        </div>
        <div>
          <h5>{{ $t('authors') }}:</h5>
          <div>
            <p class="aeris-publication-authors">
              <i class="fa fa-user"/>
              <span v-for="author in value.authors" :key="author">{{ author }}</span>
            </p>
          </div>
        </div>
        <div>
          <h5>{{ $t('journal') }}:</h5>
          <p>
            <span>{{ value.journalName }}</span>
            <span>{{ value.journalSection }}</span>
          </p>
        </div>
        <div>
          <h5>{{ $t('publicationYear') }}:</h5>
          <p>{{ value.publicationYear }}</p>
        </div>
        <div>
          <h5 v-if="value.doi">{{ $t('doi') }}</h5>
          <p>
            <a :href="computedDoiUrl" target="_blank">{{ computedDoiLinkName }}</a>
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-publication",

  props: {
    language: {
      type: String,
      default: ""
    },
    publication: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      deployed: false
    };
  },

  computed: {
    computedDoiUrl() {
      if (!this.value) {
        return "";
      }
      if (!this.value.doi) {
        return "";
      }
      var aux = this.value.doi;
      var ind = aux.indexOf("http");
      if (ind >= 0) {
        aux = aux.substring(ind, aux.length);
        return aux;
      } else {
        return "http://doi.org/" + aux;
      }
    },

    computedDoiLinkName() {
      if (this.value.doi.length > 60) {
        return this.value.doi.substring(0, 60) + "...";
      } else {
        return this.value.doi;
      }
    },

    value() {
      if (this.publication == null) {
        return {};
      } else {
        return this.publication;
      }
    }
  },
  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    }
  },

  mounted() {
    this.$i18n.locale = this.language || this.getLanguage;
  }
};
</script>

<style>
.aeris-publication-container header h5.aeris-publication-header {
  color: #475053;
}

.aeris-metadata-publication-host {
  display: block;
  font-family: "Open Sans", sans-serif;
  transition: 0.6s;
  margin: 10px 0;
}

.aeris-publication-container header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap row;
  padding: 10px;
  backface-visibility: hidden;
  cursor: pointer;
}

.aeris-publication-container header h5 {
  display: inline;
  margin: 0;
}

.aeris-publication-container header paper-input {
  width: 100%;
  padding: 2px 0;
  font-size: 0.83em;
  font-weight: bold;
  color: #4765a0;
  outline: none;
  border: none;
}

.aeris-publication-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer;
}

.aeris-publication-container header i:hover {
  opacity: 0.6;
}

.aeris-publication-container header .aeris-button-group {
  white-space: nowrap;
}

.aeris-publication-container article {
  padding: 10px;
}

.aeris-publication-container article h5 {
  margin: 5px 0;
  color: var(--main-color, #4765a0);
}

.aeris-publication-container article p {
  margin: 0;
}

.aeris-publication-container article a {
  color: #3498db;
}

.aeris-publication-container .fa-chevron-down {
  transition: 0.3s;
}

.aeris-publication-container.showBody .fa-chevron-down {
  transform: rotate(180deg);
}

.aeris-publication-authors .fa {
  margin-right: 5px;
}

.aeris-publication-authors {
  display: block;
  flex-flow: row wrap;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}

.aeris-addauthor {
  display: flex;
  align-items: center;
}

.aeris-addauthor paper-input {
  width: 150px;
}

.aeris-addauthor-btn {
  margin: 5px 0;
  color: #4765a0;
}

.aeris-addauthor-btn:hover {
  cursor: pointer;
}

.aeris-addauthor-btn .fa {
  margin: 0 5px;
}

.metadata-icon-btn {
  margin: 0 5px;
  cursor: pointer;
}

.metadata-icon-btn:hover {
  opacity: 0.6;
}
</style>
