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
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
})
ljs.load('dep', function() {
	Vue.customElement('aeris-metadata-international-field', AerisMetadataInternationalField);
	Vue.customElement('aeris-metadata-contact', AerisMetadataContact);
	Vue.customElement('aeris-metadata-contacts', AerisMetadataContacts);
	Vue.customElement('aeris-metadata-temporal-extent', AerisMetadataTemporalExtent);
	Vue.customElement('aeris-metadata-temporal-extents', AerisMetadataTemporalExtents);
	Vue.customElement('aeris-metadata-formats', AerisMetadataFormats);
	Vue.customElement('aeris-metadata-format', AerisMetadataFormat);
	Vue.customElement('aeris-metadata-description', AerisMetadataDescription);
	Vue.customElement('aeris-metadata', AerisMetadata);
	Vue.customElement('aeris-metadata-information-link',AerisMetadataInformationLink);
	Vue.customElement('aeris-metadata-information-links',AerisMetadataInformationLinks);
	Vue.customElement('aeris-metadata-data-links',AerisMetadataDataLinks);
	Vue.customElement('aeris-metadata-information',AerisMetadataInformation);
	Vue.customElement('aeris-metadata-publications',AerisMetadataPublications);
	Vue.customElement('aeris-metadata-publication',AerisMetadataPublication);
	Vue.customElement('aeris-metadata-parameters',AerisMetadataParameters);
	Vue.customElement('aeris-metadata-parameter',AerisMetadataParameter);
	Vue.customElement('aeris-metadata-platforms',AerisMetadataPlatforms);
	Vue.customElement('aeris-metadata-platform',AerisMetadataPlatform);
	Vue.customElement('aeris-metadata-quicklook-gallery',AerisMetadataQuicklookGallery);
	Vue.customElement('aeris-metadata-doi', AerisMetadataDoi);
})


