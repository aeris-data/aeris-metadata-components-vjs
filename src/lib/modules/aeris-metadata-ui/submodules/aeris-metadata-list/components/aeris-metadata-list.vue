<template>
  <ul :style="applyTheme" class="data-aeris-metadata-list">
    <li v-for="item in valuedItems" :key="item.uuid">
      <h5>{{ item.name }}:</h5>

      <p v-if="item.img"><img :src="item.img" /></p>
      <p v-else-if="item.url">{{ item }}</p>

      <ul v-else-if="Array.isArray(item.value)">
        <li v-for="subitem in item.value" :key="subitem">{{ subitem }}</li>
      </ul>

      <p v-else-if="item.value" v-html="item.value" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "aeris-metadata-list",

  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  computed: {
    valuedItems() {
      return this.items.filter(item => item.value);
    },
    applyTheme() {
      return {
        "--primary": this.theme.primaryColor
      };
    }
  }
};
</script>

<style scoped>
.data-aeris-metadata-list {
  padding: 0;
  margin: 0;
}

.data-aeris-metadata-list li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
}

.data-aeris-metadata-list > li {
  padding: 8px 0 0 0px;
}

.data-aeris-metadata-list li h5 {
  margin: 0 10px 0 0;
  font-weight: 400;
  font-size: 1rem;
  color: var(--primary);
}

.data-aeris-metadata-list li p,
.data-aeris-metadata-list li ul {
  padding: 0;
  margin: 0;
}
</style>
