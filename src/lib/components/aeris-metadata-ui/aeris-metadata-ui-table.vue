<template>
<div data-aeris-metadata-table-layout>
  <table>
    <thead>
      <tr>
        <th v-for="title in tableParsed.header">{{title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableParsed.content">
        <td v-for="column in row">
          <!-- <div v-if="column.type == 'img'">
            <img :src="column.value"></img>
          </div> -->
          <span v-html="column.value"></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {

  name: 'aeris-metadata-ui-table',

  props: {
    table: {
      required: true
    }
  },

  data() {
    return {
      theme: null,
      aerisThemeListener: null
    }
  },

  computed: {
    tableParsed() {
      return JSON.parse(this.table);
    }
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  destroyed: function() {
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
  },

  created: function() {
    console.log("Eurochamp molecule experiment - Creating");
    this.aerisThemeListener = this.handleTheme.bind(this)
    document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  updated: function() {
    this.ensureTheme()
  },

  methods: {

    handleTheme: function(event) {
      if (this.visible) {
        this.theme = event.detail
        this.ensureTheme();
      }

    },

    ensureTheme: function() {
      if (this.visible) {
        if (this.theme) {
          this.$el.querySelector("header").style.background = this.theme.primary;
          var elems = this.$el.querySelectorAll('article th');
          let length = elems.length;
          for (let index = 0; index < length; index++) {
            elems[index].style.color = this.theme.primary
          }
        }
      }
    },
  }

}
</script>

<style>
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
  background: #EEE;
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
