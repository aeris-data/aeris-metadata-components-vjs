<template>
  <div>
    <aeris-metadata-platforms :platforms="platforms" language="en"></aeris-metadata-platforms>
    <aeris-metadata-platforms :platforms="platforms" language="fr"></aeris-metadata-platforms>
    <aeris-metadata-platforms :platforms="null" language="fr"></aeris-metadata-platforms>

  </div>
</template>

<script>
import AerisMetadataPlatforms from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-platforms/components/aeris-metadata-platforms.vue";
export default {
  name: "aeris-metadata-platforms-test",
  components: { AerisMetadataPlatforms },
  data() {
    return {
      platforms: [
        {
          thesaurusConcat: "EARTH_OBSERVATION_SATELLITES.NASA_EARTH_SYSTEM_SCIENCE_PATHFINDER.CALIPSO",
          thesaurusClass: {
            code: "EARTH_OBSERVATION_SATELLITES",
            name: {
              en: "Earth Observation Satellites",
              fr: "Satellites d'Observation"
            },
            thesaurusCode: {
              code: "NASA_EARTH_SYSTEM_SCIENCE_PATHFINDER",
              name: {
                en: "NASA Earth System Science Pathfinder",
                fr: "value"
              },
              thesaurusName: {
                code: "CALIPSO",
                name: {
                  en: "CALIPSO",
                  fr: "value"
                },
                longName: {
                  en: "Cloud-Aerosol Lidar and Infrared Pathfinder Satellite Observations",
                  fr: "value"
                }
              }
            }
          },
          name: "Satellites d'Observation",
          description: {
                  en: "English description",
                  fr: "Description française."
                }
        }
      ]
    };
  }
};
</script>
