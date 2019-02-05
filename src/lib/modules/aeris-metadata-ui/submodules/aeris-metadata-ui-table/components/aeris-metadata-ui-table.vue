<template>
  <table aeris-metadata-ui-table>
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
[aeris-metadata-ui-table] {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

[aeris-metadata-ui-table] th {
  text-align: left;
  font-weight: 300;
  font-size: 1.1rem;
}

[aeris-metadata-ui-table] tbody tr:nth-child(odd) {
  background: #eee;
}

[aeris-metadata-ui-table] tr {
  display: flex;
  padding: 10px;
}

[aeris-metadata-ui-table] tr th,
[aeris-metadata-ui-table] tr td {
  width: 33%;
}

[aeris-metadata-ui-table] td {
  word-break: break-all;
}

[aeris-metadata-ui-table] td div {
  display: flex;
}
</style>
