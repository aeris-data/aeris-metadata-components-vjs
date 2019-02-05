<template>
  <section>
    <aeris-metadata-temporal-extents :temporal-extents="temporalExtents"></aeris-metadata-temporal-extents>
  </section>
</template>

<script>
import AerisMetadataTemporalExtents from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/components/aeris-metadata-temporal-extents";
export default {
  name: "aeris-metadata-temporal-extents-test",
  components: { AerisMetadataTemporalExtents },
  data() {
    return {
      temporalExtents: [
        {
          beginDate: "1850-01-14",
          endDate: "2000-12-01",
          comment: {
            en: "Decadal"
          }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
