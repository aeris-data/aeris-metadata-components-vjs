
<i18n>
{
  "en": {
    "otherInformation": "Other information",
    "uuid": "Unique identifier",
    "lastModification": "Last modification",
    "dataCenter": "Data centre",
    "projection": "Projection",
    "dataLevel": "Data processing level"
  },
  "fr": {
    "otherInformation": "Autres informations",
    "uuid": "Identifiant unique",
    "lastModification": "Dernière modifications",
    "dataCenter": "Centre de données",
    "projection": "Projection",
    "dataLevel": "Niveau de traitement de la donnèes"
  }
}
</i18n>

<template>
<span class="aeris-metadata-information-host" v-if="visible">
 <div class="component-container">
      <header>
        <h3><i class="fa fa-info"></i>{{$t('otherInformation')}}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main>
      
       <article>
          <h5 v-if="value.id">{{$t('uuid')}}</h5>
          <span>{{value.id}}</span>
        </article>
        
        <article>
          <h5 v-if="value.lastModification">{{$t('lastModification')}}</h5>
          <span>{{this.formatDate(value.lastModification)}}</span>
        </article>
        
         <article>
          <h5 v-if="value.aerisDataCenter">{{$t('dataCenter')}}</h5>
          <span>{{value.aerisDataCenter}}</span>
        </article>
        
        <article>
          <h5 v-if="value.projection">{{$t('projection')}}</h5>
          <span>{{value.projection}}</span>
        </article>
        
         <article>
          <h5 v-if="value.dataLevel">{{$t('dataLevel')}}</h5>
          <span>{{value.dataLevel}}</span>
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
      default: 'en'
    },
    
     
  },
  
    mounted: function() {
    	var event = new CustomEvent('aerisThemeRequest', {});
  	document.dispatchEvent(event);
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
  console.log("Aeris Metadata Information - Creating");
   this.$i18n.locale = this.lang
  this.aerisMetadataListener = this.handleRefresh.bind(this)
   document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
   this.aerisThemeListener = this.handleTheme.bind(this) 
   document.addEventListener('aerisTheme', this.aerisThemeListener);
  },
  
  updated: function() {
  	this.ensureTheme()
  },
  
  computed: {
  },
   data () {
    return {
    	visible: true,
    	theme : null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null,
    	value:  {}
    }
  },
  methods: {
  
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Information - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
  		this.value = data.detail;
  		this.lang = data.lang || this.lang
		this.visible = true;
  	},
  	
  	 handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.primary
  		this.theme = event.detail
  		this.ensureTheme();
  	},
  	
  	ensureTheme: function() {
  	if ((this.theme) && (this.$el.querySelectorAll)) {
  	var elems = this.$el.querySelectorAll('article h5');
	    var index = 0, length = elems.length;
    	for ( ; index < length; index++) {
        	elems[index].style.color=this.theme.primary
    	}
    }
  	},
  	
  	formatDate: function(date) {
        if(date) {
          var momentDate = moment(date);
          if(momentDate.isValid()) return moment(date).format('LLL');
        }
        
        return date;
      }
  }
}
</script>

<style>
 </style>