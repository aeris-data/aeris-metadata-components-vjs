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
      <span>{{thesaurusLabel}}</span>
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
    this.labelHandle();
  },

  computed: {

    value: function() {
      if (this.instrument == null) {
        return {};
      } else {
        return JSON.parse(this.instrument);
      }
    },
    thesaurusLabel: function() {
      return this.className + (this.codeName ? " > " +  this.codeName +  (this.nameName ? " > " + this.nameName : "") : (this.nameName ? " > " + this.nameName : ""));
    }
  },

  data() {
    return {
      deployed: false,
      className: "",
      codeName: "",
      nameName: "",
      title: "",
      resolutionDisplay: ""
    }
  },
  
  methods: {
	  
	  labelHandle: function() {
      let metadata = this.value;
		  if (metadata.thesaurusClass.code != "" && metadata.thesaurusClass.code != "NULL") {
			  this.className = (this.lang == "fr") ? metadata.thesaurusClass.name.fr ? metadata.thesaurusClass.name.fr : metadata.thesaurusClass.name.en : metadata.thesaurusClass.name.en;
		  }
		  if (metadata.thesaurusClass.thesaurusCode.code != "" && metadata.thesaurusClass.thesaurusCode.code != "NULL") {
        this.codeName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.name.fr ? metadata.thesaurusClass.thesaurusCode.name.fr : metadata.thesaurusClass.thesaurusCode.name.en : metadata.thesaurusClass.thesaurusCode.name.en;
		  }
		  if (metadata.thesaurusClass.thesaurusCode.thesaurusName.code != "" && metadata.thesaurusClass.thesaurusCode.thesaurusName.code != "NULL") {
			  if (this.codeName == "") {
				  this.codeName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
			  } else {
				  this.nameName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
			  }
		  }
		  if (metadata.displayName == "") {
			  this.title = this.className; 
		  } else {
			  this.title = metadata.displayName;
		  }
		  if (metadata.resolution) {
			  this.resolutionDisplay = metadata.resolution.resolutionValue + " " + metadata.resolution.resolutionUnit;
		  }
			  
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
