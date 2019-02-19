<i18n>
{
  "en": {
    "readingInformation": "How to read the file ?",
    "description": "Description",
    "temporalInterval": "Temporal interval"
  },
  "fr": {
    "readingInformation": "Comment lire le fichier ?",
    "description": "Description",
    "temporalInterval": "Intervalle temporel"
  }
}
</i18n>

<template>
  <section class="aeris-metadata-format-host">
    <article :class="{ showBody: deployed }" class="metadata-format-container">
      <header class="format-header">
        <span
        ><h5 class="format-name">{{ getFormat.name }}</h5>
          <span v-if="getFormat.version" class="metadata-format-header"> (v.{{ getFormat.version }})</span>
        </span>
        <i v-if="hasMore" class="fa fa-chevron-down" @click="deployed = !deployed" />
      </header>
      <article v-if="hasMore">
        <div class="metadata-format-description">
          <h5 v-if="getFormat.description">{{ $t("description") }}:</h5>
          <aeris-metadata-international-field
            :content="getFormat.description"
            :language="language"
            :convertlinks="true"
            label="Description"
            no-label-float
          ></aeris-metadata-international-field>
        </div>
        <div class="metadata-format-reading">
          <h5 v-if="getFormat.readingInformation">{{ $t("readingInformation") }}</h5>
          <p>
            <aeris-metadata-international-field
              :content="getFormat.readingInformation"
              :language="language"
              :convertlinks="true"
              no-label-float
            ></aeris-metadata-international-field>
          </p>
        </div>
        <div v-if="getFormat.readingInformation" class="metadata-format-temporal">
          <h5 v-if="getFormat.temporalInterval">{{ $t("temporalInterval") }}:</h5>
          <aeris-metadata-temporal-extent
            :begin="getFormat.readingInformation.beginDate"
            :end="getFormat.readingInformation.endDate"
            :comment="getFormat.readingInformation.comment"
            :language="language"
            no-delete
          ></aeris-metadata-temporal-extent>
        </div>
      </article>
    </article>
  </section>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";
import AerisMetadataTemporalExtent from "../../../../aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/components/aeris-metadata-temporal-extent";

export default {
  name: "aeris-metadata-format",

  components: { AerisMetadataInternationalField, AerisMetadataTemporalExtent },

  props: {
    language: {
      type: String,
      default: "en"
    },
    format: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      deployed: false
    };
  },

  computed: {
    getFormat() {
      let format = {};
      if (this.format !== null) {
        format = this.format;
      }

      return format;
    },

    hasMore() {
      return this.getFormat.description || this.getFormat.readingInformation || this.getFormat.temporalInterval
        ? true
        : false;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  }
};
</script>

<style scoped>
.aeris-metadata-format-host {
  display: block;
  margin: 10px 0;
  transition: 0.6s;
}

.aeris-metadata-international-field {
  width: 100%;
}

.metadata-format-container {
  overflow: hidden;
}

.metadata-format-container header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap row;
  padding: 10px;
}

.metadata-format-container header .format-name {
  display: inline;
  margin: 0;
  color: #475053;
}

.metadata-format-container header span {
  color: #475053;
}

.metadata-format-container header i {
  cursor: pointer;
  color: #999;
}

.metadata-format-container header i:hover {
  opacity: 0.6;
}

.metadata-format-container article {
  display: none;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.metadata-format-container article div h5 {
  margin: 5px 0;
  color: #4765a0;
}

.metadata-format-container article div p {
  margin: 0;
}

.metadata-format-container.showBody article {
  display: block;
}

.metadata-format-container.showBody .fa-chevron-down {
  transform: rotate(180deg);
}

.metadata-format-container .fa-chevron-down {
  transition: 0.3s;
}
</style>
