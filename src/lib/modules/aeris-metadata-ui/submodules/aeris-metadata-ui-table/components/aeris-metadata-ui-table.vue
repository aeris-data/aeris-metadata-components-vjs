<template>
  <section data-aeris-metadata-table-layout>
    <table>
      <thead>
        <tr>
          <th v-for="title in table.header" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in table.content" :key="index">
          <td v-for="(column, index) in row" :key="column.value + '_' + index"><span v-html="column.value" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "aeris-metadata-ui-table",

  props: {
    table: {
      type: Object,
      required: true
    },
    theme: {
      type: Object,
      default: null
    }
  },

  watch: {
    theme(value) {
      this.ensureTheme(value);
    }
  },

  created() {
    if (this.theme) {
      this.ensureTheme(this.theme);
    }
  },

  methods: {
    ensureTheme(theme) {
      if (theme) {
        this.$el.querySelector("header").style.background = theme.primary;
        let elements = this.$el.querySelectorAll("article th");
        let length = elems.length;
        for (let index = 0; index < length; index++) {
          elements[index].style.color = theme.primary;
        }
      }
    }
  }
};
</script>

<style scoped>
[data-aeris-metadata-table-layout] table {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

[data-aeris-metadata-table-layout] table th {
  text-align: left;
  font-weight: 300;
  font-size: 1.1rem;
}

[data-aeris-metadata-table-layout] table tbody tr:nth-child(odd) {
  background: #eee;
}

[data-aeris-metadata-table-layout] table tr {
  display: flex;
  padding: 10px;
}

[data-aeris-metadata-table-layout] table tr th,
[data-aeris-metadata-table-layout] table tr td {
  width: 33%;
}

[data-aeris-metadata-table-layout] table td {
  word-break: break-all;
}

[data-aeris-metadata-table-layout] table td div {
  display: flex;
}
</style>
