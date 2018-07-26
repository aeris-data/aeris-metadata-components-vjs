<i18n>
{
  "en": {
    "doi": "DOI",
    "citation": "Citation"

  },
  "fr": {
    "doi": "DOI",
    "citation": "Citation"
  }
}
</i18n>

<template>
<aeris-metadata-layout v-if="visible">
  <div class="metadata-doi-description" v-if="doi">
    <h5 v-if="doi">{{$t('doi')}}:</h5>{{doi}}</div>
  <div class="metadata-doi-description" v-if="citation">
    <h5 v-if="citation">{{$t('citation')}}:</h5>1{{citation}}</div>
</aeris-metadata-layout>
</template>
<script>
export default {

  name: 'aeris-metadata-doi',

  props: {
    lang: {
      type: String,
      default: 'en'
    },
    doi: {
      type: String,
      default: null
    },
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value
    },
    doiVal(value) {
      this.visible = false;
      this.citation = '';
      if (this.doiVal) {
        var url = 'https://data.datacite.org/text/x-bibliography;style=apa/' + this.doi;
        console.log("url")
        console.log(url)
        this.$http.get(url).then((response) => {
          this.handleSuccess(response)
        }, (response) => {
          this.handleError(response)
        });
        this.visible = true;
      }
    }
  },

  destroyed: function() {
    document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
    this.aerisMetadataListener = null;
  },

  created: function() {
    this.doiVal=this.doi
    console.log("Aeris Metadata Doi - Creating");
    this.$i18n.locale = this.lang
    //this.aerisMetadataListener = this.handleRefresh.bind(this)
    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
  },

  data() {
    return {
      visible: false,
      doiVal: null,
      citation: null,
      aerisMetadataListener: null
    }
  },

  methods: {

    handleRefresh: function(data) {
      console.log("Aeris Metadata Citation - Refreshing");
      this.visible = false
      if ((!data) || (!data.detail)) {
        return
      }
      this.platforms = [];
      if (this.doi) {
        this.visible = true;
        this.doiVal = this.doi;
      } else {
        this.visible = false;
        //this.visible = true;
        //this.doi = "10.25326/1";
      }
    },

    handleSuccess: function(response) {
      console.log(response.data.trim())
      this.citation = response.data.trim();
    },

    handleError: function(response) {},
  }
}
</script>

<style>
 .aeris-metadata-doi-host {
        display: block;
        transition: 0.6s
    }

    .metadata-doi-container {
        border: 1px solid #bbb;
        overflow: hidden
    }
    .metadata-doi-container header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: nowrap row;
        padding: 10px
    }
    .metadata-doi-container header h5 {
        display: inline;
        margin: 0;
         color: #475053
    }

    .metadata-doi-container header span {
        color: #475053
    }
    .metadata-doi-container header input {
        width: 100%;
        padding: 2px 0;
        font-size: 0.83em;
        font-weight: bold;
        color: #4765A0;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd
    }
    .metadata-doi-container header i {
        cursor: pointer;
        color: #999
    }
    .metadata-doi-container header i:hover {
        opacity: 0.6
    }

    .metadata-doi-description {
    	text-align:justify;
    }

    .metadata-doi-container article {
        display: none;
        padding: 10px;
        border-top: 1px solid #ddd
    }
    .metadata-doi-container article h5 {
        margin: 5px 0;
        color:  #4765A0
    }
    .metadata-doi-container article p {
        margin: 0
    }
    .metadata-doi-container article a {
        color: #3498db
    }
    .metadata-doi-container.showBody article {
        display: block
    }
    .metadata-doi-container.showBody .fa-chevron-down {
        transform: rotate(180deg)
    }
    .metadata-doi-container .fa-chevron-down {
        transition: 0.3s
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }

    .metadata-d-container header {
        background-color: #fff
    }

 </style>
