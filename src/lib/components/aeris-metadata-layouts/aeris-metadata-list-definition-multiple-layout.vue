<template>
<ul data-aeris-metadata-list-definition-multiple-layout>
  <li v-for="item in JSON.parse(items)" v-if="item.value">
    <aeris-metadata-ui-card>
      <i :class="item.icon" :style="{'color': theme.primary}"></i>
      <dl>
        <div v-for="subitem in item.value" v-if="subitem.text || subitem.internationalText">
          <dt>{{subitem.title}}</dt>
          <dd v-if="subitem.text">{{subitem.text}}</dd>
          <dd v-else-if="subitem.internationalText">
            <aeris-metadata-international-field :content="JSON.stringify(subitem.internationalText)" :lang="lang" no-label-float></aeris-metadata-international-field>
          </dd>
          <slot name="item" :item="subitem"></slot>
        </div>
      </dl>
    </aeris-metadata-ui-card>
  </li>
</ul>
</template>

<script>
export default {

  name: 'aeris-metadata-list-definition-multiple-layout',

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
[data-aeris-metadata-list-definition-multiple-layout] {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-list-definition-multiple-layout] [data-aeris-metadata-ui-card] {
  height: 100%;
  margin: 8px;
}

[data-aeris-metadata-list-definition-multiple-layout] i {
  font-size: 2em;
  margin-bottom: 12px;
}

[data-aeris-metadata-list-definition-multiple-layout] li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 8px 0 0 0px;
  margin: 4px 8px;
}

[data-aeris-metadata-list-definition-multiple-layout] dl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

[data-aeris-metadata-list-definition-multiple-layout] dl div {
  padding: 8px;
}

[data-aeris-metadata-list-definition-multiple-layout] dt {
  font-weight: 400;
}

[data-aeris-metadata-list-definition-multiple-layout] dd {
  padding: 4px;
  margin: 0;
  font-size: 1.1em;
}
</style>
