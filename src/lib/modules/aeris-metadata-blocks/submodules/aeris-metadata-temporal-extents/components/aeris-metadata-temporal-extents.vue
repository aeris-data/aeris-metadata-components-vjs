<i18n>
{
  "en": {
    "temporalExtents": "Temporal extents"
  },
  "fr": {
    "temporalExtents": "Extensions temporelles"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('temporalExtents')" icon="fa fa-clock-o">
    <div v-for="temporalExtent in getTemporalExtents" :key="temporalExtent.beginDate">
      <aeris-metadata-temporal-extent
        v-if="temporalExtent.comment"
        :begin="temporalExtent.beginDate"
        :end="temporalExtent.endDate"
        :comment="temporalExtent.comment"
        :language="language"
      ></aeris-metadata-temporal-extent>
      <aeris-metadata-temporal-extent
        v-else
        :begin="temporalExtent.beginDate"
        :end="temporalExtent.endDate"
        :language="language"
      ></aeris-metadata-temporal-extent>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import moment from "moment";
import AerisMetadataTemporalExtent from "./aeris-metadata-temporal-extent";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

export default {
  name: "aeris-metadata-temporal-extents",

  components: { AerisMetadataTemporalExtent, AerisMetadataLayout },

  props: {
    language: {
      type: String,
      default: "en"
    },
    temporalExtents: {
      type: Array,
      default: null
    }
  },

  computed: {
    isVisible() {
      return this.temporalExtents !== null && this.temporalExtents.length > 0;
    },
    getTemporalExtents() {
      let temporalExtents = [];
      if (this.temporalExtents !== null && this.temporalExtents.length > 0) {
        temporalExtents = this.temporalExtents;
        temporalExtents.sort(this.sort);
      }

      return temporalExtents;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.language;
  },

  methods: {
    sort(a, b) {
      var aMoment = moment(a.beginDate, "YYYY-MM-DD");
      var bMoment = moment(b.beginDate, "YYYY-MM-DD");
      if (aMoment === bMoment) return 0;
      return aMoment.isBefore(bMoment) ? 1 : -1;
    }
  }
};
</script>
