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
        <span>{{ thesaurusLabel }}</span> <span v-if="thesaurusLongName">({{ thesaurusLongName }})</span>
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
import {
  getInternationalFieldValue,
  getThesaurusLongName,
  getManufacturerAndModel,
  getLastLevelOfThesaurusValue
} from "../utils/utils";
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
      default: "fas fa-chevron-down"
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
    thesaurusLongName() {
      let longName = "";
      if (this.instrument) {
        longName = getInternationalFieldValue(getThesaurusLongName(this.instrument), this.language);
      }
      return longName;
    },
    applyTheme() {
      if (this.theme && this.theme.primaryColor) {
        return {
          "--primaryColor": this.theme.primaryColor
        };
      } else {
        return "";
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
    this.updateLabel(this.instrument);
  },

  methods: {
    updateLabel(instrument) {
      if (instrument && (instrument.thesaurusClass || instrument.displayName)) {
        if (instrument.thesaurusClass.code != "" && instrument.thesaurusClass.code != "NULL") {
          this.className =
            this.language == "fr"
              ? instrument.thesaurusClass.name.fr
                ? instrument.thesaurusClass.name.fr
                : instrument.thesaurusClass.name.en
              : instrument.thesaurusClass.name.en;
        }
        if (
          instrument.thesaurusClass.thesaurusCode.code != "" &&
          instrument.thesaurusClass.thesaurusCode.code != "NULL"
        ) {
          this.codeName =
            this.language == "fr"
              ? instrument.thesaurusClass.thesaurusCode.name.fr
                ? instrument.thesaurusClass.thesaurusCode.name.fr
                : instrument.thesaurusClass.thesaurusCode.name.en
              : instrument.thesaurusClass.thesaurusCode.name.en;
        }
        if (
          instrument.thesaurusClass.thesaurusCode.thesaurusName.code != "" &&
          instrument.thesaurusClass.thesaurusCode.thesaurusName.code != "NULL"
        ) {
          if (this.codeName == "") {
            this.codeName =
              this.language == "fr"
                ? instrument.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                  ? instrument.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                  : instrument.thesaurusClass.thesaurusCode.thesaurusName.name.en
                : instrument.thesaurusClass.thesaurusCode.thesaurusName.name.en;
          } else {
            this.nameName =
              this.language == "fr"
                ? instrument.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                  ? instrument.thesaurusClass.thesaurusCode.thesaurusName.name.fr
                  : instrument.thesaurusClass.thesaurusCode.thesaurusName.name.en
                : instrument.thesaurusClass.thesaurusCode.thesaurusName.name.en;
          }
        }

        if (instrument.displayName && instrument.displayName.localeCompare("null") !== 0) {
          this.title = instrument.displayName;
        } else if (getManufacturerAndModel(instrument)) {
          this.title = getManufacturerAndModel(instrument);
        } else {
          this.title = getLastLevelOfThesaurusValue(instrument, this.language);
        }

        if (instrument.resolution) {
          this.resolutionDisplay = instrument.resolution.resolutionValue + " " + instrument.resolution.resolutionUnit;
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
