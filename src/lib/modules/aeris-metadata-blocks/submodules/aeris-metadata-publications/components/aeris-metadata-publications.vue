<i18n>
{
  "en": {
    "publications": "Publications"
  },
  "fr": {
    "publications": "Publications"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('publications')" icon="fa fa-bookmark-o">
    <aeris-metadata-publication
      v-for="publication in publications"
      :key="publication.title"
      :publication="JSON.stringify(publication)"
      :language="language"
    />
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";
import AerisMetadataPublication from "../../../../aeris-metadata-blocks/submodules/aeris-metadata-publications/components/aeris-metadata-publication";

export default {
  name: "aeris-metadata-publications",
  components: { AerisMetadataLayout, AerisMetadataPublication },
  props: {
    language: {
      type: String,
      default: "en"
    },
    publications: {
      type: Array,
      default: []
    }
  },

  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    }
  },

  // destroyed: function() {
  //   document.removeEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
  //   this.aerisMetadataListener = null;
  // },

  created() {
    this.publications.forEach(publication => {
      console.log(JSON.stringify(publication));
    });
    this.$i18n.locale = this.language || this.getLanguage;
    // this.aerisMetadataListener = this.handleRefresh.bind(this);
    // document.addEventListener("aerisMetadataRefreshed", this.aerisMetadataListener);
  },

  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    isVisible() {
      return this.publications.length >= 1;
    }
  }
  // data() {
  //   return {
  //     publications: [],
  //     visible: false,
  //     aerisMetadataListener: null
  //   };
  // },
  // methods: {
  //   handleRefresh: function(data) {
  //     this.visible = false;
  //     if (!data || !data.detail) {
  //       return;
  //     }
  //     this.publications = [];
  //     if (data.detail.publications && data.detail.publications.length > 0) {
  //       this.visible = true;
  //       this.publications = data.detail.publications;
  //     } else {
  //       this.visible = false;
  //     }
  //   }
  // }
};
</script>
