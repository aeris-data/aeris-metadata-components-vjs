<i18n>
{
  "en": {
    "type": "Type",
    "description": "Description"
  },
  "fr": {
    "type": "Type",
    "description": "Description"
  }
}
</i18n>

<template>
<div class="aeris-metadata-platform-host">

  <div class="aeris-plateform-container" v-bind:class="{ showPlateformBody: deployed }">
    <header v-on:click="deployed = !deployed">
      <h5>{{title}}</h5>
      <i class="chevron" :class="openIconClass"></i>
    </header>
    <article class="platform-collapsable-part">
      <span>{{thesaurusLabel}}</span>
      <ul class="metadata-format-description">
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

  name: 'aeris-metadata-platform',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    platform: {
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
    console.log("Aeris Metadata Platform - Creating");
    this.$i18n.locale = this.lang;
    this.labelHandle();
  },


  computed: {

    value: function() {
      if (this.platform == null) {
        return {};
      } else {
        return JSON.parse(this.platform);
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
      title: ""
    }
  },
  
  methods: {
	  
	  labelHandle: function() {
      let metadata = this.value;
		  if (metadata.thesaurusClass.code != "") {
			  this.className = (this.lang == "fr") ? metadata.thesaurusClass.name.fr ? metadata.thesaurusClass.name.fr : metadata.thesaurusClass.name.en : metadata.thesaurusClass.name.en;
		  }
		  if (metadata.thesaurusClass.thesaurusCode.code != "") {
        this.codeName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.name.fr ? metadata.thesaurusClass.thesaurusCode.name.fr : metadata.thesaurusClass.thesaurusCode.name.en : metadata.thesaurusClass.thesaurusCode.name.en;
		  }
		  if (metadata.thesaurusClass.thesaurusCode.thesaurusName.code != "") {
			  if (this.codeName == "") {
				  this.codeName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
			  } else {
				  this.nameName = (this.lang == "fr") ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
			  }
		  }
		  if (metadata.displayName == "") {
			  this.title = this.className; 
		  } else {
			  this.title = metadata.name;
		  }
			  
	  }
  }

}
</script>

<style>
.aeris-plateform-container .platform-collapsable-part {
  display: none;
  transition: 0.3s
}

.aeris-plateform-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  backface-visibility: hidden; 
}

.aeris-plateform-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer
}

.aeris-plateform-container.showPlateformBody .platform-collapsable-part {
  display: block;
  transition: 0.3s
}

.aeris-plateform-container.showPlateformBody .chevron {
  transform: rotate(180deg);
}

.aeris-plateform-container .chevron {
  transition: 0.3s;
}

.aeris-plateform-container .platform-collapsable-part {
  padding: 5px 5px 5px 0;
}

.aeris-plateform-container .metadata-format-description li {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	list-style: none;
}
.aeris-plateform-container .metadata-format-description h6 {
	min-width: 30%;
}
</style>
