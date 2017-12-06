<template>
<div data-aeris-metadata-layout data-template="metadata-block">
  <header>
    <h3><i :class="icon"></i>{{title}}</h3>
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
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
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
    console.log("Eurochamp derivatized experiment - Creating");
    this.aerisThemeListener = this.handleTheme.bind(this);
    document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  updated: function() {
    this.ensureTheme();
  },

  data() {
    return {
      theme: null,
      aerisThemeListener: null,
      view: null
    }
  },

  methods: {

    handleTheme: function(event) {
      this.theme = event.detail;
      this.ensureTheme();
    },

    ensureTheme: function() {
      if (this.$el) {
        this.$el.querySelector("[data-aeris-metadata-layout] header h3 i") ? this.$el.querySelector("[data-aeris-metadata-layout] header h3 i").style.color = this.theme.primary : null;
        this.$el.querySelectorAll("[data-aeris-metadata-layout] h5").forEach(el => el.style.color = this.theme.primary);
        this.$el.querySelectorAll("[data-aeris-metadata-layout] h6").forEach(el => el.style.color = this.theme.primary);
      }
    }

  }
}
</script>

<style>
[data-aeris-metadata-layout] {
  display: flex;
  flex-direction: column;
  border: none;
  background: #FAFAFA;
  padding: 24px;
}

[data-aeris-metadata-layout] header h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}

[data-aeris-metadata-layout] header i {
  margin-right: 12px;
}

[data-aeris-metadata-layout] main {
  padding: 16px 0 0 0px;
}

[data-aeris-metadata-layout] h5 {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

[data-aeris-metadata-layout] h6 {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 15px 0;
}

[data-aeris-metadata-layout] article {
  margin-left: 10px;
}
</style>
