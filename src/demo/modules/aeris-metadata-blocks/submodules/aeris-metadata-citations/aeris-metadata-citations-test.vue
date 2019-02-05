<template>
  <div>
    <aeris-metadata-citations :identifiers="identifiers" language="fr"></aeris-metadata-citations>
    <aeris-metadata-citations :identifiers="identifiers"></aeris-metadata-citations>
    <aeris-metadata-citations :identifiers="[]"></aeris-metadata-citations>
  </div>
</template>

<script>
import AerisMetadataCitations from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-citations/components/aeris-metadata-citations.vue";
export default {
  name: "aeris-metadata-citations-test",
  components: { AerisMetadataCitations },
  data() {
    return {
      identifiers: [
        {
          code: "10.25326/08",
          codeSpace: "http://dx.doi.org/"
        },
        {
          code: "10.25326/3",
          codeSpace: "http://dx.doi.org/"
        }
      ]
    };
  }
};
</script>
