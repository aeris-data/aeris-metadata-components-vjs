<template>
  <div>
    <aeris-metadata-publications
      :publications="publications"
      :theme="theme"
      language="fr"
    ></aeris-metadata-publications>
    <aeris-metadata-publications :publications="publications"></aeris-metadata-publications>
    <aeris-metadata-publications :publications="[]"></aeris-metadata-publications>
  </div>
</template>

<script>
import AerisMetadataPublications from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-publications/components/aeris-metadata-publications.vue";
export default {
  name: "aeris-metadata-publications-test",
  components: { AerisMetadataPublications },
  data() {
    return {
      publications: [
        {
          title: "Source attribution using FLEXPART and carbon monoxide emission inventories: SOFT-IO version 1.0",
          description: "",
          authors: [
            "Sauvage, B., Fontaine, A., Eckhardt, S., Auby, A., Boulanger, D., Petetin, H., Paugam, R., Athier, G., Cousin, J.-M., Darras, S., Nédélec, P., Stohl, A., Turquety, S., Cammas, J.-P., and Thouret, V"
          ],
          journalName: "Atmos. Chem. Phys. Discuss.",
          journalSection: "in review",
          publicationYear: "2017",
          doi: "10.5194/acp-2017-653"
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
