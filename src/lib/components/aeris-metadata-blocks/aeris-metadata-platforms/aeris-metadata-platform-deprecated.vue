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
  <div class="aeris-metadata-platform-host">

    <div :class="{ showPlateformBody: deployed }" class="aeris-plateform-container">
      <header @click="deployed = !deployed">
        <h5>{{ value.name }}</h5>
        <i :class="openIconClass" class="chevron"/>
      </header>
      <article class="platform-collapsable-part">
        <h6>{{ $t('type') }}</h6>
        <span>{{ value.type }}</span>
        <div class="metadata-format-description">
          <h6 v-if="value.description">{{ $t('description') }}:</h6>
          <aeris-metadata-international-field :content="JSON.stringify(value.description)" :lang="lang" :convertlinks="true" label="Description" no-label-float/>
        </div>
      </article>
    </div>


  </div>
</template>

<script>
export default {
  name: "aeris-metadata-platform",

  props: {
    lang: {
      type: String,
      default: "en"
    },
    platform: {
      type: String,
      default: null
    },
    openIconClass: {
      type: String,
      default: "fa fa-chevron-down"
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  created: function() {
    console.log("Aeris Metadata Platform - Creating");
    this.$i18n.locale = this.lang;
  },

  computed: {
    value: function() {
      if (this.platform == null) {
        return {};
      } else {
        return JSON.parse(this.platform);
      }
    }
  },

  data() {
    return {
      deployed: false
    };
  }
};
</script>

<style>
.aeris-plateform-container .platform-collapsable-part {
  display: none;
  transition: 0.3s;
}

.aeris-plateform-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  backface-visibility: hidden;
}

.aeris-plateform-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer;
}

.aeris-plateform-container.showPlateformBody .platform-collapsable-part {
  display: block;
  transition: 0.3s;
}

.aeris-plateform-container.showPlateformBody .chevron {
  transform: rotate(180deg);
}

.aeris-plateform-container .chevron {
  transition: 0.3s;
}

.aeris-plateform-container .platform-collapsable-part {
  padding: 10px;
}

.aeris-plateform-container .metadata-format-description {
  margin: 10px;
}
</style>
