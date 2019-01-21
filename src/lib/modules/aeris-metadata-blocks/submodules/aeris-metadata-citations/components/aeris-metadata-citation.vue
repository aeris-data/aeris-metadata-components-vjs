<template>
  <div class="aeris-metadata-citation-host">
    <p>{{ citationBody }} <a :href="citationLink">{{ citationLink }}</a></p>
  </div>
</template>

<script>
export default {
  name: "aeris-metadata-citation",
  props: {
    doi: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      citationBody: "",
      citationLink: ""
    };
  },
  created() {
    this.getCitation();
  },
  methods: {
    getCitation() {
      let url =
        "https://data.datacite.org/text/x-bibliography;style=apa/" + this.doi;
      this.$http.get(url).then(
        response => {
          this.handleSuccess(response);
        },
        response => {
          this.handleError(response);
        }
      );
    },
    handleSuccess(response) {
      this.parseCitation(response.body);
    },
    handleError(response) {
      console.log("error citation : ", response);
    },
    parseCitation(citation) {
      let tmp = citation.split("http");
      this.citationBody = this.decodeString(tmp[0].trim());
      this.citationLink = "http" + tmp[1];
    },
    decodeString(str) {
      const parser = new DOMParser;
      const dom = parser.parseFromString(str,"text/html")
      return dom.body.textContent
    }
  }
};
</script>
