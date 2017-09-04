require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);


import AerisMetadataInternationalField from './aeris-metadata-international-field/aeris-metadata-international-field.vue'
import AerisMetadataContact from './aeris-metadata-contacts/aeris-metadata-contact.vue'
import AerisMetadataContacts from './aeris-metadata-contacts/aeris-metadata-contacts.vue'
import AerisMetadataTemporalExtent from './aeris-metadata-temporal-extents/aeris-metadata-temporal-extent.vue'
import AerisMetadataTemporalExtents from './aeris-metadata-temporal-extents/aeris-metadata-temporal-extents.vue'
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


ljs.addAliases({
	photobox: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://rawgit.com/aeris-data/Photobox/master/dist/css/photobox.min.css', 'https://rawgit.com/aeris-data/Photobox/master/dist/js/photobox.min.js'],
	dep: ['photobox', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
})
ljs.load('dep', function() {
	
	if (!window.registredAerisElements) {
		window.registredAerisElements = [];
	}
	
	console.info("Début registration des custom elements metadata")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	
	Vue.customElement('aeris-metadata-international-field', AerisMetadataInternationalField);
	window.registredAerisElements.push('aeris-metadata-international-field')
	
	Vue.customElement('aeris-metadata-contact', AerisMetadataContact);
	window.registredAerisElements.push('aeris-metadata-contact')
	
	Vue.customElement('aeris-metadata-contacts', AerisMetadataContacts);
	window.registredAerisElements.push('aeris-metadata-contacts')
	
	Vue.customElement('aeris-metadata-temporal-extent', AerisMetadataTemporalExtent);
	window.registredAerisElements.push('aeris-metadata-temporal-extent')

	Vue.customElement('aeris-metadata-temporal-extents', AerisMetadataTemporalExtents);
	window.registredAerisElements.push('aeris-metadata-temporal-extents')
	
	Vue.customElement('aeris-metadata-formats', AerisMetadataFormats);
	window.registredAerisElements.push('aeris-metadata-formats')
	
	Vue.customElement('aeris-metadata-format', AerisMetadataFormat);
	window.registredAerisElements.push('aeris-metadata-format')
	
	Vue.customElement('aeris-metadata-description', AerisMetadataDescription);
	window.registredAerisElements.push('aeris-metadata-description')
	
	Vue.customElement('aeris-metadata', AerisMetadata);
	window.registredAerisElements.push('aeris-metadata')
	
	Vue.customElement('aeris-metadata-information-link',AerisMetadataInformationLink);
	window.registredAerisElements.push('aeris-metadata-information-link')
	
	Vue.customElement('aeris-metadata-information-links',AerisMetadataInformationLinks);
	window.registredAerisElements.push('aeris-metadata-information-links')
	
	Vue.customElement('aeris-metadata-data-links',AerisMetadataDataLinks);
	window.registredAerisElements.push('aeris-metadata-data-links')
	
	Vue.customElement('aeris-metadata-information',AerisMetadataInformation);
	window.registredAerisElements.push('aeris-metadata-information')
	
	Vue.customElement('aeris-metadata-publications',AerisMetadataPublications);
	window.registredAerisElements.push('aeris-metadata-publications')
	
	Vue.customElement('aeris-metadata-publication',AerisMetadataPublication);
	window.registredAerisElements.push('aeris-metadata-publication')
	
	Vue.customElement('aeris-metadata-parameters',AerisMetadataParameters);
	window.registredAerisElements.push('aeris-metadata-parameters')
	
	Vue.customElement('aeris-metadata-parameter',AerisMetadataParameter);
	window.registredAerisElements.push('aeris-metadata-parameter')
	
	Vue.customElement('aeris-metadata-platforms',AerisMetadataPlatforms);
	window.registredAerisElements.push('aeris-metadata-platforms')
	
	Vue.customElement('aeris-metadata-platform',AerisMetadataPlatform);
	window.registredAerisElements.push('aeris-metadata-platform')
	
	Vue.customElement('aeris-metadata-quicklook-gallery',AerisMetadataQuicklookGallery);
	window.registredAerisElements.push('aeris-metadata-quicklook-gallery')
	
	Vue.customElement('aeris-metadata-doi', AerisMetadataDoi);
	window.registredAerisElements.push('aeris-metadata-doi')
	
	window.registredAerisElements.push('aeris-metadata-components-vjs')
})


