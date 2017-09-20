<i18n>
{
  "en": {
    "platforms": "Platforms"
  },
  "fr": {
    "platforms": "Plateformes"
  }
}
</i18n>

<template>
<span class="aeris-metadata-parameters-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-cubes"></i> {{ $t('platforms') }}</h3>
      </header>
      <main>
   		<span  v-for="platform in platforms">
   		<aeris-metadata-platform :platform="JSON.stringify(platform)" :lang="lang"></aeris-metadata-platform>
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
      default: 'en'
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
  console.log("Aeris Metadata Platform - Creating");
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
  
  computed: {
  },
   data () {
    return {
    	platforms: [],
    	visible: true,
    	theme: null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }
  },
  methods: {
  
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Platform - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
  		this.platforms = [];
  		this.lang = data.lang || this.lang
  		if (data.detail.plateforms) {
  		  this.visible = true;
          this.platforms = data.detail.plateforms;
       }
       else {
       	this.visible = false;
       }
  	},
  	
  	handleTheme: function(event) {
  		this.theme = event.detail
		this.$el.querySelector("header").style.background=this.theme.primary
  	}
  	
  	
  }
}
</script>

<style>
 </style>