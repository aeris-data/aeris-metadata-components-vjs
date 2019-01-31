<template>
  <section><aeris-metadata-ui-table :table="table"></aeris-metadata-ui-table></section>
</template>

<script>
import AerisMetadataUiTable from "../../../../../lib/modules/aeris-metadata-ui/submodules/aeris-metadata-ui-table/components/aeris-metadata-ui-table";
export default {
  name: "aeris-metadata-ui-table-test",
  components: { AerisMetadataUiTable },
  data() {
    return {
      table: {
        header: ["Name", "Cas number", "InChi", "Smiles"],
        content: [
          [
            {
              value: "",
              type: "text"
            },
            {
              value: "\t98-83-9",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "img"
            }
          ],
          [
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "\tc(C(=C)C)(cccc1)c1",
              type: "img"
            }
          ],
          [
            {
              value: "alpha-methylstyrene",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "img"
            }
          ],
          [
            {
              value: "ozone",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "text"
            },
            {
              value: "",
              type: "img"
            }
          ]
        ]
      }
    };
  }
};
</script>

<style scoped></style>
