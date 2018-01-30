<i18n>
{
  "en": {
    "formats": "Formats",
    "readingInformation": "How to read the file ?",
    "description": "Description",
    "temporalInterval": "Temporal interval"
  },
  "fr": {
    "formats": "Formats",
    "readingInformation": "Comment lire le fichier ?",
    "description": "Description",
    "temporalInterval": "Intervalle temporel"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-show="visible" :title="$t('formats')" :type="type" :isVisible="visible" :order="order" icon="fa fa-files-o">
  <aeris-metadata-list-definition-multiple-layout :items="JSON.stringify(items)">
    <div slot="item" slot-scope="props" v-if="props.item.temporalInterval">
      <dt>{{props.item.title}}</dt>
      <dd>
        <aeris-metadata-temporal-extent :begin="props.item.temporalInterval.beginDate" :end="props.item.temporalInterval.endDate" :comment="props.item.temporalInterval.comment" :lang="lang" no-delete></aeris-metadata-temporal-extent>
      </dd>
    </div>
  </aeris-metadata-list-definition-multiple-layout>

</aeris-metadata-layout>
</template>

<script>
export default {

  name: 'aeris-metadata-formats',

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
    console.log("Aeris Metadata Temporal Extents - Creating");
    this.$i18n.locale = this.lang
    this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  data() {
    return {
      type: 'formats',
      formats: [],
      visible: false,
      aerisMetadataListener: null
    }
  },

  computed: {

    items() {
      return this.formats.map(format => {
        return {
          icon: 'fa fa-file',
          value: [{
              title: "Format",
              text: format.name
            },
            {
              title: this.$i18n.t('description'),
              internationalText: format.description
            },
            {
              title: this.$i18n.t('readingInformation'),
              internationalText: format.readingInformation
            },
            {
              title: this.$i18n.t('temporalInterval'),
              temporalInterval: format.temporalInterval ? {
                beginDate: format.readingInformation.beginDate,
                endDate: format.readingInformation.endDate,
                comment: format.readingInformation.comment
              } : null
            }
          ]
        }
      });
    }
  },

  methods: {

    handleRefresh: function(data) {
      console.log("Aeris Metadata Formats - Refreshing");
      this.formats = [];
      this.visible = data.detail && data.detail.formats ? true : false;
      if (this.visible) {
        this.formats = data.detail.formats;
      }
    }
  }
}
</script>
