<style>
.aeris-metadata-synthesis-host .metadata-container {
  margin: 0 auto;
  max-width: 1000px;
}

.aeris-metadata-synthesis-host .component-container {
  margin-bottom: 10px
}
</style>

<template>
<div class="aeris-metadata-synthesis-host">
  <aeris-metadata :identifier="identifier" :lang="lang" :service="service">
  </aeris-metadata>
  <div class="metadata-container">
    <aeris-metadata-description markdown="true"></aeris-metadata-description>
    <aeris-metadata-contacts></aeris-metadata-contacts>
    <aeris-metadata-temporal-extents></aeris-metadata-temporal-extents>
    <aeris-metadata-data-links></aeris-metadata-data-links>
    <aeris-metadata-information-links></aeris-metadata-information-links>
    <aeris-metadata-disponibility-calendar calendar-type="quarter"></aeris-metadata-disponibility-calendar>
    <aeris-metadata-platforms></aeris-metadata-platforms>
    <aeris-metadata-formats></aeris-metadata-formats>
    <aeris-metadata-parameters></aeris-metadata-parameters>
    <aeris-metadata-publications></aeris-metadata-publications>
    <aeris-metadata-quicklook-gallery></aeris-metadata-quicklook-gallery>
  </div>
</div>
</div>
</template>

<script>
export default {

  name: 'aeris-metadata-synthesis',

  props: {
    lang: {
      type: String,
      default: 'en'
    },

    service: {
      type: String,
      default: 'https://sedoo.aeris-data.fr/catalogue/rest/projectrecette/id/'
    },

    identifier: {
      type: String
    },

  },

  created: function() {
    console.log("Aeris metadata synthesis - Creating");
  },


  data() {
    return {}
  }


}
</script>
