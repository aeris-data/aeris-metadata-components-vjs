<template>
  <div class="aeris-metadata-title">
    <header>
      <h3>{{ title }}</h3>
    </header>
  </div>
</template>

<script>
import AerisMetadataTitle from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-title/components/aeris-metadata-title.vue";
export default {
  name: "aeris-metadata-title-test",
  components: { AerisMetadataTitle },
  data() {
    return {
      title: "IAGOS"
    };
  }
};
</script>
<style scoped>
.aeris-metadata-title {
  display: flex;
  flex-direction: column;
  border: none;
  background: #fafafa;
  padding: 24px;
}

.aeris-metadata-title header h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
}
</style>