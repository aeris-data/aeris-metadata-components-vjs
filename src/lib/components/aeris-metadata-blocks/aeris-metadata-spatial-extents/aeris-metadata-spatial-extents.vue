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
  <aeris-metadata-layout v-if="visible" :title="$t('spatialextents')" icon="fa fa-globe">

    <!-- app map -->
    <vl-map ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="controls" class="map">
      <!-- map view aka ol.View -->
      <vl-view ref="view" :center="center" :zoom.sync="zoom" :rotation.sync="rotation" />

      <vl-layer-tile id="mapbox">
        <vl-source-mapbox map-id="mapbox.streets-satellite" url="https://api.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={accessToken}" attributions="" access-token="pk.eyJ1IjoiZnJhbmNvaXNhbmRyZSIsImEiOiJjaXVlMGE5b3QwMDBoMm9tZGQ1M2xubzVhIn0.FK8gRVJb4ADNnrO6cNlWUw"
        />
      </vl-layer-tile>

      <vl-layer-vector v-if="onlyPoints">
        <vl-source-cluster :distance="40">
          <vl-source-vector>
            <vl-feature v-for="(extent, index) in spatialExtents" :id="computeFeatureId(extent, index)" :key="computeFeatureId(extent, index)">
              <vl-geom-point v-if="isPoint(extent)" :coordinates="[extent.area.longitude, extent.area.latitude]" />
            </vl-feature>
          </vl-source-vector>

          <vl-style-func :factory="clusterStyleFunc"/>

        </vl-source-cluster>
      </vl-layer-vector>

      <vl-layer-vector v-if="onlyRectangles">
        <vl-source-vector>
          <vl-feature v-for="(extent, index) in spatialExtents" :id="computeFeatureId(extent, index)" :key="computeFeatureId(extent, index)">
            <vl-geom-polygon v-if="isRectangle(extent)" :coordinates="polygonCoords(extent)"/>
            <vl-style-box>
              <vl-style-stroke :width="2" color="#9c2c04"/>
              <vl-style-fill :color="[224, 64, 6, 0.3]"/>
            </vl-style-box>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>

    </vl-map>
  </aeris-metadata-layout>
</template>

<script>
import olcontrol from "ol/control";
import { core as vlCore } from "vuelayers";

export default {
  name: "aeris-metadata-spatial-extents",

  props: {
    lang: {
      type: String,
      default: "en"
    }
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  destroyed: function() {
    document.removeEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
    this.aerisMetadataListener = null;
  },

  created: function() {
    console.log("Aeris Metadata Spatial extents - Creating");
    this.$i18n.locale = this.lang;
    this.aerisMetadataListener = this.handleRefresh.bind(this);
    document.addEventListener(
      "aerisMetadataRefreshed",
      this.aerisMetadataListener
    );
  },

  computed: {
    controls: function() {
      var aux = olcontrol.defaults({
        attribution: false
      });
      return aux;
    },

    markerIcon: function() {
      return "\uf041";
    }
  },
  data() {
    return {
      spatialExtents: null,
      visible: false,
      aerisMetadataListener: null,
      center: [0, 0],
      zoom: 0,
      rotation: 0,
      clickCoordinate: undefined,
      selectedFeatures: [],
      deviceCoordinate: undefined
    };
  },
  methods: {
    handleRefresh: function(data) {
      this.visible = false;
      if (!data || !data.detail) {
        return;
      }
      this.spatialExtents = [];
      if (data.detail.spatialExtents && data.detail.spatialExtents.length>0) {
        this.visible = true;
        this.spatialExtents = data.detail.spatialExtents;
      } else {
        this.visible = false;
      }
    },

    polygonCoords: function(extent) {
      var un = [extent.area.eastLongitude, extent.area.northLatitude];
      var deux = [extent.area.eastLongitude, extent.area.southLatitude];
      var trois = [extent.area.westLongitude, extent.area.southLatitude];
      var quatre = [extent.area.westLongitude, extent.area.northLatitude];
      return [[un, deux, trois, quatre, un]];
    },

    onlyPoints: function() {
      for (var i = 0; i < this.spatialExtents.length; i++) {
        if (this.isPoint(this.spatialExtents[i]) == false) {
          return false;
        }
      }
      return true;
    },

    onlyRectangles: function() {
      for (var i = 0; i < this.spatialExtents.length; i++) {
        if (this.isRectangle(this.spatialExtents[i]) == false) {
          return false;
        }
      }
      return true;
    },

    isPoint: function(extent) {
      if (extent.area.type == "POINT_AREA") {
        return true;
      }
    },

    isRectangle: function(extent) {
      if (extent.area.type == "RECTANGLE_AREA") {
        return true;
      }
    },

    computeFeatureId: function(extent, id) {
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

<style>
.ol-attribution.ol-control {
  display: none;
}
</style>
