<template>
  <section><aeris-metadata-description :resource-abstract="resourceAbstract" :theme="theme"></aeris-metadata-description></section>
</template>

<script>
import AerisMetadataDescription from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-description/components/aeris-metadata-description";

export default {
  name: "aeris-metadata-description-test",

  components: { AerisMetadataDescription },

  data() {
    return {
      resourceAbstract: {
        en:
          "Gaseous Elemental Mercury (GEM or Hg(0)) measurements were performed at **DDU station located on a small island\r\n(Ile des Pétrels)** about 1 km offshore from the Antarctic mainland (66◦40 S, 140◦01 E, 43m asl). A detailed description\r\nof the sampling site (“Labo 3”) has been given by Preunkert et al. (2013) while the climatology of this coastal station\r\nhas been detailed by König-Langlo et al. (1998). The average surface air temperature ranges from -1°C in January to -\r\n17°C in winter, with a mean annual temperature of -12°C. The annual mean surface wind speed is 10 m s-1, with no\r\nclear seasonal variations. Due to the strong katabatic effects, the most frequent surface wind direction is 120–160°E.\r\n\nFrom 2012 to May 2015, atmospheric mercury species measurements were performed using a Tekran 2537A/B\r\nanalyzer (Tekran Inc., Toronto, Canada). GEM was continuously measured. The sampling resolution ranged from 10\r\nto 15 min with a sampling flow rate of 1.0 L min-1. Concentrations are expressed in nanograms per cubic meter at\r\nstandard temperature and pressure (273.15 K, 1013.25 hPa). Setting a 0.45 µm PTFE filter and a 10 m-long unheated\r\nsampling line on the front of the analyzer inlet (2.5 m height), we assume that mainly Hg(0) (instead of total gaseous\r\nmercury, defined as the sum of gaseous mercury species) was efficiently collected and subsequently analyzed by the\r\ninstrument (Steffen et al., 2002; Temme et al., 2003; Steffen et al., 2008).\r\n\nAn automatic calibration step of the Tekran 2537A/B analyzer was carried out very frequently with an internal\r\nmercury permeation source. External calibrations were performed twice a year by manually injecting saturated\r\nmercury vapor taken from a temperature-controlled vessel, using a Tekran 2505 mercury vapor calibration unit and a\r\nHamilton digital syringe, and following a strict procedure adapted from Dumarey et al. (1985). Fortnightly to monthly\r\nroutine maintenance operations were performed. A software program was developed at the LGGE (Laboratoire de\r\nGlaciologie et Géophysique de l’Environnement, now called Institut des Géosciences de l’Environnement or IGE)\r\nfollowing quality control practice commonly applied in GMOS and North American networks. Based on various\r\nflagging criteria (Munthe et al., 2011; D’Amore et al., 2015), it enabled rapid data processing in order to produce\r\nclean time series of Hg(0). According to the instrument manual, the detection limit is 0.10 ng m-3 (Tekran, 2011).",
        fr:
          "Gaseous Elemental Mercury (GEM or Hg(0)) measurements were performed at **DDU station located on a small island\r\n(Ile des Pétrels)** about 1 km offshore from the Antarctic mainland (66◦40 S, 140◦01 E, 43m asl). A detailed description\r\nof the sampling site (“Labo 3”) has been given by Preunkert et al. (2013) while the climatology of this coastal station\r\nhas been detailed by König-Langlo et al. (1998). The average surface air temperature ranges from -1°C in January to -\r\n17°C in winter, with a mean annual temperature of -12°C. The annual mean surface wind speed is 10 m s-1, with no\r\nclear seasonal variations. Due to the strong katabatic effects, the most frequent surface wind direction is 120–160°E.\r\n\nFrom 2012 to May 2015, atmospheric mercury species measurements were performed using a Tekran 2537A/B\r\nanalyzer (Tekran Inc., Toronto, Canada). GEM was continuously measured. The sampling resolution ranged from 10\r\nto 15 min with a sampling flow rate of 1.0 L min-1. Concentrations are expressed in nanograms per cubic meter at\r\nstandard temperature and pressure (273.15 K, 1013.25 hPa). Setting a 0.45 µm PTFE filter and a 10 m-long unheated\r\nsampling line on the front of the analyzer inlet (2.5 m height), we assume that mainly Hg(0) (instead of total gaseous\r\nmercury, defined as the sum of gaseous mercury species) was efficiently collected and subsequently analyzed by the\r\ninstrument (Steffen et al., 2002; Temme et al., 2003; Steffen et al., 2008).\r\n\nAn automatic calibration step of the Tekran 2537A/B analyzer was carried out very frequently with an internal\r\nmercury permeation source. External calibrations were performed twice a year by manually injecting saturated\r\nmercury vapor taken from a temperature-controlled vessel, using a Tekran 2505 mercury vapor calibration unit and a\r\nHamilton digital syringe, and following a strict procedure adapted from Dumarey et al. (1985). Fortnightly to monthly\r\nroutine maintenance operations were performed. A software program was developed at the LGGE (Laboratoire de\r\nGlaciologie et Géophysique de l’Environnement, now called Institut des Géosciences de l’Environnement or IGE)\r\nfollowing quality control practice commonly applied in GMOS and North American networks. Based on various\r\nflagging criteria (Munthe et al., 2011; D’Amore et al., 2015), it enabled rapid data processing in order to produce\r\nclean time series of Hg(0). According to the instrument manual, the detection limit is 0.10 ng m-3 (Tekran, 2011)."
      },
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  }
};
</script>

<style scoped></style>
