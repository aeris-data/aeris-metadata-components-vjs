<template>
  <section>
    <aeris-metadata-instruments :instruments="instruments" :theme="theme"></aeris-metadata-instruments>
    <aeris-metadata-instruments :instruments="instruments" :theme="theme" language="fr"></aeris-metadata-instruments>
  </section>
</template>

<script>
import AerisMetadataInstruments from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-instruments/components/aeris-metadata-instruments";
export default {
  name: "aeris-metadata-parameters-test",
  components: { AerisMetadataInstruments },
  data() {
    return {
      instruments: [
        {
          thesaurusConcat: "CHEMICAL_METERS_ANALYZERS.NULL.AETHALOMETER",
          thesaurusClass: {
            code: "CHEMICAL_METERS_ANALYZERS",
            name: {
              en: "Chemical Meters/Analyzers",
              fr: "Analyseurs chimiques"
            },
            thesaurusCode: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusName: {
                code: "AETHALOMETER",
                name: {
                  en: "Aethalometer",
                  fr: "Aethalomètre"
                },
                longName: {
                  en: "",
                  fr: ""
                }
              }
            }
          },
          manufacturer: "MAGEE Scientific",
          model: "AE31",
          serialNumber: "",
          calibration: "",
          resolution: null,
          displayName: "",
          description: null
        }
      ],
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  }
};
</script>
