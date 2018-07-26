<i18n>
{
  "en": {
    "thesaususSearchError": "Parameter thesaurus search error",
    "longName": "Long name",
    "uom": "Unit of measure",
    "description": "Comment"
  },
  "fr": {
    "thesaususSearchError": "Erreur recherche thesaurus paramètre",
    "longName": "Nom long",
    "uom": "Unité de mesure",
    "description": "Commentaire"
  }
}
</i18n>
<template>
<div class="aeris-metadata-parameter-host">
    <div class="aeris-parameter-container" v-bind:class="{ showParameterBody: deployed }">
    <header v-on:click="deployed = !deployed">
      <h5>{{title}}</h5>
      <i class="chevron" :class="openIconClass"></i>
    </header>
    <article class="parameter-collapsable-part">
      <span>{{thesaurusLabel}}</span>
      <ul class="metadata-format-description">
      	<li><h6 v-if="value.longName">{{$t('longName')}}: </h6>{{value.longName}}</li>
      	<li><h6 v-if="value.uom">{{$t('uom')}}: </h6>{{value.uom}}</li>
        <li><h6 v-if="value.comment">{{$t('description')}}: </h6>
        	<aeris-metadata-international-field :content="JSON.stringify(value.comment)" :lang="lang" no-label-float :convertlinks="true"></aeris-metadata-international-field>
        </li>
      </ul>
    </article>
  </div>
</div>
</template>

<script>
export default {

  name: 'aeris-metadata-parameter',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    parameter: {
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
    console.log("Aeris Metadata Parameter - Creating");
    this.$i18n.locale = this.lang;
    this.labelHandle();
  },


  computed: {

    value: function() {
      if (this.parameter == null) {
        return {};
      } else {
        return JSON.parse(this.parameter);
      }
    },
    thesaurusLabel: function() {
      let thesLabel = this.TermName;
      if (this.Variable1Name) thesLabel += " > " +  this.Variable1Name;
      if (this.Variable2Name) thesLabel += " > " +  this.Variable2Name;
      if (this.Variable3Name) thesLabel += " > " +  this.Variable3Name;
      return thesLabel;
    }

  },

  data() {
    return {
      deployed: false,
      TermName: "",
      Variable1Name: "",
      Variable2Name: "",
      Variable3Name: "",
      title: ""
    }
  },
  
  methods: {
	  
	  labelHandle: function() {
      let metadata = this.value;
      if (metadata.thesaurusVariable) {
        
		     if (metadata.thesaurusVariable && metadata.thesaurusVariable.code != "" && metadata.thesaurusVariable.code != "NULL") {
			     this.TermName = (this.lang == "fr") ? metadata.thesaurusVariable.name.fr ? metadata.thesaurusVariable.name.fr : metadata.thesaurusVariable.name.en : metadata.thesaurusVariable.name.en;
		     }
		     if (metadata.thesaurusVariable.thesaurusVariable && metadata.thesaurusVariable.thesaurusVariable.code != "" && metadata.thesaurusVariable.thesaurusVariable.code != "NULL") {
           this.Variable1Name = (this.lang == "fr") ? metadata.thesaurusVariable.thesaurusVariable.name.fr ? metadata.thesaurusVariable.thesaurusVariable.name.fr : metadata.thesaurusVariable.thesaurusVariable.name.en : metadata.thesaurusVariable.thesaurusVariable.name.en;
		     }
		     if (metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable && metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "" && metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "NULL") {
			     if (this.Variable1Name == "") {
				     this.Variable1Name = (this.lang == "fr") ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
			     } else {
				     this.Variable2Name = (this.lang == "fr") ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
			     }
		     }
		     if (metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable && metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "" && metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "NULL") {
			     if (this.Variable2Name == "") {
				     this.Variable2Name = (this.lang == "fr") ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
			     } else {
				     this.Variable3Name = (this.lang == "fr") ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr ? metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en : metadata.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
			     }
		     }
      
      }
      
		  if (metadata.shortName == "" && metadata.thesaurusVariable) {
		   this.title = this.TermName; 
		  } else {
		   this.title = metadata.shortName;
      }
			  
	  }
  }
}

</script>

<style>
.aeris-parameter-container .parameter-collapsable-part {
  display: none;
  transition: 0.3s
}

.aeris-parameter-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  backface-visibility: hidden; 
}

.aeris-parameter-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer
}

.aeris-parameter-container.showParameterBody .parameter-collapsable-part {
  display: block;
  transition: 0.3s
}

.aeris-parameter-container.showParameterBody .chevron {
  transform: rotate(180deg);
}

.aeris-parameter-container .chevron {
  transition: 0.3s;
}

.aeris-parameter-container .parameter-collapsable-part {
  padding: 5px 5px 5px 0;
}

.aeris-parameter-container .metadata-format-description {
  padding-top: 5px;
}

.aeris-parameter-container .metadata-format-description li {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	list-style: none;
}
.aeris-parameter-container .metadata-format-description h6 {
  margin-bottom: 2px;
	min-width: 30%;
}

</style>
