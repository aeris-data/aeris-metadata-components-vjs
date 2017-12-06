<template>
<ul data-aeris-metadata-list>
  <li v-for="item in JSON.parse(items)" v-if="item.value">
    <h5>{{item.name}}:</h5>

    <p v-if="item.img"><img :src="item.img" /></p>
    <p v-else-if="item.url">{{item}}</p>

    <ul v-else-if="Array.isArray(item.value)">
      <li v-for="subitem in item.value">{{subitem}}</li>
    </ul>

    <p v-else-if="item.value">{{item.value}}</p>

  </li>
</ul>
</template>

<script>
export default {

  name: 'aeris-metadata-list',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    items: {
      required: true
    }
  },

  data() {
    return {
      theme: null,
      aerisThemeListener: null
    };
  },

  created: function() {
    console.log("Eurochamp derivatized experiment - Creating");
    this.aerisThemeListener = this.handleTheme.bind(this);
    document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  destroyed: function() {
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
  },

  methods: {

    handleTheme: function(event) {
      this.theme = event.detail;
      this.ensureTheme();
    },

    ensureTheme: function() {
      if (this.theme) {
        let elems = this.$el.querySelectorAll('ul li h5');
        let length = elems.length;
        for (let index = 0; index < length; index++) {
          elems[index].style.color = this.theme.primary;
        }
      }
    }

  }
}
</script>

<style>
[data-aeris-metadata-list] {
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-list] li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
}

[data-aeris-metadata-list]>li {
  padding: 8px 0 0 0px;
}

[data-aeris-metadata-list] li h5 {
  margin-right: 10px;
}

[data-aeris-metadata-list] li p,
[data-aeris-metadata-list] li ul {
  padding: 0;
  margin: 0;
}
</style>
