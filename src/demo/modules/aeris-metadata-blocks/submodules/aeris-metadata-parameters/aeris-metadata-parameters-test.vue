<template>
  <section><aeris-metadata-parameters :parameters="parameters"></aeris-metadata-parameters></section>
</template>

<script>
import AerisMetadataParameters from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-parameters/components/aeris-metadata-parameters";
export default {
  name: "aeris-metadata-parameters-test",
  components: { AerisMetadataParameters },
  data() {
    return {
      parameters: [
        {
          shortName: "O3",
          longName: "mole_fraction_of_ozone_in_air",
          uom: "ppb",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_ozone_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.OXYGEN_COMPOUNDS.OZONE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "OXYGEN_COMPOUNDS",
              name: {
                en: "Oxygen compounds",
                fr: "Composés oxygénés"
              },
              thesaurusVariable: {
                code: "OZONE",
                name: {
                  en: "Ozone",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "CO",
          longName: "mole_fraction_of_carbon_monoxide_in_air",
          uom: "ppb",
          comment: {
            en: "Since 2001-12-01",
            fr: "Depuis 2001-12-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_carbon_monoxide_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.CARBON_AND_HYDROCARBON_COMPOUNDS.CARBON_MONOXIDE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "CARBON_AND_HYDROCARBON_COMPOUNDS",
              name: {
                en: "Carbon and hydrocarbon compounds",
                fr: "Composés carbonés"
              },
              thesaurusVariable: {
                code: "CARBON_MONOXIDE",
                name: {
                  en: "Carbon monoxide",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        }
      ]
    };
  }
};
</script>
