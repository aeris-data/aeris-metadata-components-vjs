<template>
  <section>
    <aeris-metadata-international-field :content="content1"></aeris-metadata-international-field>
    <aeris-metadata-international-field :content="content2"></aeris-metadata-international-field>
    <aeris-metadata-international-field :content="content3"></aeris-metadata-international-field>
    <aeris-metadata-international-field :content="content4"></aeris-metadata-international-field>
  </section>
</template>

<script>
import AerisMetadataInternationalField from "../../../lib/modules/aeris-metadata-international-field/components/aeris-metadata-international-field";
export default {
  name: "aeris-metadata-international-field-test",
  components: { AerisMetadataInternationalField },
  data() {
    return {
      content1: {
        en: "Continuous measurements of atmospheric mercury at Dumont D’Urville",
        fr: "Mesures continues de mercure atmosphérique à Dumont D’Urville"
      },
      content2: {
        DEFAULT_VALUE_KEY: "Default key : Mesures continues de mercure atmosphérique à Dumont D’Urville"
      },
      content3: {
        DEFAULT_VALUE_KEY: "https://www.aeris-data.fr/test1/test2/test3/test4/test5/test6"
      },
      content4: null
    };
  }
};
</script>

<style scoped></style>
