<template>
<div data-aeris-metadata-table-layout>
  <slot></slot>
</div>
</template>

<script>
export default {

  data() {
    return {
      theme: null,
      aerisThemeListener: null
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
}

[data-aeris-metadata-table-layout] table tbody tr:nth-child(odd) {
  background: #EEE;
}

[data-aeris-metadata-table-layout] table tr {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

[data-aeris-metadata-table-layout] table td div {
  display: flex;
}
</style>
