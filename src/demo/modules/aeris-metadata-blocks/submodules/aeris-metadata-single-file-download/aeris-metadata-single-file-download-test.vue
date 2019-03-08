<template>
  <section>
    <aeris-metadata-single-file-download
      :metadata="metadata"
      :is-in-cart="isInCart(metadata.id)"
      :theme="theme"
      @addItemCart="addItemCart"
    ></aeris-metadata-single-file-download>

    <aeris-metadata-single-file-download
      :metadata="metadata1"
      :is-in-cart="isInCart(metadata1.id)"
      :theme="theme"
      language="fr"
      @addItemCart="addItemCart"
    ></aeris-metadata-single-file-download>

    <aeris-metadata-single-file-download></aeris-metadata-single-file-download>

    <aeris-notifier></aeris-notifier>
  </section>
</template>

<script>
import AerisNotifier from "aeris-commons-components-vjs/src/lib/modules/aeris-notification/components/aeris-notifier";
import AerisMetadataSingleFileDownload from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-single-file-download/components/aeris-metadata-single-file-download";
export default {
  name: "aeris-metadata-single-file-download-test",
  components: { AerisMetadataSingleFileDownload, AerisNotifier },
  data() {
    return {
      metadata: {
        resourceTitle: {
          en: "AERONET_CIMEL, SURF_FIXE",
          fr: "AERONET_CIMEL, SURF_FIXE"
        },
        identifier: "97bbabf2-1644-e71f-2f94-e4fe13c648ac",
        links: [
          {
            type: "OPENSEARCH_LINK",
            url: "https://services.sedoo.fr/oldcamp-rest/rest/data",
            name: "AERONET_CIMEL, SURF_FIXE, ESCOMPTE",
            description: null
          }
        ]
      },
      metadata1: {
        resourceTitle: {
          en: "AERONET_CIMEL, SURF_FIXE",
          fr: "AERONET_CIMEL, SURF_FIXE"
        },
        identifier: "97bbabf2-1644-e71f-2f94-e4fe13c648ad",
        links: [
          {
            type: "OPENSEARCH_LINK",
            url: "https://services.sedoo.fr/oldcamp-rest/rest/data",
            name: "AERONET_CIMEL, SURF_FIXE, ESCOMPTE",
            description: null
          }
        ]
      },
      cartList: [],
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  },

  computed: {
    isInCart() {
      return uuid => {
        return this.cartList.includes(uuid)
      };
    }
  },
  methods: {
    addItemCart(itemCart) {
      this.cartList.push(itemCart.id);
      console.log(itemCart);
    }
  }
};
</script>
