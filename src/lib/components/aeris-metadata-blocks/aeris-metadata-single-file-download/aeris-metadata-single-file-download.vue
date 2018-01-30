<i18n>
{
  "en": {
  	"download": "Download",
  	"addToCart": "Add to cart",
  	"addedToCart": "Added to cart",
  	"explicationText": "To download the data files, add them to the cart by clicking here.",
  	"addingToCart": "Adding to cart"
  },
  "fr": {
  	"download": "Téléchargement",
  	"addToCart": "Ajouter au panier",
  	"addedToCart": "Dans le panier",
  	"explicationText": "Pour télécharger les fichiers de données, ajoutez-les au panier en cliquant ici.",
  	"addingToCart": "Ajout au panier"
  }
}
</i18n>
<template>
	<div data-aeris-metadata-layout data-template="metadata-block" :type="type" :isVisible="visible" :order="order" v-show="visible">
		<header>
		  <h3><i name="download" class="fa fa-download"></i>{{$t('download')}}</h3>
		</header>
		<div v-if="!isInCart">
		  <p>{{$t('explicationText')}}</p>
		  <aeris-catalog-ui-button id="btnAdd" icon="fa fa-cart-arrow-down" onclick="document.dispatchEvent(new CustomEvent('recordToAdd'))" :text="$t('addToCart')"></aeris-catalog-ui-button>
		</div>
		<div v-else>
		  <p>{{$t('explicationText')}}</p>
		  <div id="addedToCard">
		    <i class="fa fa-check" :aria-hidden="true"></i> {{$t('addedToCart')}}
		  </div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'aeris-metadata-single-file-download',

	props: {
		lang:  {
			type: String,
			default: 'en'
		},
    order: {
      type: Number
    }
	},

	mounted: function() {
		var event = new CustomEvent('aerisThemeRequest', {});
		document.dispatchEvent(event);
	},

	watch: {
		lang (value) {
			this.$i18n.locale = value
		},

		isInCart(value) {
			this.ensureTheme()
		}
	},

	destroyed: function() {
		document.removeEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
		this.aerisMetadataListener = null;

		document.removeEventListener('cartContentResponse', this.cartContentResponseListener);
		this.cartContentResponseListener = null;

		document.removeEventListener('aerisTheme', this.aerisThemeListener);
		this.aerisThemeListener = null;

	    document.removeEventListener('recordToAdd', this.recordToAddListener);
	    this.recordToAddListener = null;
	},

	created: function () {
		console.log("Aeris single file download - Creating");
		this.$i18n.locale = this.lang;
		// to get the datas
	    this.aerisMetadataListener = this.handleRefresh.bind(this);
	    document.addEventListener('aerisMetadataRefreshed', this.aerisMetadataListener);
	    // to apply theme
	    this.aerisThemeListener = this.handleTheme.bind(this);
	    document.addEventListener('aerisTheme', this.aerisThemeListener);
	    // to get the cart response, asking if the collection is already in the cart
	    this.cartContentResponseListener = this.cartContentResponse.bind(this);
        document.addEventListener('cartContentResponse', this.cartContentResponseListener);
        // as the event is received by aeris-catalog-ui-button, we have to use a custom event to get it back
        this.recordToAddListener = this.addToCart.bind(this);
        document.addEventListener('recordToAdd', this.recordToAddListener);
	},

	updated: function() {
		this.ensureTheme();
	},

	computed: {

	},

	data () {
		return {
      type: 'aerisSingleFileDownload',
			visible: false,
			theme : null,
			aerisThemeListener: null,
			aerisMetadataListener: null,
			cartResponseListener: null,
			data:  {},
			downloadEntry : {},
			service : null,
			id: null,
			collectionName: null,
			isInCart: false,
			classesButton: "metadata-text-btn"
		}
	},

	methods: {


		cartContentResponse: function (e) {
			this.isInCart = false
			var cartContent = e.detail.cartContent
			if (cartContent) {
				console.log(cartContent)
				for (var i =0; i <cartContent.length; i++) {
					var cartItem = cartContent[i]
					if (cartItem.collectionId== this.id) {
						this.isInCart = true
					}
				}
			}
		},

		handleRefresh: function(data) {
			console.log("Aeris single file download - Refreshing");

			this.id = data.detail.id;
			this.collectionName = data.detail.resourceTitle;

			this.visible = false;
			var event = new CustomEvent('cartContentRequest', {});
	 		document.dispatchEvent(event);

	 		var links = data.detail.links;
			if (links && links.length > 0) {
				for(var i= 0; i < links.length; i++)
				{
				    var link = links[i];
				    if (link.type =="OPENSEARCH_LINK") {
				    	this.service = link.url;
				    	break;
				    }
				}

				var event = new CustomEvent('cartContentRequest', {});
		 		document.dispatchEvent(event);
		 		this.visible = true;
			}

			this.ensureTheme();
		},

		handleSuccess : function(response) {
			this.downloadEntries = response.body.entries;
			if (this.downloadEntries.length > 0){
				this.downloadEntry = this.downloadEntries[0];
				this.visible = true;
				this.ensureTheme();
				this.isInCart = false;
			}

			var url_download_service = this.service;
			var obj = {
				collectionName: JSON.stringify(this.collectionName),
				url: url_download_service,
				collectionId: this.id,
	        	id: this.id,
				data: '',
				fileNumber: this.downloadEntry.fileNumber,
				totalSize: this.downloadEntry.totalSize,
				type: 'nofilter'
			};
			// send the informations
			var event = new CustomEvent('addItemToCartEvent', {detail: obj, lang: this.lang});
	 		document.dispatchEvent(event);
	 		this.isInCart = true;
	 		// hide notification
			document.dispatchEvent(new CustomEvent('aerisLongActionStopEvent', { 'detail': {message: this.$t('addingToCart')}}));
		},

		handleError: function(response) {
			console.log("single file download - Error while accessing server:");
			var error = response.status;
			var message = response.statusText;
			if(!error) message = 'Can\'t connect to the server';
			console.log('Error ' + error + ': ' + message);
	 		// hide notification
			document.dispatchEvent(new CustomEvent('aerisLongActionStopEvent', { 'detail': {message: this.$t('addingToCart')}}));
		},

	    handleTheme: function(event) {
	        this.theme = event.detail
	        if (this.visible) {
	          this.ensureTheme();
	        }
	      },

	    ensureTheme: function() {
	          document.querySelector("[name=download]") ? document.querySelector("[name=download]").style.color = this.theme.primary : null;
	          var buttonAddToCard = document.querySelector('#addToCard');
	          if (buttonAddToCard) {
	            buttonAddToCard.style.color = this.theme.primary;
	            buttonAddToCard.style.background = "#FFFFFF";
	            buttonAddToCard.style.borderColor = this.theme.primary;
	          }
	          let addedToCard = document.querySelector("#addedToCard");
	          addedToCard ? addedToCard.style.color = this.theme.primary : null;
	        },

		addToCart: function(e) {
			if (!this.isInCart) {

				// Show notification
				document.dispatchEvent(new CustomEvent('aerisLongActionStartEvent', { 'detail': {message: this.$t('addingToCart')}}));

				// search the informations for the cart
				if (this.service && this.id) {
					var url = null;
					if (this.service.endsWith('/')) {
						this.service = this.service.substring(0, this.service.length - 1);
					}
					url = this.service + "/request?collection=" + this.id;
					this.$http.get(url).then((response)=>{this.handleSuccess(response)},(response)=>{this.handleError(response)});
				}
			}
		}

	} // methods

} // default
</script>

<style>

 </style>
