<template>
  <aeris-metadata-synthesis
    :theme="theme"
    identifier="546c0188-772c-4f03-987d-e229f95cb599"
    language="en"
  ></aeris-metadata-synthesis>
</template>

<script>
import { AerisMetadataSynthesis } from "../../../../lib/modules/aeris-metadata-components";
export default {
  name: "aeris-metadata-synthesis-test",
  components: {
    AerisMetadataSynthesis
  },
  data() {
    return {
      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  }
};
</script>
