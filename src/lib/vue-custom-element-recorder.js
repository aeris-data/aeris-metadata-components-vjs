require("exports-loader?!./l.min.js")
import Vue from 'vue'

import AerisMetadataComponents from '../lib/aeris-metadata-components.js'

const VueCustomElementRecorder = {

  run() {

    ljs.addAliases({
      photobox: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://rawgit.com/aeris-data/Photobox/master/dist/css/photobox.min.css', 'https://rawgit.com/aeris-data/Photobox/master/dist/js/photobox.min.js'],
      dep: ['photobox', 'https://unpkg.com/vuelayers/lib/style.css', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
    })

    ljs.load('dep', function() {

      if (!window.registredAerisElements) {
        window.registredAerisElements = [];
      }

      var timer;

      function stopTimer() {
        clearInterval(timer);
      }

      function registerComponents() {
        console.info("trying to register aeris metadata components");
        console.info("Début registration des aeris metadata components");
        console.info("Registred elements at this time: " + window.registredAerisElements);

        for (let component in AerisMetadataComponents) {
          if (AerisMetadataComponents[component] && component !== 'install') {
            console.log(AerisMetadataComponents[component].name)
            Vue.customElement(AerisMetadataComponents[component].name, AerisMetadataComponents[component]);
          }
          window.registredAerisElements.push(component.name);
        }

        window.registredAerisElements.push('aeris-metadata-components-vjs');
        stopTimer();
        console.info("aeris metadata components registration complete");
      }

      timer = setInterval(function() {
        registerComponents();
      }, 1000);
    })
  }
}

export default VueCustomElementRecorder;
