<template>
<dl data-aeris-metadata-list-definition-layout>
  <aeris-metadata-ui-card v-for="item in JSON.parse(items)" v-if="item.value">
    <dt><i :class="item.icon" :style="{'color': theme.primary}"></i> {{item.name}}</dt>
    <dd v-if="item.value">{{item.value}}</dd>
    <dd v-else-if="item.img"><img :src="item.img" /></dd>
    <dd v-else-if="item.url">{{item}}</dd>
  </aeris-metadata-ui-card>
</dl>
</template>

<script>
export default {

  name: 'aeris-metadata-list-definition-layout',

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
    }
  }
}
</script>

<style>
[data-aeris-metadata-list-definition-layout] {
  display: flex;
  flex-flow: row wrap;
  font-size: 1em;
  font-weight: 300;
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-list-definition-layout] [data-aeris-metadata-ui-card] {
  margin: 8px;
}

[data-aeris-metadata-list-definition-layout] i {
  font-size: 2em;
  margin-bottom: 12px;
}

[data-aeris-metadata-list-definition-layout] dt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
}

[data-aeris-metadata-list-definition-layout] dd {
  font-size: 1.1em;
  margin: 0;
  padding: 4px;
}
</style>
