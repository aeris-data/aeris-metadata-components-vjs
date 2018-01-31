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
    <aeris-metadata-description markdown="true" :lang="lang"></aeris-metadata-description>
    <aeris-metadata-contacts :lang="lang"></aeris-metadata-contacts>
    <aeris-metadata-temporal-extents :lang="lang"></aeris-metadata-temporal-extents>
    <aeris-metadata-data-links :lang="lang"></aeris-metadata-data-links>
    <aeris-metadata-information-links :lang="lang"></aeris-metadata-information-links>
    <aeris-metadata-disponibility-calendar calendar-type="quarter" :lang="lang"></aeris-metadata-disponibility-calendar>
    <aeris-metadata-platforms :lang="lang"></aeris-metadata-platforms>
    <aeris-metadata-formats :lang="lang"></aeris-metadata-formats>
    <aeris-metadata-parameters :lang="lang"></aeris-metadata-parameters>
    <aeris-metadata-publications :lang="lang"></aeris-metadata-publications>
    <aeris-metadata-quicklook-gallery :lang="lang"></aeris-metadata-quicklook-gallery>
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

  watch: {
	    lang(value) {
	      this.$i18n.locale = value;
	    }
  },
	  
  created: function() {
    console.log("Aeris metadata synthesis - Creating");
    this.$i18n.locale = this.lang;
  },


  data() {
    return {}
  }


}
</script>
