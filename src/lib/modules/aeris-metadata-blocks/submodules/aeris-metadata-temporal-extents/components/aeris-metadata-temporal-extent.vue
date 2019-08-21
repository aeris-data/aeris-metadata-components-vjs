<template>
  <section :style="getTheme" class="aeris-metadata-temporal-extent-host">
    <article class="metadata-temporal-container">
      <section class="tempExt">
        <article class="metadata-temporal">
          <div>
            <span>{{ formatedBegin }}</span> <i class="fas fa-long-arrow-alt-right"></i> <span>{{ formatedEnd }}</span>
          </div>
          <div v-if="comment" class="metadata-temporal-description">
            <aeris-metadata-international-field
              :content="comment"
              :language="language"
              no-label-float
            ></aeris-metadata-international-field>
          </div>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
import moment from "moment";
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";

export default {
  name: "aeris-metadata-temporal-extent",

  components: { AerisMetadataInternationalField },

  props: {
    language: {
      type: String,
      default: "en"
    },
    begin: {
      type: String,
      default: ""
    },
    end: {
      type: String,
      default: ""
    },
    comment: {
      type: Object,
      default: null
    },
    theme: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    getTheme() {
      return this.theme ? { "--primaryColor": this.theme.primaryColor } : "";
    },

    formatedBegin() {
      return this.formatDate(this.begin);
    },

    formatedEnd() {
      return this.formatDate(this.end);
    }
  },

  methods: {
    formatDate(date) {
      return date ? (date.toLowerCase() === "now" ? moment().format("LLL") : moment(date).format("LLL")) : "";
    }
  }
};
</script>

<style scoped>
.aeris-metadata-temporal-extent-host {
  display: block;
  transition: 0.6s;
}

.metadata-temporal-container {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
  border-left: 1px solid;
}

.metadata-temporal-container span {
  display: inline-block;
  position: relative;
  height: 20px;
  line-height: 20px;
}

.metadata-temporal-container i {
  margin: 0 2px;
  color: var(--primaryColor, #4765a0);
}

.metadata-temporal-container paper-input {
  display: inline-block;
}

.metadata-temporal-container .metadata-temporal-description {
  padding-left: 10px;
  border-left: 1px solid #bbb;
  font-size: 0.8em;
}

.tempExt {
  width: 100%;
  display: flex;
  align-items: center;
  transition: 0.6s;
}

.metadata-icon-btn {
  margin: 0 5px;
  cursor: pointer;
}

.metadata-icon-btn:hover {
  opacity: 0.6;
}
</style>
