<template>
  <div>
    <aeris-metadata-title :resource-title="resourceTitle" language="fr"></aeris-metadata-title>
    <aeris-metadata-title :resource-title="resourceTitle" language="en"></aeris-metadata-title>
  </div>
</template>

<script>
import AerisMetadataTitle from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-title/components/aeris-metadata-title.vue";
export default {
  name: "aeris-metadata-title-test",
  components: { AerisMetadataTitle },
  data() {
    return {
      resourceTitle: {
        en: "In english",
        fr: "En français"
      }
    };
  }
};
</script>
