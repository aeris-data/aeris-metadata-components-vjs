<i18n>
{
  "en": {
    "spatialextents": "Spatial extents"
  },
  "fr": {
    "spatialextents": "Extension spatiale"
  }
}
</i18n>

<template>
  <aeris-metadata-layout v-if="isVisible" :title="$t('spatialextents')" :theme="theme" icon="fa fa-globe">
    <vl-map
      ref="map"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      :controls="{ attribution: false, zoom: true }"
      class="map"
    >
      <vl-view ref="view" :center="center" :zoom.sync="zoom" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="mapbox">
        <vl-source-mapbox
          map-id="mapbox.streets-satellite"
          url="https://api.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={accessToken}"
          attributions=""
          access-token="pk.eyJ1IjoiZnJhbmNvaXNhbmRyZSIsImEiOiJjaXVlMGE5b3QwMDBoMm9tZGQ1M2xubzVhIn0.FK8gRVJb4ADNnrO6cNlWUw"
        ></vl-source-mapbox>
      </vl-layer-tile>

      <vl-layer-vector v-if="onlyPoints">
        <vl-source-cluster :distance="40">
          <vl-source-vector>
            <vl-feature
              v-for="(extent, index) in spatialExtents"
              :id="computeFeatureId(extent, index)"
              :key="computeFeatureId(extent, index)"
            >
              <vl-geom-point
                v-if="isPoint(extent)"
                :coordinates="[extent.area.longitude, extent.area.latitude]"
              ></vl-geom-point>
            </vl-feature>
          </vl-source-vector>

          <vl-style-func :factory="clusterStyleFunc"></vl-style-func>
        </vl-source-cluster>
      </vl-layer-vector>

      <vl-layer-vector v-if="onlyRectangles">
        <vl-source-vector>
          <vl-feature
            v-for="(extent, index) in spatialExtents"
            :id="computeFeatureId(extent, index)"
            :key="computeFeatureId(extent, index)"
          >
            <vl-geom-polygon v-if="isRectangle(extent)" :coordinates="polygonCoords(extent)"></vl-geom-polygon>
            <vl-style-box>
              <vl-style-stroke :width="2" color="#9c2c04"></vl-style-stroke>
              <vl-style-fill :color="[224, 64, 6, 0.3]"></vl-style-fill>
            </vl-style-box>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>
    </vl-map>
  </aeris-metadata-layout>
</template>

<script>
import { core as vlCore } from "vuelayers";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

export default {
  name: "aeris-metadata-spatial-extents",

  components: { AerisMetadataLayout },

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
    spatialExtents: {
      type: Array,
      default: null
    }
  },

  data() {
    return {
      center: [0, 0],
      zoom: 0,
      rotation: 0
    };
  },

  computed: {
    markerIcon() {
      return "\uf041";
    },
    isVisible() {
      return this.spatialExtents !== null && this.spatialExtents.length > 0;
    }
  },

  watch: {
    language(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    this.$i18n.locale = this.language;
  },

  mounted() {
    this.$refs.view.$mountPromise.then(() => {
      return this.$refs.view.fit([-180, 70, 180, -70]);
    });
  },

  methods: {
    polygonCoords(extent) {
      let un = [extent.area.eastLongitude, extent.area.northLatitude];
      let deux = [extent.area.eastLongitude, extent.area.southLatitude];
      let trois = [extent.area.westLongitude, extent.area.southLatitude];
      let quatre = [extent.area.westLongitude, extent.area.northLatitude];
      return [[un, deux, trois, quatre, un]];
    },

    onlyPoints() {
      for (let i = 0; i < this.spatialExtents.length; i++) {
        if (this.isPoint(this.spatialExtents[i]) == false) {
          return false;
        }
      }
      return true;
    },

    onlyRectangles() {
      for (let i = 0; i < this.spatialExtents.length; i++) {
        if (this.isRectangle(this.spatialExtents[i]) == false) {
          return false;
        }
      }
      return true;
    },

    isPoint(extent) {
      if (extent.area.type == "POINT_AREA") {
        return true;
      }
    },

    isRectangle(extent) {
      if (extent.area.type == "RECTANGLE_AREA") {
        return true;
      }
    },

    computeFeatureId(extent, id) {
      return (
        "Feature_" +
        Math.random()
          .toString(36)
          .substring(7) +
        "_" +
        extent.area.type +
        "_" +
        id
      );
    },

    clusterStyleFunc() {
      const cache = {};

      return function __clusterStyleFunc(feature) {
        const size = feature.get("features").length;
        let style = cache[size];

        if (!style) {
          if (size > 1) {
            style = vlCore.styleHelper.style({
              imageRadius: 10,
              strokeColor: "#fff",
              fillColor: "#E04006",
              text: size.toString(),
              textFillColor: "#fff",
              textFont: "11px Arial"
            });
          } else {
            style = vlCore.styleHelper.style({
              strokeColor: "#fff",
              fillColor: "#E04006",
              textFont: "30px FontAwesome",
              text: "\uf041"
            });
          }
          cache[size] = style;
        }
        return [style];
      };
    }
  }
};
</script>

<style scoped>
.ol-attribution.ol-control {
  display: none;
}
</style>
