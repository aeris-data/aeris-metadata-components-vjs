<template>
  <section>
    <aeris-metadata-information :items="items"></aeris-metadata-information>
    <aeris-metadata-information language="fr" :items="{}"></aeris-metadata-information>
    <aeris-metadata-information></aeris-metadata-information>
  </section>
</template>

<script>
import AerisMetadataInformation from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-information/components/aeris-metadata-information";

export default {
  name: "aeris-metadata-information-test",
  components: { AerisMetadataInformation },
  data() {
    return {
      items: {
        uuid: "4d3be8dd-c41a-4f35-8ba6-722cf12e2de3",
        lastModification: {
          value: "2018-09-06T18:00:17"
        },
        aerisDataCenter: "SEDOO",
        dataLevel: "L4"
      }
    };
  }
};
</script>

<style scoped></style>