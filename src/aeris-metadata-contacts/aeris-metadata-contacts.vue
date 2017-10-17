/*
 dependances: 

metadata-shared-styles.html
metadata-format.html

*/
<i18n>
{
  "en": {
    "contacts": "Contacts",
    "pointofcontact": "Point of contact",
    "author" : "Author",
    "custodian" : "Custodian",
    "metadatapointofcontact":"Point of contact for metadata",
    "distributor":"Distributor",
    "originator":"Originator",
    "owner": "Owner",
    "principalinvestigator":"Principal investigator",
    "processor": "Processor",
    "publisher": "Publisher"
    
  },
  "fr": {
    "contacts": "Contacts",
    "pointofcontact": "Point de contact",
    "author" : "Auteur",
    "custodian" : "Archiviste",
    "metadatapointofcontact":"Point de contact pour les métadonnées",
    "distributor":"Distributeur",
    "originator":"Créateur",
    "owner": "Propriétaire",
    "principalinvestigator": "Investigateur principal",
    "processor": "Elaborateur",
    "publisher": "Publicateur"
  }
}
</i18n>

<template>
<span class="aeris-metadata-contacts-host" v-if="visible">
<div class="component-container">
      <header>
        <h3><i class="fa fa-users"></i> {{ $t('contacts') }}</h3>
        <div class="aeris-icon-group"></div>
      </header>
      <main>
      <span  v-for="role in roles">
        <h5 class="section-title">{{$t(role)}}</h5>
        <span  v-for="contact in contacts">
          <aeris-metadata-contact :contact="JSON.stringify(contact)" :lang="lang" v-if="hasRole(contact, role)"></aeris-metadata-contact>
        </span>
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
  
  updated: function() {
  	this.ensureTheme()
  },
  
  destroyed: function() {
  	document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  	this.aerisMetadataListener = null;
  	document.removeEventListener('aerisTheme', this.aerisThemeListener);
  	this.aerisThemeListener = null;
  },
  
  created: function () {
   console.log("Aeris Metadata Contacts - Creating");
   this.$i18n.locale = this.lang
   this.aerisMetadataListener = this.handleRefresh.bind(this)
   document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
   this.aerisThemeListener = this.handleTheme.bind(this) 
   document.addEventListener('aerisTheme', this.aerisThemeListener);
  },
  
  computed: {
  	roles: function() {
  		return this.getRolesToDisplay();
  	}
  },
   data () {
    return {
    	contacts: null,
    	visible: true,
    	theme: null,
    	aerisThemeListener: null,
    	aerisMetadataListener: null
    }
    
  },
  methods: {
	  
	hasRole: function(contact, role) {
		if (contact.roles) {
			return (contact.roles.indexOf(role) >= 0)
		}
		else {
			return false
		}
	},
	
    handleRefresh: function(data) {
  		console.log("Aeris Metadata Contacts - Refreshing"); 
    	this.visible = false
    	if ((! data) || (! data.detail))  {
    	 return
    	}
    	if (data.detail.contacts) {
    		this.contacts = data.detail.contacts;
    		this.getRolesToDisplay();
    		this.visible = true; 
        } 
  	},
  	
  	ensureTheme: function() {
  	if ((this.theme) && (this.$el.querySelectorAll)) {
  	var elems = this.$el.querySelectorAll('.section-title');
	    var index = 0, length = elems.length;
    	for ( ; index < length; index++) {
        	elems[index].style.color=this.theme.primary
    	}
    }
  	},
  	
  	handleTheme: function(event) {
  		this.$el.querySelector("header").style.background=event.detail.primary
  		this.theme = event.detail;
  		this.ensureTheme();
  	},
  	
  	getRolesToDisplay: function() {
  		var rolesToDisplay = [];
  		if (!this.contacts) {
  			return rolesToDisplay;
  		}
  		
        this.contacts.forEach(
        function(contact) {
          if(contact.roles) {
            contact.roles.forEach(function(role) {
              if(rolesToDisplay.indexOf(role) === -1) {
                rolesToDisplay.push(role);
              }
            });

          } else {
            if(rolesToDisplay.indexOf('pointofcontact') < 0) rolesToDisplay.push('pointofcontact');
          }})
        return rolesToDisplay;
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