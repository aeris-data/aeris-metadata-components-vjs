<template>
  <span class="aeris-metadata-contact-host">
    <div class="metadata-contact-container">
      <article>
        <div>
          <p class="metadata-contact-name"><i class="fa fa-user"/>{{ value.name }} <span v-if="value.organisation">({{ value.organisation }})</span></p>
        </div>
        <div class="metadata-contact-description">
          <p v-if="value.email" class="metadata-contact-email"><span>{{antiBotEmailFormat.name}}<span class="hide">Dear bot, you will not collect my email</span>@<span class="hide">No,No,No</span>{{antiBotEmailFormat.domain}}</span></p>
          <aeris-metadata-international-field v-if="value.comment" :content="JSON.stringify(value.comment)" :lang="lang" no-label-float/>
        </div>
      </article>
    </div>
  </span>
</template>

<script>
export default {
  name: "aeris-metadata-contact",

  props: {
    lang: {
      type: String,
      default: "en"
    },
    contact: {
      type: String,
      default: ""
    }
  },

  data() {
    return {};
  },

  computed: {
    value: function() {
      return JSON.parse(this.contact);
    },

    antiBotEmailFormat() {
      if (this.value.email) {
        let email = this.value.email;
        let name = email.substring(0, email.lastIndexOf("@"));
        let domain = email.substring(email.lastIndexOf("@") + 1);
        return {
          name: name,
          domain: domain
        };
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
.aeris-metadata-contact-host {
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
.hide {
  display: none;
}
</style>
