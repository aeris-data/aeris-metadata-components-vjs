<template>
<div class="aeris-metadata-parameter-host" v-if="visible">
  <div class="metadata-parameter-container">
    <article>
      <div>
        <span class="cell">{{value.shortName}}</span>
        <span class="cell">{{value.longName}}</span>
        <span class="cell" v-if="value.uom">({{value.uom}})</span>
      </div>
      <div class="metadata-parameter-description" v-if="value.comment">
        <aeris-metadata-international-field :content="JSON.stringify(value.comment)" :lang="lang" no-label-float></aeris-metadata-international-field>
      </div>
    </article>
  </div>
</div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },
    visible: {
      type: Boolean,
      default: true
    },
    parameter: {
      type: String,
      default: null
    }
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);
  },

  updated: function() {
    this.ensureTheme()
  },

  destroyed: function() {
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Parameter - Creating");
    this.aerisThemeListener = this.handleTheme.bind(this)
    document.addEventListener('aerisTheme', this.aerisThemeListener);

  },


  computed: {

    value: function() {
      if (this.parameter == null) {
        return {};
      } else {
        return JSON.parse(this.parameter);
      }
    }

  },

  data() {
    return {
      theme: null,
      aerisThemeListener: null
    }
  },

  methods: {

    handleTheme: function(event) {
      this.theme = event.detail
      this.ensureTheme();
    },

    ensureTheme: function() {
      if (this.theme) {}
    }
  }
}
</script>

<style>
.aeris-metadata-parameter-host {
  display: block;
  font-family: 'Open Sans', sans-serif;
  transition: 0.6s
}

.metadata-parameter-container article {
  display: flex;
  flex-direction: column
}

.metadata-parameter-container .metadata-parameter-description {
  padding-left: 10px;
  border-left: 1px solid #bbb;
  font-size: 0.8em
}

span.cell {
  display: inline;
  white-space: nowrap;
  line-height: 1.5em
}

span.cell paper-input {
  margin-top: -8px
}
</style>
