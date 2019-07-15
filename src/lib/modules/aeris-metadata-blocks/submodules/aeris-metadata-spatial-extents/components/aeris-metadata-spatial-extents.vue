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
       <div ref="markersPopUp" :class="{ tooltip: activeTab }" :style="styleObject" >{{toolTipText}}</div>
    <div id="mapMask" class="map-mask" />
      <div ref="map" class="map" tabindex="0" />
      <div id="mapCoordinates" class="map-coordinates" />
   
  </aeris-metadata-layout>
</template>

<script>
import AerisMetadataLayout from "../../../../aeris-metadata-ui/submodules/aeris-metadata-layout/components/aeris-metadata-layout";

import Feature from "ol/Feature.js";
import Polygon from "ol/geom/Polygon";
import Select from "ol/interaction/Select.js";
import Point from "ol/geom/Point.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
import Circle from "ol/geom/Circle.js";
import XYZ from "ol/source/XYZ";
import Style from "ol/style/Style";
import Text from "ol/style/Text";
import { click, pointerMove, altKeyOnly } from "ol/events/condition.js";
import { transform } from "ol/proj";
import { createEmpty, extend, isEmpty } from "ol/extent.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { Cluster, OSM, Vector as VectorSource } from "ol/source.js";
import { Circle as CircleStyle, Fill, Stroke, RegularShape } from "ol/style.js";
import _ from "lodash";
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
      raster: null,
      map: null,
      layerArray: [],
      pointLayer: null,
      pointFeature: null,
      pointSource: null,
      pointStyle: null,
      polygonLayer: null,
      polygonSource: null,
      polygonFeature: null,
      polygonStyle: null,
      selectPointerMove: null,
      activeTab: null,
      fontsize: 30,
      rect: {
        northLatitude: 83.0,
        southLatitude: -44.0,
        eastLongitude: 180.0,
        westLongitude: -180.0
      },
      styleObject: {
        top: 0,
        left: 0,
        display: "none"
      },
      toolTipText: ""
    };
  },

  computed: {
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
    if (this.isVisible) {
      this.init();
      this.styleInit();

      this.spatialExtents.forEach((element, index) => {
        this.addPointFeature(element, index);
        this.addPolygonFeature(element);
      });

      this.layerInit();
      this.map = new Map({
        layers: this.layerArray,
        target: this.$refs.map,
        view: new View({
          center: this.center,
          minZoom: 1,
          maxZoom: 15
        })
      });

      this.map.getView().fit(this.getSourceExtent().getExtent(), {
        size: this.map.getSize()
      });
      this.interactionInit();
    }
  },

  methods: {
    computeFeatureId(extent, id) {
      return (
        "Feature_" +
        Math.random()
          .toString(36)
          .substring(7) +
        "_" +
        extent +
        "_" +
        id
      );
    },
    init() {
      this.polygonSource = new VectorSource({ wrapX: false });
      this.pointSource = new VectorSource({ wrapX: false });
    },
    layerInit() {
      this.pointLayer = new VectorLayer({
        source: new Cluster({
          wrapX: false,
          distance: 50,
          source: this.pointSource,
          minResolution: 2000,
          maxResolution: 2000
        }),
        style: this.styleFunction
      });

      this.polygonLayer = new VectorLayer({
        source: this.polygonSource
      });

      this.raster = new TileLayer({
        source: new XYZ({
          url: this.url,
          wrapX: true
        }),
        style: new Style({})
      });
      this.layerArray.push(this.raster, this.pointLayer, this.polygonLayer);
    },
    addPointFeature(element, index) {
      if (element.area.type === "POINT_AREA" && this.isPoint(element)) {
        this.pointSource.addFeature(this.createPointFeature(element, index));
      }
    },
    addPolygonFeature(element) {
      if (element.area.type === "RECTANGLE_AREA" && this.isRectangle(element)) {
        this.polygonSource.addFeature(this.createPolygonFeature(element));
      }
    },
    getSourceExtent() {
      if (!isEmpty(this.pointSource.getExtent())) {
        return this.pointSource;
      } else if (!isEmpty(this.polygonSource.getExtent())) {
        return this.polygonSource;
      }
    },
    styleInit() {
      //style polygon
      this.polygonStyle = new Style({
        stroke: new Stroke({
          color: "rgba(224, 64, 6,1)",
          width: 2
        }),
        fill: new Fill({
          color: "rgba(224, 64, 6,0.4)"
        })
      });
      //style point
      this.pointStyle = new Style({
        text: new Text({
          text: "\uf3c5",
          font: `600 ${this.fontsize}px "Font Awesome 5 Free"`,

          offsetY: -(this.fontsize / 2) + 1,
          fill: new Fill({
            color: "#E04006"
          }),
          stroke: new Stroke({
            color: "rgba(255, 255, 255, 1)",
            width: 1
          })
        })
      });
    },

    createPointFeature(element, index) {
      let feature = new Feature({
        geometry: new Point(
          transform(
            [element.area.longitude, element.area.latitude],
            element.hasOwnProperty("projection") ? element.projection.split(" ").join(":") : "EPSG:4326",
            "EPSG:3857"
          )
        )
      });

      feature.attributes = {
        name: _.get(element, "name") ? element.name : "",
        comment: _.get(element, "comment") ? element.comment : "",
        description: _.get(element, "description") ? element.description : "",
        Country: _.get(element, "additionalData.Country") ? element.additionalData.Country : "",
        "IATA code": _.get(element, 'element.additionalData."IATA code"') ? element.additionalData["IATA code"] : ""
      };
      feature.setId(this.computeFeatureId(element.area.type, index));
      return feature;
    },
    createPolygonFeature(element) {
      this.polygonFeature = new Feature({
        geometry: new Polygon([
          [
            [element.area.westLongitude, element.area.southLatitude],
            [element.area.westLongitude, element.area.northLatitude],
            [element.area.eastLongitude, element.area.northLatitude],
            [element.area.eastLongitude, element.area.southLatitude]
          ]
        ])
      });

      this.polygonFeature.getGeometry().transform("EPSG:4326", "EPSG:3857");
      this.polygonFeature.setStyle(this.polygonStyle);
      this.polygonFeature.attributes = {
        name: element.name
      };
      return this.polygonFeature;
    },

    isPoint(element) {
      return element.area.longitude && element.area.latitude;
    },
    isRectangle(element) {
      return (
        element.area.westLongitude &&
        element.area.southLatitude &&
        element.area.northLatitude &&
        element.area.eastLongitude
      );
    },
    interactionInit() {
      this.selectPointerMove = new Select({
        condition: pointerMove,
        style: this.pointStyle,
        filter: function(feature, layer) {
          if (feature.getGeometry().getType() === "Point") {
            if (feature.get("features").length === 1) return true;
          }
        }
      });
      this.selectPointerMove.on("select", e => {
        let markertooltip = this.$refs.markersPopUp;
        let coord = e.mapBrowserEvent.originalEvent;
        if (
          e.target.getFeatures().item(0) &&
          e.selected[0].values_.features[0].attributes.name &&
          e.selected[0].values_.features[0].attributes.Country
        ) {
          let attribute = e.selected[0].values_.features[0].attributes;
          this.activeTab = true;
          this.styleObject.display = "inline";
          this.styleObject.left = coord.pageX + "px";
          this.styleObject.top = coord.pageY - 15 + "px";
          markertooltip.innerHTML = `<ul style=" list-style: none; padding:0 5px">
            <li>Country : ${attribute.Country}</li>
            <li>${attribute.name}</li>
        </ul>`;
        } else {
          this.activeTab = false;
          this.styleObject.display = "none";
        }
      });
      this.map.addInteraction(this.selectPointerMove);
    },

    styleFunction(feature, resolution) {
      if (resolution != this.currentResolution) {
        this.calculateClusterInfo(resolution);
        this.currentResolution = resolution;
      }
      var style;
      var size = feature.get("features").length;
      if (size > 1) {
        style = new Style({
          image: new CircleStyle({
            radius: feature.get("radius"),
            fill: new Fill({
              color: "#E04006"
            }),
            stroke: new Stroke({
              color: "rgba(255, 255, 255, 1)",
              width: 0.5
            })
          }),
          text: new Text({
            text: size.toString(),
            font: "700 10px Arial",
            fill: new Fill({
              color: "#fff"
            }),
            stroke: new Stroke({
              color: "rgba(128, 128, 128)",
              width: 1
            })
          })
        });
      } else {
        var originalFeature = feature.get("features")[0];
        style = this.pointStyle;
      }
      return style;
    },
    calculateClusterInfo(resolution) {
      var features = this.pointLayer.getSource().getFeatures();
      var feature, radius;
      for (var i = features.length - 1; i >= 0; --i) {
        feature = features[i];
        var originalFeatures = feature.get("features");
        var extent = createEmpty();
        var j = void 0,
          jj = void 0;
        for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
          extend(extent, originalFeatures[j].getGeometry().getExtent());
        }

        radius = 14;
        feature.set("radius", radius);
      }
    }
  }
};
</script>

<style scoped>
.tooltip {
  display: none;
  background: #c8c8c8;
  border: 2px solid #fff;
  background-color: black;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  margin-left: 28px;
  font-weight: bold;
  position: absolute;
  z-index: 1000;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
