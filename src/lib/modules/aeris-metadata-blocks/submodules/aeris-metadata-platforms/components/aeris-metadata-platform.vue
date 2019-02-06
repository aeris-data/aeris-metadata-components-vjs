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
        <h5>{{ title }}</h5>
        <i :class="openIconClass" class="chevron" />
      </header>
      <article class="platform-collapsable-part">
        <ul class="metadata-format-description">
          <li>
            <h6 v-if="platform.description">{{ $t("description") }}:</h6>
            <aeris-metadata-international-field
              :content="platform.description"
              :language="language"
              :convertlinks="true"
              label="Description"
              no-label-float
            ></aeris-metadata-international-field>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field";
export default {
  name: "aeris-metadata-platform",
  
  components: { AerisMetadataInternationalField },
  
  props: {
    language: {
      type: String,
      default: "en"
    },
    platform: {
      type: Object,
      default: () => {
        return {};
      }
    },
    openIconClass: {
      type: String,
      default: "fa fa-chevron-down"
    }
  },

  data() {
    return {
      deployed: false,
      className: "",
      codeName: "",
      nameName: "",
      title: ""
    };
  },
  
  computed: {
    thesaurusLabel() {
      return (
        this.className +
        (this.codeName
          ? " > " + this.codeName + (this.nameName ? " > " + this.nameName : "")
          : this.nameName
          ? " > " + this.nameName
          : "")
      );
    },
    
    value() {
      if (this.platform == null) {
        return {};
      } else {
        return this.platform;
      }
    }
  },
  
  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
    this.labelHandle();
  },

  methods: {
    labelHandle() {
      let metadata = this.platform;
      if (metadata.thesaurusClass.code != "" && metadata.thesaurusClass.code != "NULL") {
        this.className =
          this.language == "fr"
            ? metadata.thesaurusClass.name.fr
              ? metadata.thesaurusClass.name.fr
              : metadata.thesaurusClass.name.en
            : metadata.thesaurusClass.name.en;
      }
      if (metadata.thesaurusClass.thesaurusCode.code != "" && metadata.thesaurusClass.thesaurusCode.code != "NULL") {
        this.codeName =
          this.language == "fr"
            ? metadata.thesaurusClass.thesaurusCode.name.fr
              ? metadata.thesaurusClass.thesaurusCode.name.fr
              : metadata.thesaurusClass.thesaurusCode.name.en
            : metadata.thesaurusClass.thesaurusCode.name.en;
      }
      if (
        metadata.thesaurusClass.thesaurusCode.thesaurusName.code != "" &&
        metadata.thesaurusClass.thesaurusCode.thesaurusName.code != "NULL"
      ) {
        if (this.codeName == "") {
          this.codeName =
            this.language == "fr"
              ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en
              : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
        } else {
          this.nameName =
            this.language == "fr"
              ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                ? metadata.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en
              : metadata.thesaurusClass.thesaurusCode.thesaurusName.name.en;
        }
      }
      if (metadata.name == "") {
        this.title = this.className;
      } else {
        this.title = metadata.name;
      }
    }
  }
};
</script>

<style scoped>
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
  cursor: pointer;
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
  padding: 5px 5px 5px 0;
}

.aeris-plateform-container .metadata-format-description li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
}
.aeris-plateform-container .metadata-format-description h6 {
  min-width: 30%;
}
</style>
