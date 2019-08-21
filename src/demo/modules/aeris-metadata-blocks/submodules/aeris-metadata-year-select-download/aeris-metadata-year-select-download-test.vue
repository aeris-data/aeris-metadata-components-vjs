<template>
  <section>
    <aeris-metadata-year-select-download
      :metadata="metadata"
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
            url: "https://services.sedoo.fr/gmos-datacenter-rest/rest/data/",
            name: "Open search link",
            description: null
          }
        ],
        dataLevel: "L2"
      },
      years: [],
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      },
      service: ""
    };
  },
  created() {
    this.getMetadataDownloadEntries(this.metadata);
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
    getMetadataDownloadEntries(metadata) {
      let links = metadata ? metadata.links : "";
      if (links && metadata.identifier && metadata.resourceTitle && metadata.dataLevel) {
        this.visible = false;
        this.identifier = metadata.identifier;
        this.collectionName = metadata.resourceTitle;

        if (metadata.dataLevel.toLowerCase() == "l0") {
          this.isL0 = true;
          return;
        } else {
          this.isL0 = false;
        }

        for (let i = 0; i < links.length; i++) {
          let link = links[i];
          if (link.type == "OPENSEARCH_LINK") {
            this.service = link.url;
            break;
          }
        }
        let url = null;
        if (this.service.endsWith("/")) {
          this.service = this.service.substring(0, this.service.length - 1);
        }
        url = this.service + "/request?collection=" + this.identifier;
        var currentComponent = this;
        this.$http
          .get(url)
          .then(response => {
            currentComponent.handleSuccess(response);
          })
          .catch(() => {
            this.years = [];
          });
      }
    },
    handleSuccess(response) {
      let entries = response.data.entries;
      this.years = [];
      if (entries) {
        for (let i = 0; i < entries.length; i++) {
          let date = moment(entries[i].date);
          let item = {};
          item.year = date.year();
          item.selected = false;
          item.totalSize = entries[i].totalSize;
          item.fileNumber = entries[i].fileNumber;
          this.years.push(item);
        }
      }
    }
  }
};
</script>
