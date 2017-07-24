<i18n>
{
  "en": {
    "quicklook_gallery": "Quicklook gallery"
  },
  "fr": {
    "quicklook_gallery": "Galerie de quicklooks"
  }
}
</i18n>

<template>
<span class="aeris-metadata-quick-gallery-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-picture-o"></i> {{ $t('quicklook_gallery') }}</h3>
      </header>
      <main>
   		   A coder...
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
  console.log("Aeris Metadata Quicklook gallery - Creating");
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
  		console.log("Aeris Metadata Quicklook Gallery - Refreshing"); 
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
aeris-metadata-quick-gallery-host .component-container main {
        position: relative;
        text-align: center;
        overflow: hidden
    }
aeris-metadata-quick-gallery-host    .component-container main .prev,
aeris-metadata-quick-gallery-host    .component-container main .next {
        position: absolute;
        z-index: 999;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px;
        background-color: #fff;
        color: #333;
        opacity: 0.4
    }
aeris-metadata-quick-gallery-host    .component-container main .prev:hover,
aeris-metadata-quick-gallery-host    .component-container main .next:hover {
        cursor: pointer;
        opacity: 0.8
    }
aeris-metadata-quick-gallery-host    .component-container main .prev {
        padding-left: 3px;
        left: 15px
    }
aeris-metadata-quick-gallery-host    .component-container main .next {
        padding-right: 3px;
        right: 15px
    }
    .ql-gallery-container {
        overflow: hidden
    }
    .ql-gallery-img-container {
        display: inline-flex;
        flex-flow: row nowrap;
        overflow-x: hidden;
        overflow-y: visible;
        padding: 10px 0;
        margin: 0 auto
    }
    .ql-gallery-image {
        height: 200px;
        width: auto;
        vertical-align: middle;
        text-align: center;
        transition: transform 0.3s
    }
    .ql-gallery-image a img {
        height: 100%;
        width: auto;
        min-width: inherit;
        max-width: inherit;
        border: none;
        margin: 0
    }
    .ql-gallery-image:hover {
        cursor: pointer;
        transform: scale(1.05)
    }
 </style>