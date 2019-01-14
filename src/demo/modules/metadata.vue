<template>
<div>
  <aeris-metadata :identifier="id" lang="fr" service="https://sedoo.aeris-data.fr/catalogue/rest/metadatarecette/id">
    <aeris-metadata-citations></aeris-metadata-citations>
  	<aeris-metadata-instruments></aeris-metadata-instruments>
  	<aeris-metadata-modifications></aeris-metadata-modifications>
    <aeris-metadata-description markdown=""></aeris-metadata-description>
    <aeris-metadata-datapolicy></aeris-metadata-datapolicy>
    <aeris-metadata-contacts></aeris-metadata-contacts>
    <aeris-metadata-spatial-extents></aeris-metadata-spatial-extents>
    <aeris-metadata-temporal-extents></aeris-metadata-temporal-extents>
    <aeris-metadata-information-links></aeris-metadata-information-links>
    <aeris-metadata-data-links></aeris-metadata-data-links>
    <aeris-metadata-information></aeris-metadata-information>
    <aeris-metadata-quicklook-gallery></aeris-metadata-quicklook-gallery>
    <aeris-metadata-publications></aeris-metadata-publications>
    <aeris-metadata-platforms></aeris-metadata-platforms>
    <aeris-metadata-parameters></aeris-metadata-parameters>
    <aeris-metadata-formats></aeris-metadata-formats>
    <aeris-metadata-doi></aeris-metadata-doi>
  </aeris-metadata>
</div>
</template>


<script>
export default {

  props: ['id']
}
</script>
