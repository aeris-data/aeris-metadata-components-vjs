<template>
  <div v-if="visible" data-aeris-metadata-title>
    <header>
      <h3>{{ title }}</h3>
    </header>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-title",

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
    console.log("Aeris Metadata Title - Creating");
    // this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  data() {
    return {
      visible: false,
      title: null,
      aerisMetadataListener: null
    };
  },

  methods: {
    handleRefresh: function(data) {
      console.log("Aeris Metadata Title - Refreshing");
      this.visible = false;
      if (!data || !data.detail) {
        return;
      }
      if (data.detail.resourceTitle) {
        this.visible = true;
        this.title = data.detail.resourceTitle.en;
      } else {
        this.visible = false;
      }
    },

    handleSuccess: function(response) {
      this.citation = response.data.trim();
    },

    handleError: function(response) {}
  }
};
</script>

<style>
[data-aeris-metadata-title] {
  display: flex;
  flex-direction: column;
  border: none;
  background: #fafafa;
  padding: 24px;
}

[data-aeris-metadata-title] header h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
</style>
