<template>
  <div>
    Cart: {{ cartList }}
    <aeris-metadata-tree-view-download
      :metadata="metadata"
      :is-in-cart="isInCart(metadata.identifier)"
      :files="files"
      :theme="theme"
      @addItemCart="addItemCart"
      @removeItemCart="removeItemCart"
    >
    </aeris-metadata-tree-view-download>
  </div>
</template>

<script>
import AerisMetadataTreeViewDownload from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-tree-view-download/components/aeris-metadata-tree-view-download";

export default {
  name: "aeris-metadata-tree-view-download-test",

  components: { AerisMetadataTreeViewDownload },

  data() {
    return {
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      },
      cartList: [],
      metadata: {
        resourceTitle: {
          en: "Continuous measurements of atmospheric mercury at Amsterdam Island",
          fr: "Continuous measurements of atmospheric mercury at Amsterdam Island"
        },
        identifier: "38d09eb8-25b2-4561-b0d4-b49f36e056cd",
        links: [
          {
            type: "OPENSEARCH_LINK",
            url: "http://localhost:8080/datacenter-rest/rest/data/chamberexperiments",
            name: "AERONET_CIMEL, SURF_FIXE, ESCOMPTE",
            description: null
          }
        ]
      },
      service: "",
      files: [
        {
          id: "example.edf",
          type: "FILE",
          name: "example.edf",
          size: 15,
          path: "example.edf"
        },
        {
          id: "2010",
          type: "FOLDER",
          name: "2010",
          path: "2010",
          children: [
            {
              type: "FILE",
              id: "file1.txt",
              path: "2010/file1.txt",
              size: 1555,
              name: "file1.txt"
            },
            {
              type: "FILE",
              id: "file2.txt",
              name: "file2.txt",
              size: 2045,
              path: "2010/file2.txt"
            },
            {
              type: "FOLDER",
              id: "May",
              name: "May",
              path: "2010/May",
              children: [
                {
                  type: "FILE",
                  id: "file3",
                  name: "file3",
                  size: 3681,
                  path: "2010/May/file3"
                },
                {
                  type: "FILE",
                  id: "file4",
                  name: "file4",
                  size: 98745,
                  path: "2010/May/file4"
                }
              ]
            }
          ]
        }
      ]
    };
  },

  methods: {
    isInCart(identifier) {
      return this.cartList.includes(i => i.metadataIdentifier === identifier);
    },
    addItemCart(item) {
      const index = this.cartList.findIndex(i => i.metadataIdentifier === item.metadataIdentifier);
      if (index != -1) {
        this.cartList.splice(index, 1);
        this.cartList.push(item);
      } else {
        this.cartList.push(item);
      }
    },
    removeItemCart(item) {
      const index = this.cartList.findIndex(i => i.metadataIdentifier === item.metadataIdentifier);
      this.cartList.splice(index, 1);
    }
  }
};
</script>

<style scoped></style>
