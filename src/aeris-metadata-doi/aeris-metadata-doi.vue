/*
 dependances: 

metadata-shared-styles.html
metadata-format.html

*/
<i18n>
{
  "en": {
    "header": "How to cite this product ?",
    "doi": "DOI",
    "citation": "Citation"
    
  },
  "fr": {
    "header": "Comment citer ce produit ?",
    "doi": "DOI",
    "citation": "Citation"
  }
}
</i18n>

<template>
<span class="aeris-metadata-doi-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-pencil"></i> {{ $t('header') }}</h3>
      </header>
      <main>
      <article>
        <div class="metadata-doi-description" v-if="doi">
          <h5 v-if="doi">{{$t('doi')}}:</h5>{{doi}}</div>
        <div class="metadata-doi-description" v-if="citation">
          <h5 v-if="citation">{{$t('citation')}}:</h5>{{citation}}</div>
	</article>
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
    },
    doi (value) {
    	this.citation='';
    	if (this.doi) {
    	 var url = 'https://data.datacite.org/text/x-bibliography;style=apa/'+this.doi;
   	   	this.$http.get(url).then((response)=>{this.handleSuccess(response)},(response)=>{this.handleError(response)});
   	   }
    }
  },
  
  destroyed: function() {
  	document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  	this.aerisMetadataListener = null;
  	document.removeEventListener('aerisTheme', this.aerisThemeListener);
  	this.aerisThemeListener = null;
  },
  
  created: function () {
  console.log("Aeris Metadata doi - Creating");
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
    	visible: true,
    	theme: null,
    	doi: null,
    	citation:null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }
  },
  
  updated: function() {
  	this.ensureTheme()
  },
  
  methods: {
  
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Citation - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
  		this.platforms = [];
  		this.lang = data.lang || this.lang
  		if (data.detail.doi) {
  		  this.visible = true;
          this.doi = data.detail.doi;
       }
       else {
       	this.visible = false;
       	//this.visible = true;
       	//this.doi = "10.25326/1";
       }
  	},
  	
  	 handleSuccess : function(response) {
	  	 this.citation = response.data.trim();
	  	 console.log("jjjj");
  },
  
   handleError : function(response) {
   },
  	
  	handleTheme: function(theme) {
  		this.theme = theme
		this.$el.querySelector("header").style.background=this.theme.primary
		this.ensureTheme()
  	},
  	
  	ensureTheme: function() {
  	if (this.theme) {
  	var elems = this.$el.querySelectorAll('article h5');
	    var index = 0, length = elems.length;
    	for ( ; index < length; index++) {
        	elems[index].style.color=this.theme.primary
    	}
    }
  	}
  	
  	
  }
}
</script>

<style>
 .aeris-metadata-doi-host {
        display: block;
        transition: 0.6s
    }
 
    .metadata-doi-container {
        border: 1px solid #bbb;
        overflow: hidden
    }
    .metadata-doi-container header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: nowrap row;
        padding: 10px
    }
    .metadata-doi-container header h5 {
        display: inline;
        margin: 0;
         color: #475053
    }
    
    .metadata-doi-container header span {
        color: #475053
    }
    .metadata-doi-container header input {
        width: 100%;
        padding: 2px 0;
        font-size: 0.83em;
        font-weight: bold;
        color: #4765A0;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd
    }
    .metadata-doi-container header i {
        cursor: pointer;
        color: #999
    }
    .metadata-doi-container header i:hover {
        opacity: 0.6
    }
    
    .metadata-doi-description {
    	text-align:justify;
    }
    
    .metadata-doi-container article {
        display: none;
        padding: 10px;
        border-top: 1px solid #ddd
    }
    .metadata-doi-container article h5 {
        margin: 5px 0;
        color:  #4765A0
    }
    .metadata-doi-container article p {
        margin: 0
    }
    .metadata-doi-container article a {
        color: #3498db
    }
    .metadata-doi-container.showBody article {
        display: block
    }
    .metadata-doi-container.showBody .fa-chevron-down {
        transform: rotate(180deg)
    }
    .metadata-doi-container .fa-chevron-down {
        transition: 0.3s
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }
    
    .metadata-d-container header {
        background-color: #fff
    }

 </style>