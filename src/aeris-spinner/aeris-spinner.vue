<template>
<span class="aeris-spinner-host"  v-if="visible">
   <div class="aeris-spinner-container">
      <div id="aerisSpinner" class="aeris__spinner" :class="sizeClass">
        <span></span>
      </div>
      <div class="aeris-spinner-label"><slot>  </slot></div>
    </div>
</span>
</template>

<script>
export default {
  props: {
  	size:  {
      type: String,
      default: 'big'
    },
     visible: {
       type: Boolean,
       default: true
     }
  },
  data () {
   return {
     
    }
  },
 
  computed: {
   sizeClass: function() {
   if (!this.size) {
   	return "";
   }
   if (this.size.toLowerCase()=="large") {
   	return "big";
   }
   if (this.size.toLowerCase()=="small") {
   	return "small";
   }
  }
  }
}
</script>

<style>
    .aeris-spinner-host {
        display: inline-block
    }
    .aeris-spinner-host div {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    .aeris-spinner-container {
        position: relative;
        z-index: 999;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: #4765A0;
        color: var(--spinner-main-color, #4765A0);
        font-size: 16px
    }
    .aeris-spinner-label {
        margin-left: 10px !important
    }
    .aeris__spinner {
        position: relative;
        width: 30px;
        height: 30px;
        margin: 5px;
        font-weight: 600
    }
    .aeris__spinner.small {
        width: 15px;
        height: 15px
    }
    .aeris__spinner.small span {
        width: 10px;
        height: 10px
    }
    .aeris__spinner.big {
        width: 60px;
        height: 60px
    }
    .aeris__spinner.big span {
        width: 60px;
        height: 60px
    }
    .aeris__spinner span {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px
    }
    .aeris__spinner:not(:required) span {
        content: '';
        border-radius: 50%;
        border: 5px solid transparent;
        border-top-color: #4765A0;
        border-top-color: var(--spinner-main-color, #4765A0);
        border-bottom-color: #4765A0;
        border-bottom-color: var(--spinner-main-color, #4765A0);
        animation: spinner .8s ease infinite;
        -webkit-animation: spinner .8s ease infinite
    }
    .aeris__spinner.small:not(:required) span {
        border-width: 2px
    }
    .aeris__spinner.big:not(:required) span {
        border-width: 8px
    }
    @-webkit-keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    @keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
</style>