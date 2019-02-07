<template>
  <section><aeris-metadata-data-links :links="links" :theme="theme"></aeris-metadata-data-links></section>
</template>

<script>
import AerisMetadataDataLinks from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-data-links/components/aeris-metadata-data-links";

export default {
  name: "aeris-metadata-data-links-test",

  components: { AerisMetadataDataLinks },

  data() {
    return {
      links: [
        {
          type: "INFORMATION_LINK",
          url: "http://www.iagos.org",
          name: "",
          description: {
            en: "IAGOS central website",
            fr: "Site web IAGOS"
          }
        },
        {
          type: "INFORMATION_LINK",
          url: "http://www.iagos-data.fr",
          name: "",
          description: {
            en: "IAGOS Data Portal",
            fr: "Portail de Données IAGOS"
          }
        },
        {
          type: "HTTP_DOWNLOAD_LINK",
          url: "http://baobab.sedoo.fr//Data-Download/?datsId=1716&project_name=BAOBAB",
          name: "",
          description: {
            en: "Dataset as provided by the Principal Investigator",
            fr: "Dataset as provided by the Principal Investigator"
          }
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

<style scoped></style>
