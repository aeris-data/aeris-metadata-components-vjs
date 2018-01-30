<template>
<ul data-aeris-metadata-list>
  <li v-for="item in JSON.parse(items)" v-if="item.value">
    <aeris-metadata-ui-card>
      <i :class="item.icon"></i>
      <dt>{{item.name}}</dt>
      <dd v-if="item.value">{{item.value}}</dd>
      <dd v-else-if="item.img"><img :src="item.img" /></dd>
      <dd v-else-if="item.url">{{item}}</dd>

      <dl v-else-if="Array.isArray(item.value)">
        <template v-for="subitem in item.value">
          <dt>{{subitem.title}}</dt>
          <dd>{{subitem.text}}</dd>
        </template>
      </dl>

    </aeris-metadata-ui-card>
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
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-list]>li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 8px 0 0 0px;
  margin: 4px 8px;
}

[data-aeris-metadata-list]>li p,
[data-aeris-metadata-list]>li ul {
  padding: 0;
  margin: 0;
}
</style>
