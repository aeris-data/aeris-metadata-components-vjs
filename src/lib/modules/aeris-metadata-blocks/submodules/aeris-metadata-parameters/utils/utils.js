module.exports = {
  getTitle(parameter, language) {
    return parameter.longName
      ? parameter.longName
      : parameter.shortName
      ? parameter.shortName
      : parameter.cfStandardName
      ? parameter.cfStandardName
      : parameter.thesaurusVariable
      ? getTermName(parameter, language)
      : "ND";
  },
  getTermName(parameter, language) {
    let termName = "";
    {
      termName =
        language == "fr"
          ? parameter.thesaurusVariable.name.fr
            ? parameter.thesaurusVariable.name.fr
            : parameter.thesaurusVariable.name.en
          : parameter.thesaurusVariable.name.en;
    }
    return termName;
  }
};
