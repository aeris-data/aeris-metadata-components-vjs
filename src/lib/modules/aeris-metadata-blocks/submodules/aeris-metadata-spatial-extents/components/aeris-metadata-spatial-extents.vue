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
  <aeris-metadata-layout v-if="isVisible" :title="$t('spatialextents')" :theme="theme" icon="fas fa-globe">
    <div id="mapMask" class="map-mask" />
      <div id="map" class="map" tabindex="0" />
      <div id="mapCoordinates" class="map-coordinates" />
    <!-- <vl-map
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
    </vl-map> -->
  </aeris-metadata-layout>
</template>

<script>
import { core as vlCore } from "vuelayers";
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

const FADEIN_DURATION = 1000; //ms
const DEFAULT_ZOOM = 2;

import Feature from "ol/Feature";
import * as Extent from "ol/extent.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import XYZ from "ol/source/XYZ";
import { transform, transformExtent } from "ol/proj";
import { Draw } from "ol/interaction.js";
import { createStringXY } from "ol/coordinate";
import { defaults, MousePosition } from "ol/control.js";
import { Tile, Vector as VectorLayer } from "ol/layer.js";
import { Cluster, Vector as VectorSource } from "ol/source.js";

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
    },
    url: {
      type: String,
      default:
        "https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZnJhbmNvaXNhbmRyZSIsImEiOiJjaXVlMGE5b3QwMDBoMm9tZGQ1M2xubzVhIn0.FK8gRVJb4ADNnrO6cNlWUw"
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
    /*  this.$refs.view.$mountPromise.then(() => {
      return this.$refs.view.fit([-180, 70, 180, -70]);
    }); */

    if (this.map) {
      return;
    }

    this.defaultCenter = transform([0, 0], "EPSG:4326", "EPSG:900913");
    /* Map background */
    let raster = new Tile({
      source: new XYZ({
        url: this.url
      })
    });

    if (this.hidemap) {
      return;
    }

    /* Create map sources */
    this.initialiseMainSource();
    this.initialisePreviewSource();
    this.map = new Map({
      layers: [raster, this.vector, this.mainClusteredLayer],
      target: this.$el.querySelector("#map"),
      controls: defaults({
        attribution: false
      }),
      view: new View({
        center: this.defaultCenter,
        zoom: DEFAULT_ZOOM,
        maxZoom: 18,
        minZoom: 0
      })
    });

    let extent = transformExtent([-150, 70, 150, -50], "EPSG:4326", "EPSG:900913");
    this.map.getView().fit(extent, this.map.getSize());

    /* Add layers */
    this.map.addLayer(this.previewLayer);
    this.map.addLayer(this.previewClusteredLayer);

    /* Hide map and fade in when loaded */
    let mapViewport = this.$el.querySelector(".ol-viewport");
    mapViewport.style.opacity = 0;

    raster.getSource().on("tileloadend", () => {
      let mapZoom = mapViewport.querySelector(".ol-zoom");
      mapZoom.style.top = "auto";
      mapZoom.style.bottom = "0.5em";

      window.setTimeout(() => {
        mapViewport.style.transition = FADEIN_DURATION / 1000 + "s";
        mapViewport.style.opacity = 1;
      }, 500);
    //  this.handleAddSelectionEvent(this.coordinate);
    });

    //Ajout des coordonnees Lon/Lat du curseur en bas a droite
    this.map.addControl(
      new MousePosition({
        projection: "EPSG:4326",
        coordinateFormat: createStringXY(3),
        className: "custom-mouse-position map-component",
        target: document.getElementById("mapCoordinates"),
        undefinedHTML: "&nbsp;"
      })
    );

    this.draw = new Draw({
      source: this.mainSource,
      type: "LineString",
      geometryFunction: this.drawGeometryFunction,
      maxPoints: 2
    });

    this.draw.addEventListener("drawend", this.handleSelectionDrawEnd);
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
    },
    initialiseMainSource() {
      this.mainSource = new VectorSource({
        wrapX: false,
        noWrap: true
      });

      this.mainClusteredSource = new VectorSource({
        wrapX: false,
        noWrap: true
      });

      this.clusterMainClusteredSource = new Cluster({
        distance: parseInt(30, 10),
        source: this.mainClusteredSource
      });

      this.vector = new VectorLayer({
        source: this.mainSource,
        style: this.featuresStyle
      });

      this.mainClusteredLayer = new VectorLayer({
        source: this.clusterMainClusteredSource,
        style: this.featuresStyle
      });
    },

    initialisePreviewSource() {
      this.previewSource = new VectorSource({
        wrapX: false,
        noWrap: true
      });

      this.previewClusteredSource = new VectorSource({
        wrapX: false,
        noWrap: true
      });

      this.clusterPreviewClusteredSource = new Cluster({
        distance: parseInt(30, 10),
        source: this.previewClusteredSource
      });

      this.previewLayer = new VectorLayer({
        source: this.previewSource,
        style: this.featuresStyle
      });

      this.previewClusteredLayer = new VectorLayer({
        source: this.clusterPreviewClusteredSource,
        style: this.featuresStyle
      });
    }
  }
};
</script>

<style scoped>
.ol-attribution.ol-control {
  display: none;
}
</style>
