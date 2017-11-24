/*
 dependances:
 font awesome
 international field
*/


<template>
<div class="aeris-metadata-information-link-host">
  <div class="metadata-link-container">
    <main class="aeris-metatada-information-link-content">
      <article class="metadata-link-url">
        <a :href="value.url" target="_blank" :title="value.name">{{truncate(value.url)}}</a>
      </article>
      <article class="metadata-link-desc" v-if="value.description">
        <aeris-metadata-international-field label="Description" :content="JSON.stringify(value.description)" :lang="lang"></aeris-metadata-international-field>
      </article>
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
    link: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  },

  computed: {

    value: function() {
      return JSON.parse(this.link);
    },

  },

  methods: {

    truncate: function(str) {
      return str.length > 50 ? str.substr(0, 47) + '...' : str;
    }

  }
}
</script>

<style>
aeris-metadata-information-link-host {
  display: block;
  font-family: 'Open Sans', sans-serif;
  transition: 0.6s
}

.aeris-metadata-information-link-host[edit] {
  margin: 10px 0;
  border: 1px solid #ddd;
  box-shadow: 0 5px 10px #ddd
}

.aeris-metadata-information-link-host[edit] .metadata-link-container main {
  display: block
}

.metadata-link-container {
  position: relative;
  /*padding: 10px*/
}

.metadata-link-container .aeris-metatada-information-link-content {
  border: 0px;
}

.metadata-link-container main .metadata-link-url {
  overflow: hidden;
  padding-right: 10px
}

.metadata-link-container main .metadata-link-desc {
  border-left: 1px solid #ddd;
  padding-left: 10px
}

.metadata-link-container a {
  color: #3498db
}

.metadata-link-container .metadata-icon-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #4765A0
}

.metadata-link-container .metadata-icon-btn:hover {
  opacity: 0.6
}

.metadata-link-container .metadata-link-desc aeris-metadata-international-field,
.metadata-link-container .metadata-link-desc p {
  margin: 5px 0;
  font-size: 0.8em
}
</style>
