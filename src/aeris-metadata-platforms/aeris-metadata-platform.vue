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
<span class="aeris-metadata-platform-host" v-show="visible">

 <div class="aeris-plateform-container" v-bind:class="{ showPlateformBody: deployed }">
      <header v-on:click="deployed = !deployed">
        <h5>{{value.name}}</h5>
        <i class="chevron" :class="openIconClass"></i>
      </header>
      <article class="platform-collapsable-part">
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
      default: 'en'
    },
    visible: {
    	type: Boolean,
     	 default: true
    },
    platform: {
    	type: String,
    	default: null
    },
    openIconClass:  {
        type: String,
        default: 'fa fa-chevron-down'
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
	   this.ensureTheme();
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
	   this.theme = event.detail;
	   this.$el.querySelector("header").style.background=this.theme.primary;
	   this.$el.querySelector("header h5").style.color = this.colorLuminance(this.theme.primary, 5);
	   this.ensureTheme();
  	},
	
	ensureTheme: function() {
		if (this.theme) {
			var elems = this.$el.querySelectorAll('article h5');
			var index = 0, length = elems.length;
		  	for ( ; index < length; index++) {
		      	elems[index].style.color=this.theme.primary
		  	}
		}
	},
    
  	colorLuminance: function (hex, lum) {
  		//from https://www.sitepoint.com/javascript-generate-lighter-darker-color/
  		// validate hex string
  		hex = String(hex).replace(/[^0-9a-f]/gi, '');
  		if (hex.length < 6) {
  			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  		}
  		lum = lum || 0;
  		// convert to decimal and change luminosity
  		var rgb = "#", c, i;
  		for (i = 0; i < 3; i++) {
  			c = parseInt(hex.substr(i*2,2), 16);
  			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
  			rgb += ("00"+c).substr(c.length);
  		}
  		return rgb;
  	}
  	
  }
}
</script>

<style>
	.aeris-plateform-container .platform-collapsable-part {
	    display: none;
	    transition: 0.3s
	}
	
	.aeris-plateform-container.showPlateformBody .platform-collapsable-part {
	    display: block;
	    transition: 0.3s
	}
	.aeris-plateform-container.showPlateformBody .chevron {
	    transform: rotate(180deg)
	}
	.aeris-plateform-container .chevron {
	    transition: 0.3s
	}
	.aeris-plateform-container{
        border: 1px solid #ddd;
    }
    .aeris-plateform-container .platform-collapsable-part {
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>	