<template>
<div data-aeris-metadata-layout data-template="metadata-block" v-if="isCurrentTab">
  <header>
    <h4><i :class="icon"></i>{{title}}</h4>
    <div class="aeris-icon-group"></div>
  </header>
  <main>
    <slot></slot>
  </main>
</div>
</template>

<script>
export default {

  name: 'aeris-metadata-layout',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    order: {
      type: Number,
      required: false
    },
    icon: {
      type: String,
      required: true
    }
  },

  watch: {
    isVisible() {
      document.dispatchEvent(new CustomEvent('aerisDataBlockNavInit', {
        detail: {
          type: this.type,
          title: this.title,
          order: this.order
        }
      }));
    }
  },

  mounted: function() {
    var event = new CustomEvent('aerisThemeRequest', {});
    document.dispatchEvent(event);

  },

  destroyed: function() {
    document.removeEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisThemeListener = null;
    document.removeEventListener('aerisDataBlockNavGo', this.aerisDataBlockNavGoListener);
    this.aerisDataBlockNavGoListener = null;
  },

  created: function() {
    this.aerisThemeListener = this.handleTheme.bind(this);
    document.addEventListener('aerisTheme', this.aerisThemeListener);
    this.aerisDataBlockNavGoListener = this.handleNavGo.bind(this)
    document.addEventListener('aerisDataBlockNavGo', this.aerisDataBlockNavGoListener);
  },

  updated: function() {
    this.ensureTheme();
  },

  data() {
    return {
      theme: null,
      aerisThemeListener: null,
      aerisDataBlockNavGoListener: null,
      isCurrentTab: false
    }
  },

  methods: {

    handleTheme: function(event) {
      this.theme = event.detail;
      this.ensureTheme();
    },

    ensureTheme: function() {
      if (this.$el && this.$el.querySelector("header h4 i")) {
        this.$el.querySelector("header h4 i").style.color = this.theme.primary;
      }
    },

    handleNavGo(e) {
      this.isCurrentTab = e.detail.current == this.type;
    }
  }
}
</script>

<style>
[data-aeris-metadata-layout] p {
  max-width: 42em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.6em;
}
</style>
