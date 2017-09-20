<template>
<span class="aeris-metadata-internatinal-field-host"  v-if="visible">
<div class="intl-field-display">
    <span v-if="html" v-html="text"></span>
    <span v-else>
     <span v-if="isLink"><a :href="text" target="_blank" >{{_truncate(text)}}</a></span>
     <span v-else>{{text}}</span>
     </span>
</div>
</span>
</template>

<script>
export default {
  props: {
  	visible: {
    	type: Boolean,
     	 default: true
    },
  	lang:  {
      type: String,
      default: 'en'
    },
    html:  {
      type: Boolean,
      default: false
    },
    convertlinks:  {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
   return {
    }
  },
 
  computed: {
  	 isLink: function () {
      return (this.text.startsWith('http') && this.convertlinks) ? true : false;
    },
    
    text: function () {
    
    	if (!this.content) {
    		return '';
    	}
    	if (this.content=="null") {
    		return '';
    	}
    	if (!this.lang) {
    		return this.content;
    	}
		console.log("content "+this.content);    	
		var json=JSON.parse(this.content)
    	for(var key in json) {
            if(key === 'DEFAULT_VALUE_KEY') {
              /* If there's only a default language */
              return json['DEFAULT_VALUE_KEY'];
            } else if (key.length > 2) {
              /* key = String language in the object */
              newKey = key.substr(0, 2);
              json[newKey] = json[key];
              delete json[key];
            }
          }

          if (json[this.lang]) {
          	return json[this.lang]
          }
          return '';
    }
  },
  
  methods: {
     
      _truncate: function(str) {
        return str.length > 50 ? str.substr(0, 47) + '...' : str;
      }
  }
}
</script>

<style>
 	aeris-metadata-internatinal-field-host {
        display: block
    }
	.intl-field-display a {
        color: #3498db
    }
</style>