<template>
<div data-aeris-metadata-layout class="aeris-metadata-block" v-if="isCurrentTab">
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

  destroyed: function() {
    document.removeEventListener('aerisDataBlockNavGo', this.aerisDataBlockNavGoListener);
    this.aerisDataBlockNavGoListener = null;
  },

  created: function() {
    this.aerisDataBlockNavGoListener = this.handleNavGo.bind(this)
    document.addEventListener('aerisDataBlockNavGo', this.aerisDataBlockNavGoListener);
  },

  data() {
    return {
      aerisDataBlockNavGoListener: null,
      isCurrentTab: false
    }
  },

  methods: {

    handleNavGo(e) {
      this.isCurrentTab = e.detail.current == this.type;
    }
  }
}
</script>
