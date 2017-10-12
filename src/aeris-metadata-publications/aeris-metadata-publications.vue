/*
 dependances: 

metadata-shared-styles.html
metadata-format.html

*/
<i18n>
{
  "en": {
    "publications": "Publications"
  },
  "fr": {
    "publications": "Publications"
  }
}
</i18n>

<template>
<span class="aeris-metadata-temporal-extent-host" v-show="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-bookmark-o"></i> {{ $t('publications') }}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main>
       <span  v-for="publication in publications">
       <aeris-metadata-publication :publication="JSON.stringify(publication)" :lang="lang"></aeris-metadata-publication>
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
   console.log("Aeris Metadata Publications - Creating");
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
    	publications: [],
    	visible: true,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }
  },
  methods: {
  
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Publications - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
  		this.publications = [];
  		this.lang = data.lang || this.lang
  		if (data.detail.publications) {
  		  this.visible = true;
  		  console.log(data.detail.publications)
          this.publications = data.detail.publications;
       }
       else {
       	this.visible = false;
       }
  	},
  	
  	handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.primary
  	}
  	
  	
  }
}
</script>

<style>
 </style>