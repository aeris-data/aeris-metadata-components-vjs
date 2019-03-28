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
  <aeris-metadata-layout
    v-if="isVisible"
    :title="$t('contacts')"
    :theme="theme"
    :style="applyTheme"
    icon="fas fa-users"
  >
    <div v-if="roles.length > 0">
      <div v-for="role in roles" :key="role">
        <h5 class="primaryTheme">{{ $t(role) }}</h5>
        <aeris-metadata-contact
          v-for="(contact, index) in contacts"
          v-if="hasRole(contact, role)"
          :key="contact.name + index"
          :contact="contact"
          :language="language"
        ></aeris-metadata-contact>
      </div>
    </div>
    <div v-else>
      <aeris-metadata-contact
        v-for="(contact, index) in contacts"
        :key="contact.name + index"
        :contact="contact"
        :language="language"
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
    language: {
      type: String,
      default: "en"
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
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
    isVisible() {
      return this.contacts ? Object.keys(this.contacts).some(d => d != null) : false;
    },
    applyTheme() {
      if (this.theme && this.theme.primaryColor) {
        return {
          "--primaryColor": this.theme.primaryColor
        };
      } else {
        return "";
      }
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
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

<style scoped>
.primaryTheme {
  color: var(--primaryColor);
}
</style>
