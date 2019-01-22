<template>
<aeris-metadata-services identifier="95941ca3-7251-4bed-877a-d2a99fb719cc" lang="fr" service="https://sedoo.aeris-data.fr/catalogue/rest/metadatarecette/id">
  <aeris-metadata-quicklook-gallery></aeris-metadata-quicklook-gallery>
  <aeris-metadata-quicklook-gallery class="small"></aeris-metadata-quicklook-gallery>
</aeris-metadata-services>
</template>


<script>
import AerisMetadataQuicklookGallery from "../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-quicklook-gallery/components/aeris-metadata-quicklook-gallery.vue";
import AerisMetadataServices from "../../lib/modules/aeris-metadata-services/components/aeris-metadata-services.vue"
export default {
  
  components: {
    AerisMetadataServices,
    AerisMetadataQuicklookGallery,
  }
};
</script>

<style>
.small[data-template="metadata-block"] {
  width: 100%;
}
</style>
