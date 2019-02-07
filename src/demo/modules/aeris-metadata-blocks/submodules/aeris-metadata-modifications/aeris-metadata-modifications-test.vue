<template>
  <section><aeris-metadata-modifications :modifications="modifications"></aeris-metadata-modifications></section>
</template>

<script>
import AerisMetadataModifications from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-modifications/components/aeris-metadata-modifications";
export default {
  name: "aeris-metadata-modifications-test",
  components: { AerisMetadataModifications },
  data() {
    return {
      modifications: [
        {
          author: "0000-0002-1301-8010",
          date: "2018-10-26T16:25:21"
        }
      ]
    };
  }
};
</script>
