<i18n>
{
  "en": {
    "thesaususSearchError": "Instrument thesaurus search error",
    "manufacturer": "Manufacturer",
    "model": "Model",
    "serialNumber": "Serial number",
    "calibration": "Calibration",
    "resolution": "Resolution",
    "description": "Description"
  },
  "fr": {
    "thesaususSearchError": "Erreur recherche thesaurus instrument",
    "manufacturer": "Fabriquant",
    "model": "Modèle",
    "serialNumber": "Numéro de série",
    "calibration": "Etalonnage",
    "resolution": "Résolution",
    "description": "Description"
  }
}
</i18n>

<template>
<div class="aeris-metadata-instrument-host">

  <div class="aeris-instrument-container" v-bind:class="{ showInstrumentBody: deployed }">
    <header v-on:click="deployed = !deployed">
      <h5>{{title}}</h5>
      <i class="chevron" :class="openIconClass"></i>
    </header>
    <article class="instrument-collapsable-part">
      <span>{{className}} > {{codeName}} > {{nameName}}</span>
      <ul class="metadata-format-description">
      	<li><h6 v-if="value.manufacturer">{{$t('manufacturer')}}: </h6>{{value.manufacturer}}</li>
      	<li><h6 v-if="value.model">{{$t('model')}}: </h6>{{value.model}}</li>
      	<li><h6 v-if="value.serialNumber">{{$t('serialNumber')}}: </h6>{{value.serialNumber}}</li>
      	<li><h6 v-if="value.calibration">{{$t('calibration')}}: </h6>{{value.calibration}}</li>
      	<li><h6 v-if="value.resolution">{{$t('resolution')}}: </h6>{{resolutionDisplay}}</li>
        <li><h6 v-if="value.description">{{$t('description')}}: </h6>
        	<aeris-metadata-international-field label="Description" :content="JSON.stringify(value.description)" :lang="lang" no-label-float :convertlinks="true"></aeris-metadata-international-field>
        </li>
      </ul>
    </article>
  </div>


</div>
</template>

<script>
export default {

  name: 'aeris-metadata-instrument',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    instrument: {
      type: String,
      default: null
    },
    openIconClass: {
      type: String,
      default: 'fa fa-chevron-down'
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value
    }
  },

  created: function() {
    console.log("Aeris Metadata Instrument - Creating");
    this.$i18n.locale = this.lang;
    this.getThesaurusServiceName();
    this.searchLabels();
  },

  computed: {

    value: function() {
      if (this.instrument == null) {
        return {};
      } else {
        return JSON.parse(this.instrument);
      }
    }
  },

  data() {
    return {
      deployed: false,
      aerisServicesListener: null,
      className: "",
      codeName: "",
      nameName: "",
      title: "",
      resolutionDisplay: "",
      thesaurusService: ""
    }
  },
  
  methods: {
	  getThesaurusServiceName: function() {
		  // this is bad but i'll try to improve it with the store
		  let metadataService = document.querySelector('aeris-catalog').attributes.getNamedItem('metadata-service').value;
		  if (metadataService.endsWith("/")) {
			  metadataService = metadataService.substr(0, metadataService.lastIndexOf("/"));
		  }
		  if (metadataService.endsWith("metadatarecette")) {
			  this.thesaurusService = metadataService.substr(0, metadataService.lastIndexOf("/")) + "/thesaurusrecette/INSTRUMENT/"
		  } else {
			  this.thesaurusService = metadataService.substr(0, metadataService.lastIndexOf("/")) + "/thesaurus/INSTRUMENT/"
		  }
	  },
	  
	  searchLabels: function() {
		  // to manage in the store later
		  let url = this.thesaurusService + this.value.thesaurusConcat;
		  this.$http.get(url).then(response => {
			  	this.handleSuccess(response)
	         }, response => {
	            this.handleError(response)
	         });
	  },
	  
	  handleSuccess: function(response) {
		  let thesaurus = response.body;
		  if (thesaurus.thesaurusClassification.code != "") {
			  this.className = (this.lang == "fr") ? thesaurus.thesaurusClassification.name.fr : thesaurus.thesaurusClassification.name.en;
		  }
		  if (thesaurus.thesaurusClassification.thesaurusCode.code != "") {
			  this.codeName = (this.lang == "fr") ? thesaurus.thesaurusClassification.thesaurusCode.name.fr : thesaurus.thesaurusClassification.thesaurusCode.name.en;
		  }
		  if (thesaurus.thesaurusClassification.thesaurusCode.thesaurusName.code != "") {
			  if (this.codeName == "") {
				  this.codeName = (this.lang == "fr") ? thesaurus.thesaurusClassification.thesaurusCode.thesaurusName.name.fr : thesaurus.thesaurusClassification.thesaurusCode.thesaurusName.name.en;
			  } else {
				  this.nameName = (this.lang == "fr") ? thesaurus.thesaurusClassification.thesaurusCode.thesaurusName.name.fr : thesaurus.thesaurusClassification.thesaurusCode.thesaurusName.name.en;
			  }
		  }
		  if (this.value.displayName == "") {
			  this.title = this.className; 
		  } else {
			  this.title = this.value.displayName;
		  }
		  if (this.value.resolution) {
			  this.resolutionDisplay = this.value.resolution.resolutionValue + " " + this.value.resolution.resolutionUnit;
		  }
			  
	  },
	  
	  handleError: function(response) {
		  console.log(response);
		  document.dispatchEvent(new CustomEvent('aerisErrorNotificationMessageEvent', { 'detail': {message: this.$t('thesaususSearchError')}}));
	  }
  }


}
</script>

<style>
.aeris-instrument-container .instrument-collapsable-part {
  display: none;
  transition: 0.3s
}

.aeris-instrument-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  backface-visibility: hidden; 
}

.aeris-instrument-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer
}

.aeris-instrument-container.showInstrumentBody .instrument-collapsable-part {
  display: block;
  transition: 0.3s
}

.aeris-instrument-container.showInstrumentBody .chevron {
  transform: rotate(180deg);
}

.aeris-instrument-container .chevron {
  transition: 0.3s;
}

.aeris-instrument-container .instrument-collapsable-part {
  padding: 5px 5px 5px 0;
}

.aeris-instrument-container .metadata-format-description li {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	list-style: none;
}
.aeris-instrument-container .metadata-format-description h6 {
	min-width: 30%;
}
</style>
