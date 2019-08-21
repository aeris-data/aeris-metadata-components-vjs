<template>
  <div class="aeris-metadata-information-link-host">
    <div class="metadata-link-container">
      <main class="aeris-metatada-information-link-content">
        <article class="metadata-link-url">
          <a :href="link.url" :title="link.name" target="_blank">{{ truncate(link.url) }}</a>
        </article>
        <article v-if="link.description" class="metadata-link-desc">
          <aeris-metadata-international-field
            :content="link.description"
            :language="language"
            label="Description"
          ></aeris-metadata-international-field>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";
export default {
  name: "aeris-metadata-information-link",

  components: { AerisMetadataInternationalField },

  props: {
    language: {
      type: String,
      default: "en"
    },
    link: {
      type: Object,
      default: null
    }
  },

  methods: {
    truncate(str) {
      return str && str.length > 50 ? str.substr(0, 47) + "..." : str;
    }
  }
};
</script>

<style scoped>
aeris-metadata-information-link-host {
  display: block;
  font-family: "Open Sans", sans-serif;
  transition: 0.6s;
}

.aeris-metadata-information-link-host[edit] {
  margin: 10px 0;
  border: 1px solid #ddd;
  box-shadow: 0 5px 10px #ddd;
}

.aeris-metadata-information-link-host[edit] .metadata-link-container main {
  display: block;
}

.metadata-link-container {
  position: relative;
}

.metadata-link-container .aeris-metatada-information-link-content {
  border: 0px;
}

.metadata-link-container main .metadata-link-url {
  overflow: hidden;
  padding-right: 10px;
}

.metadata-link-container main .metadata-link-desc {
  border-left: 1px solid #ddd;
  padding-left: 10px;
}

.metadata-link-container .metadata-link-desc aeris-metadata-international-field,
.metadata-link-container .metadata-link-desc p {
  margin: 5px 0;
  font-size: 0.8em;
}
</style>
