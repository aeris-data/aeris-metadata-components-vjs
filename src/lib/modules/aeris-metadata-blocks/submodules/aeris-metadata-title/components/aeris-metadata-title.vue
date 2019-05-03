<template>
  <div v-if="isVisible" aeris-metadata-title>
    <header>
      <h3>{{ title }}</h3>
    </header>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-title",
  props: {
    language: {
      type: String,
      default: "en"
    },
    resourceTitle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    },
    resourceTitle(resourceTitle) {
      this.updateTitle(resourceTitle);
    }
  },

  data() {
    return {
      title: null
    };
  },

  computed: {
    isVisible() {
      let visible = this.title && this.title !== null;
      this.$emit("visibility", { name: this.$options.name, isVisible: visible });     
      return visible;
    }
  },

  created() {
    this.updateTitle(this.resourceTitle);
  },

  methods: {
    updateTitle(resourceTitle) {
      this.title = this.language === "fr" ? resourceTitle.fr : resourceTitle.en;
    }
  }
};
</script>

<style scoped>
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
