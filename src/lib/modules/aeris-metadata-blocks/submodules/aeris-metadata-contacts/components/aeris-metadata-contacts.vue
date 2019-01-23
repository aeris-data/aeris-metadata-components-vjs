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
    "publisher": "Publisher",
    "resourceprovider": "Resource provider"

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
    "publisher": "Publicateur",
    "resourceprovider": "Fournisseur de ressources"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="visible" :title="$t('contacts')" icon="fa fa-users">
    <div v-if="roles.length > 0">
      <div v-for="role in roles" :key="role">
        <h5>{{ $t(role) }}</h5>
        <aeris-metadata-contact
          v-for="contact in contacts"
          v-if="hasRole(contact, role)"
          :key="contact.name"
          :contact="contact"
          :lang="lang"
        ></aeris-metadata-contact>
      </div>
    </div>
    <div v-else>
      <aeris-metadata-contact
        v-for="contact in contacts"
        :key="contact.name"
        :contact="contact"
        :lang="lang"
      ></aeris-metadata-contact>
    </div>
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataContact from "./aeris-metadata-contact";
export default {
  name: "aeris-metadata-contacts",

  components: { AerisMetadataLayout, AerisMetadataContact },

  props: {
    lang: {
      type: String,
      default: "en"
    },
    contacts: {
      type: Array,
      default: null
    }
  },

  computed: {
    roles() {
      return this.getRolesToDisplay();
    },
    visible() {
      return this.contacts ? Object.keys(this.contacts).some(d => d != null) : false;
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Contacts - Creating");
    this.$i18n.locale = this.lang;
  },

  methods: {
    hasRole(contact, role) {
      if (contact.roles) {
        return contact.roles.indexOf(role) >= 0;
      } else {
        return false;
      }
    },

    getRolesToDisplay() {
      var rolesToDisplay = [];
      if (!this.contacts) {
        return rolesToDisplay;
      }

      this.contacts.forEach(function(contact) {
        if (contact.roles) {
          contact.roles.forEach(function(role) {
            if (rolesToDisplay.indexOf(role) === -1) {
              rolesToDisplay.push(role);
            }
          });
        }
      });
      return rolesToDisplay;
    }
  }
};
</script>
