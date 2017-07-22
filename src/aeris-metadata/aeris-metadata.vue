<template>
<span class="aeris-metadata-host" v-if="visible">
 <div id="aerisMetadataContent" class="aeris-metadata_content grid">
 	  {{content}}
      <slot></slot>
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
    service: {
    	type: String,
     	 default: ''
    },
    identifier: {
    	type: String ,
     	 default: ''
    },
    program:  {
    	type: String ,
     	 default: ''
    } 
  },
  
   
  watch: {
    lang (value) {
	      //this.$i18n.locale = value
    },
    
    identifier() {
    	this.refresh();
    },
    service() {
    	this.refresh();
    }
  },
  
  mounted: function () {
   //this.$i18n.locale = this.lang;
  	this.refresh();
  },
  
  computed: {
  
  },
  
  methods: {
  
  refresh: function() {
  	   if (this.service && this.identifier) {
	   var url = this.service+'/'+this.identifier;
	   if (this.service.endsWith('/')) {
	   	 url = this.service+this.identifier;
	   }
   	   this.$http.get(url).then((response)=>{this.handleSuccess(response)},(response)=>{this.handleError(response)});
   	   }
   },
  
  replaceAll: function(string, target, replacement) {
        return string.split(target).join(replacement);
      },
      
  handleSuccess : function(response) {
        var tempString = JSON.stringify(response.data);
        console.log("tempString: "+tempString)
        tempString = this.replaceAll(tempString, '"fre"', '"fr"');
        tempString = this.replaceAll(tempString, '"eng"', '"en"');
        this.displayableData = tempString;
        var data = JSON.parse(tempString);
        this.lang = this.lang || this._data.language;
        this.sendDataToComponents(data);
  },
  
  sendDataToComponents: function(data) {
  		console.log("Event sent:refreshed");
  		var event = new CustomEvent('aerisMetadataRefreshed', {detail: data, lang: this.lang});
  		document.dispatchEvent(event);
  		
  },
      
  handleError: function(response) {
  		console.log("Aeris-Metadata - Error while accessing server:"); 
        var error = response.status;
        var message = response.statusText;
        if(!error) message = 'Can\'t connect to the server';
        console.log('Error ' + error + ': ' + message);
 }
  
  },
   data () {
    return {
    	content:'',
    	displayableData:''
    }
  }
}
</script>

<style>
   .aeris-metadata-host {
        display: block;
        font-size: 14px
    }
    .aeris-metadata-host * {
        box-sizing: border-box
    }
</style>