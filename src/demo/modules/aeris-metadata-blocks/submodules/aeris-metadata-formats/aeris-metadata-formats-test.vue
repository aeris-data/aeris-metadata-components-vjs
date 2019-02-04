<template>
  <section><aeris-metadata-formats :formats="formats"></aeris-metadata-formats></section>
</template>

<script>
import AerisMetadataFormats from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-formats/components/aeris-metadata-formats";
export default {
  name: "aeris-metadata-formats-test",
  components: { AerisMetadataFormats },
  data() {
    return {
      formats: [
        {
          name: "NetCDF",
          version: "4",
          description: { en: "description in english" },
          readingInformation: { en: "reading information in english" },
          temporalInterval: null
        }
      ]
    };
  }
};
</script>
