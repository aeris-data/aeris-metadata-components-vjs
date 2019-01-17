<template>
  <section v-if="visible" class="aeris-metadata-internatinal-field-host">
    <article class="intl-field-display">
      <span v-if="html" v-html="getContent" />
      <span v-else>
        <span v-if="isLink">
          <a :href="getContent" target="_blank">{{ _truncate(getContent) }}</a>
        </span>
        <span v-else>{{ getContent }}</span>
      </span>
    </article>
  </section>
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

  computed: {
    isLink() {
      return this.getContent.startsWith("http") && this.convertlinks ? true : false;
    },

    getContent() {
      let contentTmp = this.content;
      if (contentTmp) {
        for (let key in contentTmp) {
          if (key.localeCompare("DEFAULT_VALUE_KEY") !== 0 && key.length > 2) {
            let newKey = key.substr(0, 2);
            contentTmp[newKey] = contentTmp[key];
            delete contentTmp[key];
          }
        }

        if (contentTmp[this.lang]) {
          return contentTmp[this.lang];
        } else if (contentTmp["DEFAULT_VALUE_KEY"]) {
          return contentTmp["DEFAULT_VALUE_KEY"];
        }
      }
      return "";
    }
  },

  methods: {
    _truncate(str) {
      return str.length > 50 ? str.substr(0, 47) + "..." : str;
    }
  }
};
</script>

<style scoped>
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
