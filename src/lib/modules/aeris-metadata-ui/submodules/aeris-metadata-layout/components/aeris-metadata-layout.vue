<template>
  <div :style="applyTheme" class="data-aeris-metadata-layout" data-template="metadata-block">
    <header v-if="showTitle">
      <h3><i :class="icon" /> {{ title }}</h3>
      <div class="aeris-icon-group" />
    </header>
    <section :class="{ main: showTitle }"><slot /></section>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-layout",

  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  computed: {
    applyTheme() {
      return {
        "--primaryColor": this.theme.primaryColor
      };
    }
  }
};
</script>

<style scoped>
.data-aeris-metadata-layout {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 24px;
  margin-bottom: 10px;
  break-inside: avoid;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.data-aeris-metadata-layout header h3 i,
.data-aeris-metadata-layout header h5,
.data-aeris-metadata-layout header h6 {
  color: var(--primaryColor);
}

.data-aeris-metadata-layout header h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}

.data-aeris-metadata-layout header i {
  margin-right: 12px;
}

.data-aeris-metadata-layout .main {
  padding: 16px 0 0 0px;
}

.data-aeris-metadata-layout h5 {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

.data-aeris-metadata-layout h6 {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 15px 0;
}

.data-aeris-metadata-layout article {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
