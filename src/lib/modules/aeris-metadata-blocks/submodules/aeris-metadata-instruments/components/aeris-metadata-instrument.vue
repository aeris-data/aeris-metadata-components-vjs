<i18n>
{
  "en": {
    "thesaususSearchError": "Instrument thesaurus search error",
    "manufacturer": "Manufacturer",
    "model": "Model",
    "serialNumber": "Serial number",
    "calibration": "Calibration",
    "resolution": "Resolution",
    "description": "Description",
     "name" : "Name"
  },
  "fr": {
    "thesaususSearchError": "Erreur recherche thesaurus instrument",
    "manufacturer": "Fabriquant",
    "model": "Modèle",
    "serialNumber": "Numéro de série",
    "calibration": "Etalonnage",
    "resolution": "Résolution",
    "description": "Description",
    "name": "Nom"
  }
}
</i18n>

<template>
  <div :style="applyTheme" class="aeris-metadata-instrument-host">
    <div :class="{ showInstrumentBody: deployed }" class="aeris-instrument-container">
      <header @click="deployed = !deployed">
        <h5 class="primaryTheme">{{ title }}</h5>
        <i :class="openIconClass" class="chevron" />
      </header>
      <article class="instrument-collapsable-part">
        <span>{{ thesaurusLabel }}</span>
        <span v-if="getInternationalFieldValue(getThesaurusLongName)"
        >({{ getInternationalFieldValue(getThesaurusLongName) }})</span
        >
        <ul class="metadata-format-description">
          <li>
            <h6 v-if="instrument.manufacturer" class="primaryTheme">{{ $t("manufacturer") }}:</h6>
            {{ instrument.manufacturer }}
          </li>
          <li>
            <h6 v-if="instrument.model" class="primaryTheme">{{ $t("model") }}:</h6>
            {{ instrument.model }}
          </li>
          <li>
            <h6 v-if="instrument.serialNumber" class="primaryTheme">{{ $t("serialNumber") }}:</h6>
            {{ instrument.serialNumber }}
          </li>
          <li>
            <h6 v-if="instrument.calibration" class="primaryTheme">{{ $t("calibration") }}:</h6>
            {{ instrument.calibration }}
          </li>
          <li>
            <h6 v-if="instrument.resolution" class="primaryTheme">{{ $t("resolution") }}:</h6>
            {{ resolutionDisplay }}
          </li>
          <li>
            <h6 v-if="instrument.description && instrument.description !== null" class="primaryTheme">
              {{ $t("description") }}:
            </h6>
            <aeris-metadata-international-field
              :content="instrument.description"
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
import AerisMetadataInternationalField from "../../../../aeris-metadata-international-field/components/aeris-metadata-international-field.vue";
export default {
  name: "aeris-metadata-instrument",

  components: { AerisMetadataInternationalField },

  props: {
    language: {
      type: String,
      default: "en"
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },
    instrument: {
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
      title: "",
      resolutionDisplay: ""
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
    applyTheme() {
      if (this.theme && this.theme.primaryColor) {
        return {
          "--primaryColor": this.theme.primaryColor
        };
      } else {
        return "";
      }
    },
    isThesaurusNameExist() {
      return this.instrument.thesaurusClass.thesaurusCode.thesaurusName.code.localeCompare("NULL") !== 0;
    },
    isThesaurusCodeExist() {
      return this.instrument.thesaurusClass.thesaurusCode.code.localeCompare("NULL") !== 0;
    },
    isThesaurusClassExist() {
      return this.instrument.thesaurusClass.code.localeCompare("NULL") !== 0;
    },
    getThesaurusName() {
      return this.instrument.thesaurusClass.thesaurusCode.thesaurusName.name;
    },
    getThesaurusLongName() {
      return this.instrument.thesaurusClass.thesaurusCode.thesaurusName.longName;
    },
    getThesaurusCodeName() {
      return this.instrument.thesaurusClass.thesaurusCode.name;
    },
    getThesaurusClassName() {
      return this.instrument.thesaurusClass.name;
    },
    getManufacturerAndModel() {
      if (this.instrument.manufacturer && this.instrument.model) {
        return this.instrument.manufacturer + "/" + this.instrument.model;
      } else {
        return "";
      }
    },
    getLastLevelOfThesaurusValue() {
      if (this.isThesaurusNameExist && this.getInternationalFieldValue(this.getThesaurusName)) {
        return this.getInternationalFieldValue(this.getThesaurusName);
      } else if (this.isThesaurusCodeExist) {
        return this.getInternationalFieldValue(this.getThesaurusCodeName);
      } else if (this.isThesaurusClassExist) {
        return this.getInternationalFieldValue(this.getThesaurusClassName);
      }
      return "";
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    console.log("Aeris Metadata Instrument - Creating");
    this.$i18n.locale = this.language;
    this.updateLabel();
  },

  methods: {
    updateLabel() {
      if (this.instrument && (this.instrument.thesaurusClass || this.instrument.displayName)) {
        let metadata = this.instrument;
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

        if (metadata.displayName && metadata.displayName.localeCompare("null") !== 0) {
          this.title = metadata.displayName;
        } else if (this.getManufacturerAndModel) {
          this.title = this.getManufacturerAndModel;
        } else {
          this.title = this.getLastLevelOfThesaurusValue;
        }

        if (metadata.resolution) {
          this.resolutionDisplay = metadata.resolution.resolutionValue + " " + metadata.resolution.resolutionUnit;
        }
      }
    },
    getInternationalFieldValue(field) {
      if (!field || field == "null") {
        return "";
      } else if (!this.language) {
        return field;
      } else {
        if (field[this.language]) {
          return field[this.language];
        } else if (field["DEFAULT_VALUE_KEY"]) {
          return field["DEFAULT_VALUE_KEY"];
        } else {
          return "";
        }
      }
    }
  }
};
</script>

<style scoped>
.aeris-instrument-container .instrument-collapsable-part {
  display: none;
  transition: 0.3s;
}

.primaryTheme {
  color: var(--primaryColor);
}

.aeris-instrument-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  backface-visibility: hidden;
  cursor: pointer;
}

.aeris-instrument-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer;
}

.aeris-instrument-container.showInstrumentBody .instrument-collapsable-part {
  display: block;
  transition: 0.3s;
}

.aeris-instrument-container.showInstrumentBody .chevron {
  transform: rotate(180deg);
}

.aeris-instrument-container .chevron {
  transition: 0.3s;
}

.aeris-instrument-container .instrument-collapsable-part {
  padding: 5px 5px 5px 0;
}

.aeris-instrument-container .metadata-format-description li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
}
.aeris-instrument-container .metadata-format-description h6 {
  min-width: 30%;
}
</style>
