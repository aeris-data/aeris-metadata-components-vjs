<template>
  <section>
    <aeris-metadata-datapolicy :distribution-information="distributionInformation"></aeris-metadata-datapolicy>
  </section>
</template>

<script>
import AerisMetadataDatapolicy from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/components/aeris-metadata-datapolicy";

export default {
  name: "aeris-metadata-datapolicy-test",

  components: { AerisMetadataDatapolicy },

  data() {
    return {
      distributionInformation: {
        dataPolicyName: "",
        dataPolicyVersion: "",
        dataPolicyUrl: "",
        embargoDuration: 0,
        registrationNeeded: false,
        description: {
          en:
            "GMOS-Fr L2 data are **free to use for non-commercial research purposes**. \r\nRegistration is not required yet.\r\n\r\nData users policy must be:\r\n\r\n- Contact GMOS-Fr coordinators (A. Dommergue and O. Magand) responsible for the particular measurement\r\nto verify proper interpretation of the data in the context of the intended use.\r\n- Grant data providers the opportunity to review the use of the data and conclusions drawn from it.\r\n- Invite the data providers at an early stage to be co-author on any papers written or scientific communication if their data is essential to the work or an important result or conclusion has been obtained using their data.\r\n\r\nGMOS-Fr data must not be redistributed to third parties, but we encourage dissemination through the GMOS-Fr data\r\nportal to follow and accept the data policy, and ensure use of last version of data.",
          fr:
            "GMOS-Fr L2 data are **free to use for non-commercial research purposes**. \r\nRegistration is not required yet.\r\n\r\nData users policy must be:\r\n\r\n- Contact GMOS-Fr coordinators (A. Dommergue and O. Magand) responsible for the particular measurement\r\nto verify proper interpretation of the data in the context of the intended use.\r\n- Grant data providers the opportunity to review the use of the data and conclusions drawn from it.\r\n- Invite the data providers at an early stage to be co-author on any papers written or scientific communication if their data is essential to the work or an important result or conclusion has been obtained using their data.\r\n\r\nGMOS-Fr data must not be redistributed to third parties, but we encourage dissemination through the GMOS-Fr data\r\nportal to follow and accept the data policy, and ensure use of last version of data."
        },
        licenceName: "",
        licenceVersion: "",
        licencePolicyUrl: "",
        accessConstraints: null,
        useConstraints: null
      }
    };
  }
};
</script>

<style scoped></style>
