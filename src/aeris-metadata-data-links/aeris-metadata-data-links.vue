/*
 dependances:

metadata-shared-styles.html
font awesome
aeris-metadata-link

*/
<i18n>
{
  "en": {
    "dataAccess": "Data access",
    "httpLinks": "Http download links",
    "ftpLinks": "Ftp download links",
    "orderLinks": "Data order links"
  },
  "fr": {
    "dataAccess": "Accès aux données",
     "httpLinks": "Liens de téléchargement Http",
    "ftpLinks": "Liens de téléchargement Ftp",
    "orderLinks": "Liens de commande de données"
  }
}
</i18n>

<template>
<span class="aeris-metadata-information-links-host" v-show="visible">
<div class="component-container">
      <header class="aeris-metadata-emphasis-background">
        <h3><i class="fa fa-database"></i> {{ $t('dataAccess') }}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main >
      <div class="aeris-link-category" v-show="httpLinks.length >0">
          <div class="link-category-header">
            <h5 class="aeris-metadata-emphasis-text">{{ $t('httpLinks') }}:</h5>
          </div>
          <span  v-for="link in httpLinks">
     		<aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"></aeris-metadata-information-link>
       		</span>
      </div>
       <div class="aeris-link-category" v-show="ftpLinks.length >0">
          <div class="link-category-header">
            <h5 class="aeris-metadata-emphasis-text">{{ $t('ftpLinks') }}:</h5>
          </div>
          <span  v-for="link in ftpLinks">
     		<aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"></aeris-metadata-information-link>
       		</span>
      </div>
       <div class="aeris-link-category" v-show="orderLinks.length >0">
          <div class="link-category-header">
            <h5 class="aeris-metadata-emphasis-text">{{ $t('orderLinks') }}:</h5>
          </div>
          <span  v-for="link in orderLinks">
     		<aeris-metadata-information-link :lang="lang" :link="JSON.stringify(link)"></aeris-metadata-information-link>
       		</span>
      </div>
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
  console.log("Aeris Metadata Data links - Creating");
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
    	httpLinks: [],
    	ftpLinks: [],
    	orderLinks: [],
    	visible: true,
    	theme: null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }

  },
  methods: {

  	ensureTheme: function() {
  	if (this.theme) {
  	var elems = this.$el.querySelectorAll('.link-category-header h5');
	    var index = 0, length = elems.length;
    	for ( ; index < length; index++) {
        	elems[index].style.color=this.theme.emphasis
    	}
    }
    },

     handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.emphasis
  		this.theme = event.detail
  		this.ensureTheme()
  	},

    handleRefresh: function(data) {
  		console.log("Aeris Metadata Data Links - Refreshing");
    	this.visible = false
    	this.links = [];
    	if ((! data) || (! data.detail))  {
    	 return
    	}
    	if (data.detail.links) {
    		 var aux = data.detail.links;
    		 this.httpLinks = aux.filter(this.filterByType('HTTP_DOWNLOAD_LINK'));
    		 this.ftpLinks = aux.filter(this.filterByType('FTP_DOWNLOAD_LINK'));
    		 this.orderLinks = aux.filter(this.filterByType('ORDER_LINK'));
    		 if ((this.httpLinks.length >0) || (this.ftpLinks.length >0) || (this.orderLinks.length >0)) {
             	this.visible = true;
             }
        }
  	},

  	filterByType: function(type) {
        return function(item) {
          return item.type === type ? true : false;
        };
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

    header.aeris-metadata-emphasis-background {
     background-color: #f39c12;
    }

    h5.aeris-metadata-emphasis-text {
     color: #f39c12;
    }




 </style>
