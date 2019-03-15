<template>
  <section>
    <aeris-metadata-year-select-download
      :metadata="metadata"
      :selected-item-cart="selectedItemCart"
      :theme="theme"
      @addItemCart="addItemCart"
      @removeItemCart="removeItemCart"
    ></aeris-metadata-year-select-download>
  </section>
</template>

<script>
import AerisMetadataYearSelectDownload from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/components/aeris-metadata-year-select-download";
export default {
  name: "aeris-metadata-year-select-download-test",
  components: { AerisMetadataYearSelectDownload },
  data() {
    return {
      metadata: {
        resourceTitle: {
          en: "Continuous measurements of atmospheric mercury at Amsterdam Island",
          fr: "Continuous measurements of atmospheric mercury at Amsterdam Island"
        },
        identifier: "bcb74d91-d6ea-4f83-a897-f98f8edc044c",
        links: [
          {
            type: "OPENSEARCH_LINK",
            url: "https://services.sedoo.fr/gmos-datacenter-rest/rest/data/",
            name: "Open search link",
            description: null
          }
        ],
        dataLevel: "L2"
      },
      selectedItemCart: {
        identifier: "bcb74d91-d6ea-4f83-a897-f98f8edc044c",
        collectionName: "collection name",
        url: "https://services.sedoo.fr/gmos-datacenter-rest/rest/data/",
        fileNumber: 2,
        fileSize: 2284700,
        items: {
          type: "yearfilter",
          elements: [2012, 2013, 2016]
        }
      },
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  },
  created() {
    setTimeout(() => {
      this.selectedItemCart = null;
    }, 4000);
  },
  methods: {
    addItemCart(itemCart) {
      console.log("addItemCart");
      console.log(itemCart);
    },
    removeItemCart(itemCart) {
      console.log("removeItemCart");
      console.log(itemCart);
    }
  }
};
</script>
