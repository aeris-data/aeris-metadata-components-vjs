<i18n>
{
  "en": {
    "informationLinks": "Information links"
  },
  "fr": {
    "informationLinks": "Liens d'information"
  }
}
</i18n>

<template>
<span class="aeris-metadata-information-links-host" v-show="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-link"></i> {{ $t('informationLinks') }}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main >
      <span  v-for="link in links">
     <aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"></aeris-metadata-information-link>

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

   mounted: function() {
    	var event = new CustomEvent('aerisThemeRequest', {});
  	document.dispatchEvent(event);
  },

  destroyed: function() {
  	document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  	this.aerisMetadataListener = null;
  	document.removeEventListener('aerisTheme', this.aerisThemeListener);
  	this.aerisThemeListener = null;
  },

  created: function () {
  console.log("Aeris Metadata Information links - Creating");
   this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
   document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
   this.aerisThemeListener = this.handleTheme.bind(this)
   document.addEventListener('aerisTheme', this.aerisThemeListener);
  },

  computed: {

  },
   data () {
    return {
    	links: null,
    	visible: true,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }

  },
  methods: {

     handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.primary
  	},

    handleRefresh: function(data) {
  		console.log("Aeris Metadata Links - Refreshing");
    	this.visible = false
    	this.links = [];
    	if ((! data) || (! data.detail))  {
    	 return
    	}
    	if (data.detail.links) {
             var allLinks = data.detail.links;
             var informationLinks = [];
	         allLinks.forEach(function(item) {
	         console.log("Type: "+item.type)
             if(item.type === 'INFORMATION_LINK') {
             informationLinks.push(item)
             	};
             });
             this.links = informationLinks;
             this.visible = true;
        }
  	}
  }
}
</script>

<style>

 .aeris-metadata-contacts-host .section-title {
        border-bottom: 1px solid
    }
  .aeris-metadata-contacts-host metadata-contact {
        margin-top: 5px
    }



 </style>
