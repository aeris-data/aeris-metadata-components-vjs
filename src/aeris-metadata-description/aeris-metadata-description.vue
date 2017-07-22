/*
 dependances: 
 font awesome
 international field
 shared style
 markdown
*/
<i18n>
{
  "en": {
    "description": "Description"
  },
  "fr": {
    "description": "Description"
  }
}
</i18n>

<template>
<span class="aeris-metadata-description-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-comment-o"></i>{{$t('description')}}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main class="metadata-description-main">
        <aeris-metadata-international-field :html="markdown" :lang="lang" :content="value" no-label-float></aeris-metadata-international-field>
      </main>
    </div>
</span>
</template>

<script>
var marked = require('marked');
export default {
  props: {
  	lang:  {
      type: String,
      default: 'fr'
    },
    markdown:  {
      type: Boolean,
      default: true
    },
  },
  
  data () {
    return {
    	visible: true,
    	description	: null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
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
  console.log("Aeris Metadata Description - Creating");
   this.$i18n.locale = this.lang
   this.aerisThemeListener = this.handleTheme.bind(this) 
   document.addEventListener('aerisTheme', this.aerisThemeListener);
   this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },
  
  computed: {
	value: function() {
		return JSON.stringify(this.description);
	}  
  },
  
   mounted: function() {
    	var event = new CustomEvent('aerisThemeRequest', {});
  	document.dispatchEvent(event);
  },
  
  methods: {
  
  handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.primary
  	},
  
  handleRefresh: function(data) {
  		console.log("Aeris Metadata Description - Refreshing"); 
  		this.visible = false;
  		
  		if ((! data))  {
    	 return
    	}
    	if ((! data.detail))  {
    	 return
    	}
    	if ((! data.detail.resourceAbstract))  {
    	 return
    	}
    	
  		 if (this.markdown) {
	          var descriptions = data.detail.resourceAbstract;
            
            /* Convert markdown description to html for each language */
	          for(var item in descriptions){
              if(descriptions.hasOwnProperty(item)) {
                descriptions[item] = marked(descriptions[item]);
              	}
	      	  }
	          this.description = descriptions;
          } else {
	          this.description = data.detail.resourceAbstract;
          }
          this.visible=true;
  	}
  
  }
}
</script>

<style>
    .metadata-description-main {
      text-align: justify;
    }
</style>