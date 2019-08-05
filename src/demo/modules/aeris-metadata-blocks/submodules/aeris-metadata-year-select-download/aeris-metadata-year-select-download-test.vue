<template>
  <section>
    <aeris-metadata-year-select-download
      :metadata-identifier="metadata.identifier"
      :metadata-title="metadata.resourceTitle"
      :url="metadata.links[0].url"
      :years-in-cart="yearsInCart"
      :years="years"
      :theme="theme"
      @addItemCart="addItemCart"
      @removeItemCart="removeItemCart"
    ></aeris-metadata-year-select-download>
  </section>
</template>

<script>
import AerisMetadataYearSelectDownload from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/components/aeris-metadata-year-select-download";
import moment from "moment";

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
            url: "https://services.sedoo.fr/gmos-datacenter-rest/rest/data",
            name: "Open search link",
            description: null
          }
        ],
        dataLevel: "L2"
      },
      years: [],
      yearsInCart: [],
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      },
      service: ""
    };
  },
  created() {
    this.setYearsDownloadInput(this.metadata);
  },
  methods: {
    addItemCart(itemCart) {
      console.log("addItemCart");
      console.log(itemCart);
    },
    removeItemCart(itemCart) {
      console.log("removeItemCart");
      console.log(itemCart);
      console.log(this.years);
    },
    setYearsDownloadInput(metadata) {
      this.axios.get(`${metadata.links[0].url}/request?collection=${metadata.identifier}`).then(response => {
        this.years = response.data.entries.map(entry => ({
          year: moment(entry.date).year(),
          totalSize: entry.totalSize,
          fileNumber: entry.fileNumber
        }));
      });
    }
  }
};
</script>
