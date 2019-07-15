function getManufacturerAndModel(instrument) {
  if (instrument.manufacturer && instrument.model) {
    return instrument.manufacturer + "/" + instrument.model;
  } else {
    return "";
  }
}

function getLastLevelOfThesaurusValue(instrument, language) {
  if (isThesaurusNameExist(instrument) && getInternationalFieldValue(getThesaurusName(instrument), language)) {
    return getInternationalFieldValue(getThesaurusName(instrument), language);
  } else if (isThesaurusCodeExist(instrument)) {
    return getInternationalFieldValue(getThesaurusCodeName(instrument));
  } else if (isThesaurusClassExist(instrument)) {
    return getInternationalFieldValue(getThesaurusClassName(instrument), language);
  }
  return "";
}

function getTitle(instrument, language) {
  let title = "";
  let manufacturerAndModel = getManufacturerAndModel(instrument);
  if (instrument.displayName && instrument.displayName.localeCompare("null") !== 0) {
    title = instrument.displayName;
  } else if (manufacturerAndModel) {
    title = manufacturerAndModel;
  } else {
    title = getLastLevelOfThesaurusValue(instrument, language);
  }
  return title;
}
function isThesaurusNameExist(instrument) {
  return instrument.thesaurusClass.thesaurusCode.thesaurusName.code.localeCompare("NULL") !== 0;
}
function isThesaurusCodeExist(instrument) {
  return instrument.thesaurusClass.thesaurusCode.code.localeCompare("NULL") !== 0;
}
function isThesaurusClassExist(instrument) {
  return instrument.thesaurusClass.code.localeCompare("NULL") !== 0;
}
function getThesaurusName(instrument) {
  return instrument.thesaurusClass.thesaurusCode.thesaurusName.name;
}
function getThesaurusLongName(instrument) {
  return instrument.thesaurusClass.thesaurusCode.thesaurusName.longName;
}
function getThesaurusCodeName(instrument) {
  return instrument.thesaurusClass.thesaurusCode.name;
}
function getThesaurusClassName(instrument) {
  return instrument.thesaurusClass.name;
}

function getInternationalFieldValue(field, language) {
  if (!field || field == "null") {
    return "";
  } else if (!language) {
    return field;
  } else {
    if (field[language]) {
      return field[language];
    } else if (field["DEFAULT_VALUE_KEY"]) {
      return field["DEFAULT_VALUE_KEY"];
    } else {
      return "";
    }
  }
}

module.exports.getManufacturerAndModel = getManufacturerAndModel;
module.exports.getLastLevelOfThesaurusValue = getLastLevelOfThesaurusValue;
module.exports.getTitle = getTitle;
module.exports.isThesaurusNameExist = isThesaurusNameExist;
module.exports.isThesaurusCodeExist = isThesaurusCodeExist;
module.exports.isThesaurusClassExist = isThesaurusClassExist;
module.exports.getThesaurusName = getThesaurusName;
module.exports.getThesaurusLongName = getThesaurusLongName;
module.exports.getThesaurusCodeName = getThesaurusCodeName;
module.exports.getThesaurusClassName = getThesaurusClassName;
module.exports.getInternationalFieldValue = getInternationalFieldValue;
