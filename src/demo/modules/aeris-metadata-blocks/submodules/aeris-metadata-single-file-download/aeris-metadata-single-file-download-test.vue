<template>
  <section>
    <aeris-metadata-single-file-download
      :metadata="metadata"
      :is-in-cart="isInCart"
      :theme="theme"
      @notification="updateNotification"
      @addItemCart="addItemCart"
    ></aeris-metadata-single-file-download>

    <aeris-metadata-single-file-download
      :metadata="metadata"
      :is-in-cart="isInCart"
      :theme="theme"
      language="fr"
      @notification="updateNotification"
      @addItemCart="addItemCart"
    ></aeris-metadata-single-file-download>

    <aeris-metadata-single-file-download></aeris-metadata-single-file-download>

    <aeris-notifier :delete-notif-uuid="uuid" :new-notification="notification"></aeris-notifier>
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
      notification: null,
      uuid: null,
      isInCart: false,
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  },

  methods: {
    updateNotification(notification) {
      if (notification.message) {
        this.notification = notification;
        this.uuid = null;
      } else {
        this.notification = null;
        this.uuid = notification.uuid;
      }
    },
    addItemCart(itemCart) {
      console.log(itemCart);
      this.isInCart = itemCart.collectionId ? true : false;
    }
  }
};
</script>
