<template>
  <div>
    <aeris-metadata-services
      :identifier="id"
      lang="fr"
      service="https://sedoo.aeris-data.fr/catalogue/rest/metadatarecette/id"
      @metadata="updateMetadata"
      @notification="updateNotification"
    >
      <div v-if="metadata !== null">
        <aeris-metadata-description
          :resource-abstract="metadata.resourceAbstract"
          markdown=""
        ></aeris-metadata-description>
        <aeris-metadata-modifications :modifications="metadata.modifications"></aeris-metadata-modifications>
        <aeris-metadata-datapolicy
          :distribution-information="metadata.distributionInformation"
        ></aeris-metadata-datapolicy>
        <aeris-metadata-contacts :contacts="metadata.contacts"></aeris-metadata-contacts>
        <aeris-metadata-temporal-extents :temporal-extents="metadata.temporalExtents"></aeris-metadata-temporal-extents>
        <aeris-metadata-information-links :links="metadata.links"></aeris-metadata-information-links>
        <aeris-metadata-data-links :links="metadata.links"></aeris-metadata-data-links>
        <aeris-metadata-formats :formats="metadata.formats"></aeris-metadata-formats>
      </div>
      <aeris-notifier :delete-notif-uuid="uuid" :new-notification="notification"></aeris-notifier>
    </aeris-metadata-services>
  </div>
</template>

<script>
import AerisMetadataServices from "../../../lib/modules/aeris-metadata-services/components/aeris-metadata-services";
import AerisMetadataDescription from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-description/components/aeris-metadata-description";
import AerisMetadataDatapolicy from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/components/aeris-metadata-datapolicy";
import AerisMetadataContacts from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-contacts/components/aeris-metadata-contacts";
import AerisMetadataInformationLinks from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-information-links/components/aeris-metadata-information-links";
import AerisMetadataDataLinks from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-data-links/components/aeris-metadata-data-links";
import AerisNotifier from "aeris-commons-components-vjs/src/lib/modules/aeris-notification/components/aeris-notifier";
import AerisMetadataTemporalExtents from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/components/aeris-metadata-temporal-extents";
import AerisMetadataFormats from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-formats/components/aeris-metadata-formats";
import AerisMetadataModifications from "../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-modifications/components/aeris-metadata-modifications";

export default {
  name: "aeris-metadata-services-test",
  components: {
    AerisMetadataServices,
    AerisMetadataDescription,
    AerisMetadataDatapolicy,
    AerisMetadataContacts,
    AerisMetadataInformationLinks,
    AerisMetadataDataLinks,
    AerisNotifier,
    AerisMetadataTemporalExtents,
    AerisMetadataFormats,
    AerisMetadataModifications
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      metadata: null,
      notification: null,
      uuid: null
    };
  },
  methods: {
    updateMetadata(metadata) {
      this.metadata = metadata;
    },
    updateNotification(notification) {
      if (notification.message) {
        this.notification = notification;
        this.uuid = null;
      } else {
        this.notification = null;
        this.uuid = notification.uuid;
      }
    }
  }
};
</script>
