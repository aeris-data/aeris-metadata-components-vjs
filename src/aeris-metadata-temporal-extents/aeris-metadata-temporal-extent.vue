<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "fr": {
    "hello": "Bonjour le monde！"
  }
}
</i18n>

<template>
<span class="aeris-metadata-temporal-extent-host" v-if="computedVisible">
<div class="metadata-temporal-container">
        <article class="tempExt">
          <div class="metadata-temporal">
            <div>
              <span>{{formatedBegin}}</span>
              <i class="fa fa-long-arrow-right"></i>
              <span>{{formatedEnd}}</span>
            </div>
            <div class="metadata-temporal-description" v-if="comment">
              <aeris-metadata-international-field :content="comment" :lang="lang" no-label-float></aeris-metadata-international-field>
            </div>
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
    begin:  {
      type: String,
      default: ''
    },
    end:  {
      type: String,
      default: ''
    },
    comment: {
      type: String,
      default: ''
    }
     
  },
  
   
  watch: {
    lang (value) {
	      this.$i18n.locale = value
    }
  },
  
  mounted: function () {
   this.$i18n.locale = this.lang
  },
  
  computed: {
 formatedBegin: function() {
 	return this.formatDate(this.begin)
  },
  
  formatedEnd: function() {
 	return this.formatDate(this.end)
  },
  
  computedVisible: function() {
  	if (this.visible===false) {
  		return false;
  	}
  	if ((this.begin ==="") && (this.end ==="")) {
  		return false;
  	}
  	return true;
  }
  
  
  },
  
  methods: {
    formatDate: function(date) {
            return date ? (date.toLowerCase() === 'now') ? moment().format('LL') : moment(date, 'YYYY-MM-DD').format('LL') : '';
  }
  }
}
</script>

<style>
   .aeris-metadata-temporal-extent-host {
        display: block;
        transition: 0.6s
    }
    .metadata-temporal-container {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 10px;
        border-left: 1px solid
    }
    .metadata-temporal-container span {
        display: inline-block;
        position: relative;
        height: 20px;
        line-height: 20px;
        font-size: 12px
    }
    .metadata-temporal-container i {
        margin: 0 2px;
        color: var(--main-color, #4765A0)
    }
    .metadata-temporal-container paper-input {
        display: inline-block
    }
    .metadata-temporal-container .metadata-temporal-description {
        padding-left: 10px;
        border-left: 1px solid #bbb;
        font-size: 0.8em
    }
    .tempExt {
        width: 100%;
        display: flex;
        align-items: center;
        transition: 0.6s
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }
</style>