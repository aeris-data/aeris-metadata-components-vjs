<i18n>
{
  "en": {
    "readingInformation": "How to read the file ?",
    "description": "Description",
    "temporalInterval": "Temporal interval"
  },
  "fr": {
    "readingInformation": "Comment lire le fichier ?",
    "description": "Description",
    "temporalInterval": "Intervalle temporel"
  }
}
</i18n>

<template>
<span class="aeris-metadata-format-host" v-show="visible">

 <div class="metadata-format-container" v-bind:class="{ showBody: deployed }">
      <header class="format-header">
        <span><h5 class="format-name">{{value.name}}</h5><span v-if="value.version" class="metadata-format-header"> (v.{{value.version}})</span></span>
        <i class="fa fa-chevron-down" v-on:click="deployed = !deployed" v-if="hasMore"></i>
      </header>
     <article  v-if="hasMore">
        <div class="metadata-format-description">
          <h5 v-if="value.description">{{$t('description')}}:</h5>
          <aeris-metadata-international-field label="Description" :content="JSON.stringify(value.description)" :lang="lang" no-label-float convertlinks="true"></aeris-metadata-international-field>
        </div>
        <div class="metadata-format-reading">
          <h5 v-if="value.readingInformation">{{$t('readingInformation')}}</h5>
          <p>
            <aeris-metadata-international-field :content="JSON.stringify(value.readingInformation)" :lang="lang" no-label-float convertlinks="true"></aeris-metadata-international-field>
          </p>
        </div>
        <div class="metadata-format-temporal">
          <h5 v-if="value.temporalInterval">{{$t('temporalInterval')}}:</h5>
          <aeris-metadata-temporal-extent :begin="value.readingInformation.beginDate" :end="value.readingInformation.endDate" :comment="value.readingInformation.comment" :lang="lang" no-delete></aeris-metadata-temporal-extent>
        </div>
      </article>
    </div>

</span>
</template>

<script>
export default {
  props: {
  	lang:  {
      type: String,
      default: 'en'
    },
    visible: {
    	type: Boolean,
     	 default: true
    },
    format: {
    	type: String,
    	default: null
    }
  },
  
  watch: {
    lang (value) {
	      this.$i18n.locale = value
    }
  },
  
  mounted: function () {
   this.$i18n.locale = this.lang
  	var event = new CustomEvent('aerisThemeRequest', {});
  	document.dispatchEvent(event);
  },
  
   updated: function() {
  	this.ensureTheme()
  },
  
  destroyed: function() {
  	document.removeEventListener('aerisTheme', this.aerisThemeListener);
  	this.aerisThemeListener = null;
  },
  
  created: function () {
  console.log("Aeris Metadata Format - Creating");
  this.themeListener = this.handleTheme.bind(this);
  document.addEventListener('aerisTheme', this.themeListener);
  },
  
  
  computed: {
  
  	value: function(){
  		if (this.format == null) {
  			return {};
  		}
  		else {
  		console.log(this.format)
  			return JSON.parse(this.format); 
  		}
  	},
  	
  	 hasMore: function() {
        return (this.value.description || this.value.readingInformation || this.value.temporalInterval) ? true : false;
      }
  
  },
  
  data () {
    return {
    	deployed : false,
    	theme: null,
    	themeListener: null
    }
  },
  
  methods: {
  
   handleTheme: function(event) {
  		this.theme = event.detail
  		this.ensureTheme();
  	},
  	
  	ensureTheme: function() {
  	if (this.theme) {
//  	var elems = this.$el.querySelectorAll('article h5');
//	    var index = 0, length = elems.length;
//    	for ( ; index < length; index++) {
//        	elems[index].style.color=this.theme.primary
//    	}
      }
  	}
  }
}
</script>

<style>
    .aeris-metadata-format-host {
        display: block;
        margin: 10px 0;
        transition: 0.6s
    }
    .aeris-metadata-international-field {
        width: 100%
    }
    
    .aeris-metadata-format-host .format-header {
    	background-color: white;
    }
    
    .metadata-format-container {
        border: 1px solid #bbb;
        overflow: hidden
    }
    .metadata-format-container header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: nowrap row;
        padding: 10px
    }
    .metadata-format-container header h5.format-name {
        display: inline;
        margin: 0;
         color: #475053
    }
    
    .metadata-format-container header span {
        color: #475053
    }
    .metadata-format-container header input {
        width: 100%;
        padding: 2px 0;
        font-size: 0.83em;
        font-weight: bold;
        color: #4765A0;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd
    }
    .metadata-format-container header i {
        cursor: pointer;
        color: #999
    }
    .metadata-format-container header i:hover {
        opacity: 0.6
    }
    .metadata-format-container article {
        display: none;
        padding: 10px;
        border-top: 1px solid #ddd
    }
    .metadata-format-container article h5 {
        margin: 5px 0;
        color:  #4765A0
    }
    .metadata-format-container article p {
        margin: 0
    }
    .metadata-format-container article a {
        color: #3498db
    }
    .metadata-format-container.showBody article {
        display: block
    }
    .metadata-format-container.showBody .fa-chevron-down {
        transform: rotate(180deg)
    }
    .metadata-format-container .fa-chevron-down {
        transition: 0.3s
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }
    
    .metadata-format-container header {
        background-color: #fff
    }
</style>