<template>
  <div v-if="visible" class="aeris-metadata-internatinal-field-host">
    <div class="intl-field-display">
      <span v-if="html" v-html="text" />
      <span v-else>
        <span v-if="isLink">
          <a :href="text" target="_blank">{{ _truncate(text) }}</a>
        </span>
        <span v-else>{{ text }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-international-field",

  props: {
    visible: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: "en"
    },
    html: {
      type: Boolean,
      default: false
    },
    convertlinks: {
      type: Boolean,
      default: true
    },
    content: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },

  computed: {
    isLink: function() {
      return this.text.startsWith("http") && this.convertlinks ? true : false;
    },

    text: function() {
      if (!this.content) {
        return "";
      }
      if (this.content == "null") {
        return "";
      }
      if (!this.lang) {
        return this.content;
      }

      for (var key in this.content) {
        if (key === "DEFAULT_VALUE_KEY") {
          return this.content["DEFAULT_VALUE_KEY"];
        } else if (key.length > 2) {
          newKey = key.substr(0, 2);
          this.content[newKey] = this.content[key];
          delete this.content[key];
        }
      }

      if (this.content[this.lang]) {
        return this.content[this.lang];
      }
      return "";
    }
  },

  methods: {
    _truncate: function(str) {
      return str.length > 50 ? str.substr(0, 47) + "..." : str;
    }
  }
};
</script>

<style>
aeris-metadata-internatinal-field-host {
  display: block;
}

.intl-field-display a {
  color: #3498db;
}

aeris-metadata-international-field blockquote {
  padding-left: 10px;
}
</style>
