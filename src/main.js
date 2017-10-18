require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueLayers from 'vuelayers'

Vue.use(VueLayers)

console.log("UUUU")

import AerisMetadataInternationalField from './aeris-metadata-international-field/aeris-metadata-international-field.vue'
import AerisMetadataContact from './aeris-metadata-contacts/aeris-metadata-contact.vue'
import AerisMetadataContacts from './aeris-metadata-contacts/aeris-metadata-contacts.vue'
import AerisMetadataTemporalExtent from './aeris-metadata-temporal-extents/aeris-metadata-temporal-extent.vue'
import AerisMetadataTemporalExtents from './aeris-metadata-temporal-extents/aeris-metadata-temporal-extents.vue'
import AerisMetadataSpatialExtents from './aeris-metadata-spatial-extents/aeris-metadata-spatial-extents.vue'
import AerisMetadata from './aeris-metadata/aeris-metadata.vue'
import AerisMetadataFormats from './aeris-metadata-formats/aeris-metadata-formats.vue'
import AerisMetadataFormat from './aeris-metadata-formats/aeris-metadata-format.vue'
import AerisMetadataDescription from './aeris-metadata-description/aeris-metadata-description.vue'
import AerisMetadataInformationLink from './aeris-metadata-information-links/aeris-metadata-information-link.vue'
import AerisMetadataInformationLinks from './aeris-metadata-information-links/aeris-metadata-information-links.vue'
import AerisMetadataDataLinks from './aeris-metadata-data-links/aeris-metadata-data-links.vue'
import AerisMetadataInformation from './aeris-metadata-information/aeris-metadata-information.vue'
import AerisMetadataPublications from './aeris-metadata-publications/aeris-metadata-publications.vue'
import AerisMetadataPublication from './aeris-metadata-publications/aeris-metadata-publication.vue'
import AerisMetadataParameters from './aeris-metadata-parameters/aeris-metadata-parameters.vue'
import AerisMetadataParameter from './aeris-metadata-parameters/aeris-metadata-parameter.vue'
import AerisMetadataPlatforms from './aeris-metadata-platforms/aeris-metadata-platforms.vue'
import AerisMetadataPlatform from './aeris-metadata-platforms/aeris-metadata-platform.vue'
import AerisMetadataQuicklookGallery from './aeris-metadata-quicklook-gallery/aeris-metadata-quicklook-gallery.vue'
import AerisMetadataDoi from './aeris-metadata-doi/aeris-metadata-doi.vue'
import AerisMetadataDatapolicy from './aeris-metadata-datapolicy/aeris-metadata-datapolicy.vue'


ljs.addAliases({
	photobox: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://rawgit.com/aeris-data/Photobox/master/dist/css/photobox.min.css', 'https://rawgit.com/aeris-data/Photobox/master/dist/js/photobox.min.js'],
	dep: ['photobox', 'https://unpkg.com/vuelayers/lib/style.css', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
})
ljs.load('dep', function() {
	
	function registerElement(name, component) {
		if (!window.registredAerisElements) {
			window.registredAerisElements = [];
		}
		if (window.registredAerisElements.indexOf(name) < 0) {
			Vue.customElement(name, component);
			window.registredAerisElements.push(name)
		}
	}
	
	console.info("Début registration des custom elements metadata")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	
	registerElement('aeris-metadata-international-field', AerisMetadataInternationalField);
	registerElement('aeris-metadata-contact', AerisMetadataContact);
	registerElement('aeris-metadata-contacts', AerisMetadataContacts);
	registerElement('aeris-metadata-temporal-extent', AerisMetadataTemporalExtent);
	registerElement('aeris-metadata-temporal-extents', AerisMetadataTemporalExtents);
	registerElement('aeris-metadata-spatial-extents', AerisMetadataSpatialExtents);
	registerElement('aeris-metadata-formats', AerisMetadataFormats);
	registerElement('aeris-metadata-format', AerisMetadataFormat);
	registerElement('aeris-metadata-description', AerisMetadataDescription);
	registerElement('aeris-metadata', AerisMetadata);
	registerElement('aeris-metadata-information-link',AerisMetadataInformationLink);
	registerElement('aeris-metadata-information-links',AerisMetadataInformationLinks);
	registerElement('aeris-metadata-data-links',AerisMetadataDataLinks);
	registerElement('aeris-metadata-information',AerisMetadataInformation);
	registerElement('aeris-metadata-publications',AerisMetadataPublications);
	registerElement('aeris-metadata-publication',AerisMetadataPublication);
	registerElement('aeris-metadata-parameters',AerisMetadataParameters);
	registerElement('aeris-metadata-parameter',AerisMetadataParameter);
	registerElement('aeris-metadata-platforms',AerisMetadataPlatforms);
	registerElement('aeris-metadata-platform',AerisMetadataPlatform);
	registerElement('aeris-metadata-quicklook-gallery',AerisMetadataQuicklookGallery);
	registerElement('aeris-metadata-doi', AerisMetadataDoi);
	registerElement('aeris-metadata-datapolicy', AerisMetadataDatapolicy);
	
	window.registredAerisElements.push('aeris-metadata-components-vjs')
})


