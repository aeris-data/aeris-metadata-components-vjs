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
<aeris-metadata-layout data-aeris-metadata-contacts v-show="visible" :title="$t('contacts')" :type="type" :isVisible="visible" :order="order" icon="fa fa-users">
  <div v-if="roles.length>0" v-for="role in roles">
    <header>
      <h5>{{$t(role)}}</h5>
    </header>
    <aeris-metadata-list-definition-multiple-layout :items="JSON.stringify(toItems(contacts, role))"></aeris-metadata-list-definition-multiple-layout>
  </div>
  <aeris-metadata-list-definition-multiple-layout v-else :items="JSON.stringify(items)"></aeris-metadata-list-definition-multiple-layout>
</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-contacts',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    order: {
      type: Number
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
    },
    items() {
      return this.contacts.map(contact => {
        return {

        }
      })
    }
  },
  data() {
    return {
      type: 'contacts',
      aerisMetadataListener: null,
      contacts: []
    }

  },
  methods: {

    toItems(contacts, role) {
      return this.contacts.filter(contact => this.hasRole(contact, role)).map(contact => {
        return {
          icon: 'fa fa-user',
          value: [{
            title: "Name",
            text: contact.name
          }, {
            title: "Organisation",
            text: contact.organisation
          }, {
            title: "Email",
            text: contact.email
          }, {
            title: "Commentaire",
            internationalText: contact.comment
          }]
        }
      });
    },

    hasRole: function(contact, role) {
      if (contact.roles) {
        return (contact.roles.indexOf(role) >= 0)
      } else {
        return false
      }
    },

    handleRefresh: function(data) {
      console.log("Aeris Metadata Contacts - Refreshing");
      if (data.detail && data.detail.contacts && data.detail.contacts.length > 0) {
        this.contacts = data.detail.contacts;
        if (this.visible) {
          this.getRolesToDisplay();
        }
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

<style>
[data-aeris-metadata-contacts] h5 {
  padding: 32px 0;
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
  color: #333;
}
</style>
