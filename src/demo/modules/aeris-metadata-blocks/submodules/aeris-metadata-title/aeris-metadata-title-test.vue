<template>
  <div>
        <aeris-metadata-title language="fr" :resourceTitle="resourceTitle"></aeris-metadata-title>
                <aeris-metadata-title language="en" :resourceTitle="resourceTitle"></aeris-metadata-title>

        </div>
</template>

<script>
import AerisMetadataTitle from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-title/components/aeris-metadata-title.vue";
export default {
  name: "aeris-metadata-title-test",
  components: { AerisMetadataTitle },
  data() {
    return {
      resourceTitle : {
    en : "En English",
    fr : "En Français"
  },
    };
  }
};
</script>