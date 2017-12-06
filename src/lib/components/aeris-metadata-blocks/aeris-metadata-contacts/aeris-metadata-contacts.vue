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
<aeris-metadata-layout v-if="visible" :title="$t('contacts')" icon="fa fa-users">
  <div v-if="roles.length>0">
    <div v-for="role in roles">
      <h5>{{$t(role)}}</h5>
      <aeris-metadata-contact v-for="contact in contacts" :key="contact.name" :contact="JSON.stringify(contact)" :lang="lang" v-if="hasRole(contact, role)"></aeris-metadata-contact>
    </div>
  </div>
  <div v-else>
    <aeris-metadata-contact v-for="contact in contacts" :key="contact.name" :contact="JSON.stringify(contact)" :lang="lang"></aeris-metadata-contact>
  </div>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-contacts',

  props: {
    lang: {
      type: String,
      default: 'en'
    }
  },


  watch: {
    lang(value) {
      this.$i18n.locale = value
    }
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Contacts - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  computed: {
    roles: function() {
      return this.getRolesToDisplay();
    },
    noroles: function() {
      if (!this.roles) {
        return false
      }
      if (this.roles.length > 0) {
        return true
      } else {
        return false
      }
    },
    visible() {
      return this.contacts ? Object.keys(this.contacts).some(d => d != null) : false;
    }
  },
  data() {
    return {
      contacts: null,
      aerisMetadataListener: null
    }

  },
  methods: {

    hasRole: function(contact, role) {
      if (contact.roles) {
        return (contact.roles.indexOf(role) >= 0)
      } else {
        return false
      }
    },

    handleRefresh: function(data) {
      console.log("Aeris Metadata Contacts - Refreshing");
      if (data.detail) {
        this.contacts = data.detail.contacts;
        this.getRolesToDisplay();
      }
    },

    getRolesToDisplay: function() {
      var rolesToDisplay = [];
      if (!this.contacts) {
        return rolesToDisplay;
      }

      this.contacts.forEach(
        function(contact) {
          if (contact.roles) {
            contact.roles.forEach(function(role) {
              if (rolesToDisplay.indexOf(role) === -1) {
                rolesToDisplay.push(role);
              }
            });

          } else {
            //if(rolesToDisplay.indexOf('pointofcontact') < 0) rolesToDisplay.push('pointofcontact');
          }
        })
      return rolesToDisplay;
    }
  }
}
</script>
