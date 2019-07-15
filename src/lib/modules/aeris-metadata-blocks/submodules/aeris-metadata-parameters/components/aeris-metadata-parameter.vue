<i18n>
{
  "en": {
    "thesaususSearchError": "Parameter thesaurus search error",
    "longName": "Long name",
    "shortName": "Short name",
    "cfName": "CF standard name",
    "uom": "Unit of measure",
    "description": "Comment"
  },
  "fr": {
    "thesaususSearchError": "Erreur recherche thesaurus paramètre",
    "longName": "Nom long",
    "shortName": "Nom court",
    "cfName": "Nom standard CF",
    "uom": "Unité de mesure",
    "description": "Commentaire"
  }
}
</i18n>
<template>
  <div :style="applyTheme" class="aeris-metadata-parameter-host">
    <div :class="{ showParameterBody: deployed }" class="aeris-parameter-container">
      <header @click="deployed = !deployed">
        <h5 class="primaryTheme">{{ title }}</h5>
        <i :class="openIconClass" class="chevron" />
      </header>
      <article class="parameter-collapsable-part">
        <span>{{ thesaurusLabel }}</span>
        <ul class="metadata-format-description">
          <li>
            <h6 v-if="parameter.longName" class="primaryTheme">{{ $t("longName") }}:</h6>
            {{ parameter.longName }}
          </li>
          <li>
            <h6 v-if="parameter.shortName" class="primaryTheme">{{ $t("shortName") }}:</h6>
            {{ parameter.shortName }}
          </li>
          <li>
            <h6 v-if="parameter.cfStandardName" class="primaryTheme">{{ $t("cfName") }}:</h6>
            {{ parameter.cfStandardName }}
          </li>
          <li>
            <h6 v-if="parameter.uom" class="primaryTheme">{{ $t("uom") }}:</h6>
            {{ parameter.uom }}
          </li>
          <li>
            <h6 v-if="parameter.comment" class="primaryTheme">{{ $t("description") }}:</h6>
            <aeris-metadata-international-field
              :content="parameter.comment"
              :language="language"
              :convertlinks="true"
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
  name: "aeris-metadata-parameter",

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
    parameter: {
      type: Object,
      default: null
    },
    openIconClass: {
      type: String,
      default: "fas fa-chevron-down"
    }
  },

  data() {
    return {
      deployed: false,
      TermName: "",
      Variable1Name: "",
      Variable2Name: "",
      Variable3Name: "",
      title: ""
    };
  },

  computed: {
    thesaurusLabel() {
      let thesLabel = this.TermName;
      if (this.Variable1Name) thesLabel += " > " + this.Variable1Name;
      if (this.Variable2Name) thesLabel += " > " + this.Variable2Name;
      if (this.Variable3Name) thesLabel += " > " + this.Variable3Name;
      return thesLabel;
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
    },
    parameter(parameter) {
      this.labelHandle(parameter);
    }
  },

  created() {
    this.$i18n.locale = this.language;

    if (this.parameter) {
      this.labelHandle(this.parameter);
    }
  },

  methods: {
    labelHandle(parameter) {
      if (parameter & parameter.thesaurusVariable) {
        if (
          parameter.thesaurusVariable &&
          parameter.thesaurusVariable.code != "" &&
          parameter.thesaurusVariable.code != "NULL"
        ) {
          this.TermName =
            this.language == "fr"
              ? parameter.thesaurusVariable.name.fr
                ? parameter.thesaurusVariable.name.fr
                : parameter.thesaurusVariable.name.en
              : parameter.thesaurusVariable.name.en;
        }
        if (
          parameter.thesaurusVariable.thesaurusVariable &&
          parameter.thesaurusVariable.thesaurusVariable.code != "" &&
          parameter.thesaurusVariable.thesaurusVariable.code != "NULL"
        ) {
          this.Variable1Name =
            this.language == "fr"
              ? parameter.thesaurusVariable.thesaurusVariable.name.fr
                ? parameter.thesaurusVariable.thesaurusVariable.name.fr
                : parameter.thesaurusVariable.thesaurusVariable.name.en
              : parameter.thesaurusVariable.thesaurusVariable.name.en;
        }
        if (
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable &&
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "" &&
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "NULL"
        ) {
          if (this.Variable1Name == "") {
            this.Variable1Name =
              this.language == "fr"
                ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en
                : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
          } else {
            this.Variable2Name =
              this.language == "fr"
                ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en
                : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
          }
        }
        if (
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable &&
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "" &&
          parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.code != "NULL"
        ) {
          if (this.Variable2Name == "") {
            this.Variable2Name =
              this.language == "fr"
                ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en
                : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
          } else {
            this.Variable3Name =
              this.language == "fr"
                ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  ? parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.fr
                  : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en
                : parameter.thesaurusVariable.thesaurusVariable.thesaurusVariable.thesaurusVariable.name.en;
          }
        }
      }

      this.title = parameter.longName
        ? parameter.longName
        : parameter.shortName
        ? parameter.shortName
        : parameter.cfStandardName
        ? parameter.cfStandardName
        : parameter.thesaurusVariable
        ? this.TermName
        : "ND";
    }
  }
};
</script>

<style scoped>
.aeris-parameter-container .parameter-collapsable-part {
  display: none;
  transition: 0.3s;
}

.aeris-parameter-container header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  backface-visibility: hidden;
}

.primaryTheme {
  color: var(--primaryColor);
}

.aeris-parameter-container header:hover {
  cursor: pointer;
}

.aeris-parameter-container header i {
  margin-left: 20px;
  color: #999;
  cursor: pointer;
}

.aeris-parameter-container.showParameterBody .parameter-collapsable-part {
  display: block;
  transition: 0.3s;
}

.aeris-parameter-container.showParameterBody .chevron {
  transform: rotate(180deg);
}

.aeris-parameter-container .chevron {
  transition: 0.3s;
}

.aeris-parameter-container .parameter-collapsable-part {
  padding: 5px 5px 5px 0;
}

.aeris-parameter-container .metadata-format-description {
  padding-top: 5px;
}

.aeris-parameter-container .metadata-format-description li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
}
.aeris-parameter-container .metadata-format-description h6 {
  margin-bottom: 2px;
  min-width: 30%;
}
</style>
