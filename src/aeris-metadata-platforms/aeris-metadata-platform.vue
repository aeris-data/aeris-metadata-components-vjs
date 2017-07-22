<i18n>
{
  "en": {
    "type": "Type",
    "description": "Description"
  },
  "fr": {
    "type": "Type",
    "description": "Description"
  }
}
</i18n>

<template>
<span class="aeris-metadata-platform-host" v-if="visible">

 <div class="aeris-plateform-container" v-bind:class="{ showPlateformBody: deployed }">
      <header>
        <h5>{{value.name}}</h5>
        <i class="fa fa-chevron-down" v-on:click="deployed = !deployed" v-if="hasMore"></i>
      </header>
      <article class="plateform-body"  v-if="deployed">
        <h5>{{$t('type')}}:</h5>
        <span>{{value.type}}</span>
		<div class="metadata-format-description">
          <h5 v-if="value.description">{{$t('description')}}:</h5>
          <aeris-metadata-international-field label="Description" :content="JSON.stringify(value.description)" :lang="lang" no-label-float convertlinks="true"></aeris-metadata-international-field>
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
      default: 'fr'
    },
    visible: {
    	type: Boolean,
     	 default: true
    },
    platform: {
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
  console.log("Aeris Metadata Platform - Creating");
   this.aerisThemeListener = this.handleTheme.bind(this) 
   document.addEventListener('aerisTheme', this.aerisThemeListener);
  },
  
  
  computed: {
  
   	value: function(){
  		if (this.platform == null) {
  			return {};
  		}
  		else {
  			return JSON.parse(this.platform); 
  		}
  	},
  	
  	 hasMore: function() {
        return (this.value.description || this.value.type) ? true : false;
      }
  
  },
  
  data () {
    return {
    	deployed : false,
    	theme: null,
    	aerisThemeListener: null
    }
  },
  
  methods: {
  
   handleTheme: function(event) {
  		this.theme = event.detail
  		this.ensureTheme();
  	},
  	
  	ensureTheme: function() {
  	if (this.theme) {
    }
  	}
  }
}
</script>

<style>
  .aeris-metadata-platform-host {
        display: block;
        font-family: 'Open Sans', sans-serif;
        margin: 5px 0;
        transition: 0.6s
    }
    
    .aeris-plateform-container header {
        background-color: #fff
    }
    
    .aeris-plateform-container,
    .aeris-plateform-edit-container {
        border: 1px solid #bbb
    }
    .aeris-plateform-container header,
    .aeris-plateform-edit-container header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: nowrap row;
        padding: 10px
    }
    .aeris-plateform-container header h5,
    .aeris-plateform-edit-container header h5 {
        display: inline;
        margin: 0
    }
    .aeris-plateform-container header i,
    .aeris-plateform-edit-container header i {
        cursor: pointer;
        color: #999
    }
    .aeris-plateform-container header i:hover,
    .aeris-plateform-edit-container header i:hover {
        opacity: 0.6
    }
    .aeris-plateform-container header .fa-chevron-down,
    .aeris-plateform-edit-container header .fa-chevron-down {
        transition: transform 0.3s
    }
    .aeris-plateform-container article.plateform-body,
    .aeris-plateform-edit-container article.plateform-body {
        display: none;
        padding: 10px;
        border-top: 1px solid #ddd
    }
    
    div.aeris-plateform-container header h5 {
		color: #475053
	}
    .aeris-plateform-container article.plateform-body h5,
    .aeris-plateform-edit-container article.plateform-body h5 {
        margin: 10px 0 5px;
        text-transform: capitalize;
        color: #475053
    }
    .showPlateformBody article.plateform-body {
        display: block
    }
    .showPlateformBody .fa-chevron-down {
        transform: rotate(180deg)
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }
    .metadata-text-btn {
        margin: 5px 0;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        color: #475053;
        cursor: pointer
    }
    .metadata-text-btn:hover {
        opacity: 0.6
    }
    .flash {
        box-shadow: 0 0 10px 2px #475053
    }
</style>