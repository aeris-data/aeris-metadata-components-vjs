<template>
  <section><aeris-metadata-contacts :contacts="contacts"></aeris-metadata-contacts></section>
</template>

<script>
import AerisMetadataContacts from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-contacts/components/aeris-metadata-contacts.vue";
export default {
  name: "aeris-metadata-contacts-test",
  components: { AerisMetadataContacts },
  data() {
    return {
      contacts: [
        {
          name: "Nicolas PASCAL",
          email: "nicolas.pascal@icare.univ-lille1.fr",
          organisation: "CDS AERIS/ICARE",
          comment: {
            DEFAULT_VALUE_KEY: "Data and Metadata management at the Data and Services Center"
          },
          address: null,
          roles: ["pointofcontact", "metadatapointofcontact", "resourceprovider"],
          orcId: ""
        },
        {
          name: "AERIS/ICARE Helpdesk",
          email: "contact@icare.univ-lille1.fr",
          organisation: "CDS AERIS/ICARE",
          comment: {
            DEFAULT_VALUE_KEY: "Helpdesk of the Data and Services Center"
          },
          address: null,
          roles: ["metadatapointofcontact"],
          orcId: ""
        },
        {
          name: "Jacques Pelon",
          email: "jacques.pelon@latmos.ipsl.fr",
          organisation: "LATMOS-Laboratoire Atmosphères, Milieux, Observations Spatiales",
          comment: {
            DEFAULT_VALUE_KEY: "Principal Investigator of the Instrument"
          },
          address: null,
          roles: ["pointofcontact", "principalinvestigator"],
          orcId: ""
        },
        {
          name: "Jacques Pelon",
          email: "jacques.pelon@latmos.ipsl.fr",
          organisation: "LATMOS-Laboratoire Atmosphères, Milieux, Observations Spatiales",
          comment: {
            DEFAULT_VALUE_KEY: "Principal Investigator of the Station"
          },
          address: null,
          roles: ["pointofcontact"],
          orcId: ""
        },
        {
          name: "Magali Garracio",
          email: "magali.garracio@ipev.fr",
          organisation: "IPEV-Institut polaire français Paul-Emile Victor",
          comment: {
            DEFAULT_VALUE_KEY: "Station Technical Contact"
          },
          address: null,
          roles: ["pointofcontact"],
          orcId: ""
        }
      ]
    };
  }
};
</script>

<style scoped></style>
