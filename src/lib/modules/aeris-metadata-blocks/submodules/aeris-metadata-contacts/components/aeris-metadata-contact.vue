<template>
  <section class="metadata-contact-container">
    <article>
      <div>
        <p class="metadata-contact-name">
          <i class="fa fa-user" />{{ contact.name }}
          <span v-if="contact.organisation">({{ contact.organisation }})</span>
        </p>
      </div>
      <div class="metadata-contact-description">
        <p v-if="contact.email" class="metadata-contact-email">
          <a :href="mailto">{{ contact.email }}</a>
        </p>
        <aeris-metadata-international-field
          v-if="contact.comment"
          :content="contact.comment"
          :language="language"
          no-label-float
        ></aeris-metadata-international-field>
      </div>
    </article>
  </section>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field.vue";
export default {
  name: "aeris-metadata-contact",
  props: {
    language: {
      type: String,
      default: "en"
    },
    contact: {
      type: Object,
      default: null
    }
  },
  components: { AerisMetadataInternationalField },
  computed: {
    mailto() {
      if (this.contact.email) {
        return "mailto:" + this.contact.email;
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.metadata-contact-container {
  display: block;
  font-family: "Open Sans", sans-serif;
  --paper-input-container-focus-color: #666;
  transition: 0.6s;
}
.metadata-contact-container article {
  display: flex;
  flex-direction: column;
}
.metadata-contact-container article p {
  margin: 0 auto;
}
.metadata-contact-container .metadata-contact-name {
  margin: 0;
}
.metadata-contact-container .metadata-contact-name .fa {
  display: inline-block;
  margin-right: 5px;
  width: 1em;
  text-align: center;
}
.metadata-contact-container .metadata-contact-description {
  margin-left: 0.5em;
  padding: 3px 0 0 10px;
  border-left: 1px solid #bbb;
  font-size: 0.8em;
  line-height: 1.5em;
}
.metadata-contact-container a {
  color: #3498db;
  text-decoration: none;
}
</style>
