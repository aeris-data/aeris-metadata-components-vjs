<i18n>
{
  "en": {
    "parameters": "Parameters"
  },
  "fr": {
    "parameters": "Paramètres"
  }
}
</i18n>

<template>
<span class="aeris-metadata-parameters-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-thermometer-half"></i> {{ $t('parameters') }}</h3>
      </header>
      <main>
      <span  v-for="parameter in parameters">
       <aeris-metadata-parameter :parameter="JSON.stringify(parameter)" :lang="lang"></aeris-metadata-parameter>
       </span>
      </main>
    </div>
</span>
</template>

<script>
export default {
  props: {
  	lang:  {
      type: String,
      default: 'fr'
    }
  },
  
  watch: {
    lang (value) {
	      this.$i18n.locale = value
    }
  },
  
  destroyed: function() {
  	document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  	this.aerisMetadataListener = null;
  	document.removeEventListener('aerisTheme', this.aerisThemeListener);
  	this.aerisThemeListener = null;
  },
  
  created: function () {
  console.log("Aeris Metadata Parameters - Creating");
   this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
   document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
   this.aerisThemeListener = this.handleTheme.bind(this) 
   document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  mounted: function() {
    	var event = new CustomEvent('aerisThemeRequest', {});
  	document.dispatchEvent(event);
  },
  
  updated: function() {
  	this.ensureTheme();
  },
  
  computed: {
  },
   data () {
    return {
    	parameters: [],
    	visible: true,
    	theme: null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }
  },
  methods: {
  
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Parameters - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
  		this.parameters = [];
  		this.lang = data.lang || this.lang
  		if (data.detail.parameters) {
  		  this.visible = true;
  		  console.log(data.detail.parameters)
          this.parameters = data.detail.parameters;
       }
       else {
       	this.visible = false;
       }
  	},
  	
	ensureTheme: function() {
	if (this.theme) {
		this.$el.querySelector("header").style.background=this.theme.primary
	}
	
	},  	
  	
  	handleTheme: function(event) {
  		this.theme = event.detail
  		this.ensureTheme()
  	}
  	
  	
  }
}
</script>

<style>
 </style>