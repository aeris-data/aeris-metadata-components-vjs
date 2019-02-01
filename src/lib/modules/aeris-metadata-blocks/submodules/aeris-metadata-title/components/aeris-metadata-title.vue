<template>
  <div v-if="visible" aeris-metadata-title>
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
    },
    title: {
      type: String,
      default: ""
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  destroyedtitle() {
    document.removeEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  createdtitle() {
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
  },

  data() {
    return {
      visible: false,
      title: null,
      aerisMetadataListener: null
    };
  },

  methods: {
    handleRefreshtitle(data) {
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
    }
  }
};
</script>

<style>
[aeris-metadata-title] {
  display: flex;
  flex-direction: column;
  border: none;
  background: #fafafa;
  padding: 24px;
}

[aeris-metadata-title] header h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
</style>
