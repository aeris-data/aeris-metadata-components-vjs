<template>
  <div>
    <aeris-metadata-platforms :platforms="platforms" language="fr"></aeris-metadata-platforms>
    <aeris-metadata-platforms :platforms="platforms"></aeris-metadata-platforms>
    <aeris-metadata-platforms :platforms="[]"></aeris-metadata-platforms>
  </div>
</template>

<script>
import AerisMetadataPlatforms from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-platforms/components/aeris-metadata-platforms.vue";
export default {
  name: "aeris-metadata-platforms-test",
  components: { AerisMetadataPlatforms },
  data() {
    return {
      platforms: [
        {
          title: "Amsterdam Island site",
          thesaurusLabel: "Plateformes Sol",
          description:
            "GMOS-Fr data must not be redistributed to third parties, but we encourage dissemination through the GMOS-Fr data portal to follow and accept the data policy, and ensure use of last version of data."
        }
      ]
    };
  }
};
</script>
