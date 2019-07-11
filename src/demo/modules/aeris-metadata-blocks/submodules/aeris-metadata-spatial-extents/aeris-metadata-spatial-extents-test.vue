<template>
<div>
  <section class="map" >
    <aeris-metadata-spatial-extents :spatial-extents="spatialExtents" :theme="theme"></aeris-metadata-spatial-extents>
  </section> 
   <section class="map">
    <aeris-metadata-spatial-extents :spatial-extents="spatialExtentsRect" :theme="theme"></aeris-metadata-spatial-extents>
  </section> 
   <section class="map">
    <aeris-metadata-spatial-extents :spatial-extents="spatialExtentsPoint" :theme="theme"></aeris-metadata-spatial-extents>
  </section> 
  </div>
</template>

<script>
import AerisMetadataSpatialExtents from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-spatial-extents/components/aeris-metadata-spatial-extents";
export default {
  name: "aeris-metadata-spatial-extents-test",
  components: { AerisMetadataSpatialExtents },
  data() {
    return {
      spatialExtentsRect: [
        {
          area: {
            type: "RECTANGLE_AREA",
            northLatitude: -17.0,
            southLatitude: -56.0,
            eastLongitude: -65.0,
            westLongitude: -77.0
          },
          name: "Chile",
          description: "",
          additionalData: null,
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        }
      ],
      spatialExtentsPoint: [
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.3711109161377,
            longitude: 48.2283325195312,
            altitude: null
          },
          name: "Airport: Abadan",
          description: "",
          additionalData: {
            Country: "Iran",
            "IATA code": "ABD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        }
      ],
      spatialExtents: [
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.3711109161377,
            longitude: 48.2283325195312,
            altitude: null
          },
          name: "Airport: Abadan",
          description: "",
          additionalData: {
            Country: "Iran",
            "IATA code": "ABD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 5.26138591766357,
            longitude: -3.92629408836365,
            altitude: null
          },
          name: "Airport: Abidjan",
          description: "",
          additionalData: {
            Country: "Cote d'Ivoire",
            "IATA code": "ABJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 9.00679206848145,
            longitude: 7.2631721496582,
            altitude: null
          },
          name: "Airport: Abuja",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "ABV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 5.60518598556519,
            longitude: -0.166786000132561,
            altitude: null
          },
          name: "Airport: Accra",
          description: "",
          additionalData: {
            Country: "Ghana",
            "IATA code": "ACC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 8.97788906097412,
            longitude: 38.7993202209473,
            altitude: null
          },
          name: "Airport: Addis Ababa",
          description: "",
          additionalData: {
            Country: "Ethiopia",
            "IATA code": "ADD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -34.9449996948242,
            longitude: 138.530563354492,
            altitude: null
          },
          name: "Airport: Adelaide",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "ADL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.3813533782959,
            longitude: -9.546311378479,
            altitude: null
          },
          name: "Airport: Agadir",
          description: "",
          additionalData: {
            Country: "Morocco",
            "IATA code": "AGA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.6749000549316,
            longitude: -4.49910593032837,
            altitude: null
          },
          name: "Airport: Malaga",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "AGP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.6321334838867,
            longitude: 8.29077243804932,
            altitude: null
          },
          name: "Airport: Alghero",
          description: "",
          additionalData: {
            Country: "Italy",
            "IATA code": "AHO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -37.008056640625,
            longitude: 174.79167175293,
            altitude: null
          },
          name: "Airport: Auckland",
          description: "",
          additionalData: {
            Country: "New Zealand",
            "IATA code": "AKL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.3520736694336,
            longitude: 77.0405044555664,
            altitude: null
          },
          name: "Airport: Almaty",
          description: "",
          additionalData: {
            Country: "Kazakhstan",
            "IATA code": "ALA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.7225551605225,
            longitude: 35.9932136535645,
            altitude: null
          },
          name: "Airport: Amman",
          description: "",
          additionalData: {
            Country: "Jordan",
            "IATA code": "AMM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 52.3086128234863,
            longitude: 4.76388883590698,
            altitude: null
          },
          name: "Airport: Amsterdam",
          description: "",
          additionalData: {
            Country: "Netherlands",
            "IATA code": "AMS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 17.1367492675781,
            longitude: -61.792667388916,
            altitude: null
          },
          name: "Airport: Antigua",
          description: "",
          additionalData: {
            Country: "Antigua and Barbuda",
            "IATA code": "ANU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.9868125915527,
            longitude: 58.3609657287598,
            altitude: null
          },
          name: "Airport: Ashgabat",
          description: "",
          additionalData: {
            Country: "Turkmenistan",
            "IATA code": "ASB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 15.2918529510498,
            longitude: 38.9106674194336,
            altitude: null
          },
          name: "Airport: Asmara",
          description: "",
          additionalData: {
            Country: "Eritrea",
            "IATA code": "ASM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.9363594055176,
            longitude: 23.9444675445557,
            altitude: null
          },
          name: "Airport: Athens",
          description: "",
          additionalData: {
            Country: "Greece",
            "IATA code": "ATH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.63671875,
            longitude: -84.4280700683594,
            altitude: null
          },
          name: "Airport: Atlanta",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "ATL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 24.4329719543457,
            longitude: 54.6511383056641,
            altitude: null
          },
          name: "Airport: Abu Dhabi",
          description: "",
          additionalData: {
            Country: "United Arab Emirates",
            "IATA code": "AUH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.6155548095703,
            longitude: 140.218612670898,
            altitude: null
          },
          name: "Airport: Akita",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "AXT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.8987312316895,
            longitude: 30.8004608154297,
            altitude: null
          },
          name: "Airport: Antalya",
          description: "",
          additionalData: {
            Country: "Turkey",
            "IATA code": "AYT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 26.2708339691162,
            longitude: 50.6336097717285,
            altitude: null
          },
          name: "Airport: Bahrain",
          description: "",
          additionalData: {
            Country: "Bahrain",
            "IATA code": "BAH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.2970771789551,
            longitude: 2.07846403121948,
            altitude: null
          },
          name: "Airport: Barcelona",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "BCN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.820930480957,
            longitude: 35.4883880615234,
            altitude: null
          },
          name: "Airport: Beirut",
          description: "",
          additionalData: {
            Country: "Lebanon",
            "IATA code": "BEY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.3379611968994,
            longitude: -16.6522064208984,
            altitude: null
          },
          name: "Airport: Banjul",
          description: "",
          additionalData: {
            Country: "Gambia",
            "IATA code": "BJL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.6811084747314,
            longitude: 100.747283935547,
            altitude: null
          },
          name: "Airport: Bangkok",
          description: "",
          additionalData: {
            Country: "Thailand",
            "IATA code": "BKK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.533543586731,
            longitude: -7.94994401931763,
            altitude: null
          },
          name: "Airport: Bamako",
          description: "",
          additionalData: {
            Country: "Mali",
            "IATA code": "BKO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.9499864578247,
            longitude: 77.6682052612305,
            altitude: null
          },
          name: "Airport: Bangalore",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "BLR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -27.3841667175293,
            longitude: 153.117492675781,
            altitude: null
          },
          name: "Airport: Brisbane",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "BNE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 44.8283348083496,
            longitude: -0.715556025505066,
            altitude: null
          },
          name: "Airport: Bordeaux",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "BOD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 4.70159387588501,
            longitude: -74.1469497680664,
            altitude: null
          },
          name: "Airport: Bogota",
          description: "",
          additionalData: {
            Country: "Colombia",
            "IATA code": "BOG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 19.0886859893799,
            longitude: 72.867919921875,
            altitude: null
          },
          name: "Airport: Mumbai",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "BOM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.3643455505371,
            longitude: -71.0051803588867,
            altitude: null
          },
          name: "Airport: Boston",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "BOS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 6.03923892974854,
            longitude: 10.1226387023926,
            altitude: null
          },
          name: "Airport: Bamenda",
          description: "",
          additionalData: {
            Country: "Cameroon",
            "IATA code": "BPC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.0475006103516,
            longitude: 8.78666687011719,
            altitude: null
          },
          name: "Airport: Bremen",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "BRE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.9013900756836,
            longitude: 4.48444414138794,
            altitude: null
          },
          name: "Airport: Brussels",
          description: "",
          additionalData: {
            Country: "Belgium",
            "IATA code": "BRU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.5490684509277,
            longitude: 47.6621437072754,
            altitude: null
          },
          name: "Airport: Basrah",
          description: "",
          additionalData: {
            Country: "Iraq",
            "IATA code": "BSR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.170166015625,
            longitude: 17.21266746521,
            altitude: null
          },
          name: "Airport: Bratislava",
          description: "",
          additionalData: {
            Country: "Slovakia",
            "IATA code": "BTS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.4369316101074,
            longitude: 19.2555923461914,
            altitude: null
          },
          name: "Airport: Budapest",
          description: "",
          additionalData: {
            Country: "Hungary",
            "IATA code": "BUD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.1753616333008,
            longitude: -76.6683349609375,
            altitude: null
          },
          name: "Airport: Baltimore",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "BWI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -4.25169992446899,
            longitude: 15.2530307769775,
            altitude: null
          },
          name: "Airport: Brazzaville",
          description: "",
          additionalData: {
            Country: "Congo (Brazzaville)",
            "IATA code": "BZV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.1219444274902,
            longitude: 31.4055557250977,
            altitude: null
          },
          name: "Airport: Cairo",
          description: "",
          additionalData: {
            Country: "Egypt",
            "IATA code": "CAI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 23.3924350738525,
            longitude: 113.298782348633,
            altitude: null
          },
          name: "Airport: Guangzhou",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "CAN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 4.81980800628662,
            longitude: -52.3604469299316,
            altitude: null
          },
          name: "Airport: Cayenne",
          description: "",
          additionalData: {
            Country: "French Guiana",
            "IATA code": "CAY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 10.6031169891357,
            longitude: -66.9905853271484,
            altitude: null
          },
          name: "Airport: Caracas",
          description: "",
          additionalData: {
            Country: "Venezuela",
            "IATA code": "CCS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.6547393798828,
            longitude: 88.4467239379883,
            altitude: null
          },
          name: "Airport: Kolkata",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "CCU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.0127792358398,
            longitude: 2.54999995231628,
            altitude: null
          },
          name: "Airport: Paris",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "CDG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 10.307541847229,
            longitude: 123.979438781738,
            altitude: null
          },
          name: "Airport: Cebu",
          description: "",
          additionalData: {
            Country: "Philippines",
            "IATA code": "CEB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -23.6266918182373,
            longitude: -46.6553764343262,
            altitude: null
          },
          name: "Airport: Sao Paulo",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "CGH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -6.1255669593811,
            longitude: 106.655899047852,
            altitude: null
          },
          name: "Airport: Jakarta",
          description: "",
          additionalData: {
            Country: "Indonesia",
            "IATA code": "CGK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.8659172058105,
            longitude: 7.14274406433105,
            altitude: null
          },
          name: "Airport: Cologne",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "CGN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.5196723937988,
            longitude: 113.840888977051,
            altitude: null
          },
          name: "Airport: Zhengzhou",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "CGO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -43.4893569946289,
            longitude: 172.5322265625,
            altitude: null
          },
          name: "Airport: Christchurch",
          description: "",
          additionalData: {
            Country: "New Zealand",
            "IATA code": "CHC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.7993621826172,
            longitude: 12.5949363708496,
            altitude: null
          },
          name: "Airport: Rome",
          description: "",
          additionalData: {
            Country: "Italy",
            "IATA code": "CIA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.7165985107422,
            longitude: 127.499122619629,
            altitude: null
          },
          name: "Airport: Chongju",
          description: "",
          additionalData: {
            Country: "South Korea",
            "IATA code": "CJJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 9.57688903808594,
            longitude: -13.6119613647461,
            altitude: null
          },
          name: "Airport: Conakry",
          description: "",
          additionalData: {
            Country: "Guinea",
            "IATA code": "CKY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.4116897583008,
            longitude: -81.8497924804688,
            altitude: null
          },
          name: "Airport: Cleveland",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "CLE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 3.54322195053101,
            longitude: -76.3815841674805,
            altitude: null
          },
          name: "Airport: Cali",
          description: "",
          additionalData: {
            Country: "Colombia",
            "IATA code": "CLO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.2140007019043,
            longitude: -80.9431381225586,
            altitude: null
          },
          name: "Airport: Charlotte",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "CLT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 7.18075609207153,
            longitude: 79.8841171264648,
            altitude: null
          },
          name: "Airport: Colombo",
          description: "",
          additionalData: {
            Country: "Sri Lanka",
            "IATA code": "CMB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -16.8858337402344,
            longitude: 145.755279541016,
            altitude: null
          },
          name: "Airport: Cairns",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "CNS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 6.35722780227661,
            longitude: 2.38435292243958,
            altitude: null
          },
          name: "Airport: Cotonou",
          description: "",
          additionalData: {
            Country: "Benin",
            "IATA code": "COO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -33.9648056030273,
            longitude: 18.6016674041748,
            altitude: null
          },
          name: "Airport: Cape Town",
          description: "",
          additionalData: {
            Country: "South Africa",
            "IATA code": "CPT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 15.1858329772949,
            longitude: 120.560279846191,
            altitude: null
          },
          name: "Airport: Angeles City",
          description: "",
          additionalData: {
            Country: "Philippines",
            "IATA code": "CRK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.4591979980469,
            longitude: 4.45381689071655,
            altitude: null
          },
          name: "Airport: Charleroi",
          description: "",
          additionalData: {
            Country: "Belgium",
            "IATA code": "CRL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 28.1891574859619,
            longitude: 113.219635009766,
            altitude: null
          },
          name: "Airport: Changcha",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "CSX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.7751998901367,
            longitude: 141.692276000977,
            altitude: null
          },
          name: "Airport: Sapporo",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "CTS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.5785274505615,
            longitude: 103.947082519531,
            altitude: null
          },
          name: "Airport: Chengdu",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "CTU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 21.036527633667,
            longitude: -86.877082824707,
            altitude: null
          },
          name: "Airport: Cancun",
          description: "",
          additionalData: {
            Country: "Mexico",
            "IATA code": "CUN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.0488357543945,
            longitude: -84.6678237915039,
            altitude: null
          },
          name: "Airport: Cincinnati",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "CVG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.3966674804688,
            longitude: -3.34333300590515,
            altitude: null
          },
          name: "Airport: Cardiff",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "CWL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.289722442627,
            longitude: -123.115829467773,
            altitude: null
          },
          name: "Airport: Vancouver",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "CXH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 32.847110748291,
            longitude: -96.8517761230469,
            altitude: null
          },
          name: "Airport: Dallas",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "DAL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.561351776123,
            longitude: 18.2682437896729,
            altitude: null
          },
          name: "Airport: Dubrovnik",
          description: "",
          additionalData: {
            Country: "Croatia",
            "IATA code": "DBV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 28.566499710083,
            longitude: 77.1030883789062,
            altitude: null
          },
          name: "Airport: Delhi",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "DEL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.8616561889648,
            longitude: -104.673179626465,
            altitude: null
          },
          name: "Airport: Denver",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "DEN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 26.265417098999,
            longitude: 50.152027130127,
            altitude: null
          },
          name: "Airport: Dhahran",
          description: "",
          additionalData: {
            Country: "Saudi Arabia",
            "IATA code": "DHA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 14.7397079467773,
            longitude: -17.4902248382568,
            altitude: null
          },
          name: "Airport: Dakar",
          description: "",
          additionalData: {
            Country: "Senegal",
            "IATA code": "DKR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 4.00608110427856,
            longitude: 9.71948146820068,
            altitude: null
          },
          name: "Airport: Douala",
          description: "",
          additionalData: {
            Country: "Cameroon",
            "IATA code": "DLA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 38.9656677246094,
            longitude: 121.538597106934,
            altitude: null
          },
          name: "Airport: Dalian",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "DLC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.7130546569824,
            longitude: 28.7924995422363,
            altitude: null
          },
          name: "Airport: Dalaman",
          description: "",
          additionalData: {
            Country: "Turkey",
            "IATA code": "DLM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.8536109924316,
            longitude: 71.3036117553711,
            altitude: null
          },
          name: "Airport: Dzhambul",
          description: "",
          additionalData: {
            Country: "Kazakhstan",
            "IATA code": "DMB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 55.4086112976074,
            longitude: 37.9061126708984,
            altitude: null
          },
          name: "Airport: Moscow",
          description: "",
          additionalData: {
            Country: "Russia",
            "IATA code": "DME"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.9125833511353,
            longitude: 100.606750488281,
            altitude: null
          },
          name: "Airport: Bangkok",
          description: "",
          additionalData: {
            Country: "Thailand",
            "IATA code": "DMK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 26.4711608886719,
            longitude: 49.7978897094727,
            altitude: null
          },
          name: "Airport: Dammam",
          description: "",
          additionalData: {
            Country: "Saudi Arabia",
            "IATA code": "DMM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.2611255645752,
            longitude: 51.565055847168,
            altitude: null
          },
          name: "Airport: Doha",
          description: "",
          additionalData: {
            Country: "Qatar",
            "IATA code": "DOH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -8.7481689453125,
            longitude: 115.167175292969,
            altitude: null
          },
          name: "Airport: Denpasar",
          description: "",
          additionalData: {
            Country: "Indonesia",
            "IATA code": "DPS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 46.0093116760254,
            longitude: -83.7439346313477,
            altitude: null
          },
          name: "Airport: Drummond Island",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "DRM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.1327667236328,
            longitude: 13.7671613693237,
            altitude: null
          },
          name: "Airport: Dresden",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "DRS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -12.408332824707,
            longitude: 130.872665405273,
            altitude: null
          },
          name: "Airport: Darwin",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "DRW"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.2124443054199,
            longitude: -83.353385925293,
            altitude: null
          },
          name: "Airport: Detroit",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "DTW"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -29.9700889587402,
            longitude: 30.9505195617676,
            altitude: null
          },
          name: "Airport: Durban",
          description: "",
          additionalData: {
            Country: "South Africa",
            "IATA code": "DUR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.2894515991211,
            longitude: 6.76677513122559,
            altitude: null
          },
          name: "Airport: Dusseldorf",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "DUS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.2527770996094,
            longitude: 55.364444732666,
            altitude: null
          },
          name: "Airport: Dubai",
          description: "",
          additionalData: {
            Country: "United Arab Emirates",
            "IATA code": "DXB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 0.0423859991133213,
            longitude: 32.4435043334961,
            altitude: null
          },
          name: "Airport: Entebbe",
          description: "",
          additionalData: {
            Country: "Uganda",
            "IATA code": "EBB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.1280822753906,
            longitude: 32.9950828552246,
            altitude: null
          },
          name: "Airport: Ankara",
          description: "",
          additionalData: {
            Country: "Turkey",
            "IATA code": "ESB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.6925010681152,
            longitude: -74.1686706542969,
            altitude: null
          },
          name: "Airport: Newark",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "EWR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -34.8222236633301,
            longitude: -58.535831451416,
            altitude: null
          },
          name: "Airport: Buenos Aires",
          description: "",
          additionalData: {
            Country: "Argentina",
            "IATA code": "EZE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 64.8151168823242,
            longitude: -147.856262207031,
            altitude: null
          },
          name: "Airport: Fairbanks",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "FAI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.776195526123,
            longitude: -119.718139648438,
            altitude: null
          },
          name: "Airport: Fresno",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "FAT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.8044738769531,
            longitude: 12.2507972717285,
            altitude: null
          },
          name: "Airport: Rome",
          description: "",
          additionalData: {
            Country: "Italy",
            "IATA code": "FCO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -13.8486108779907,
            longitude: -171.740829467773,
            altitude: null
          },
          name: "Airport: Apia",
          description: "",
          additionalData: {
            Country: "Samoa",
            "IATA code": "FGI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -4.38574981689453,
            longitude: 15.4445686340332,
            altitude: null
          },
          name: "Airport: Kinshasa",
          description: "",
          additionalData: {
            Country: "Congo (Kinshasa)",
            "IATA code": "FIH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.1122245788574,
            longitude: 56.3239631652832,
            altitude: null
          },
          name: "Airport: Fujeirah",
          description: "",
          additionalData: {
            Country: "United Arab Emirates",
            "IATA code": "FJR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.7793006896973,
            longitude: 8.08047962188721,
            altitude: null
          },
          name: "Airport: Karlsruhe/Baden-Baden",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "FKB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 8.6164436340332,
            longitude: -13.1954889297485,
            altitude: null
          },
          name: "Airport: Freetown",
          description: "",
          additionalData: {
            Country: "Sierra Leone",
            "IATA code": "FNA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.0264205932617,
            longitude: 8.54312515258789,
            altitude: null
          },
          name: "Airport: Frankfurt",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "FRA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.5859413146973,
            longitude: 130.45068359375,
            altitude: null
          },
          name: "Airport: Fukuoka",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "FUK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -22.8089027404785,
            longitude: -43.2436485290527,
            altitude: null
          },
          name: "Airport: Rio De Janeiro",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "GIG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.5583114624023,
            longitude: 126.790588378906,
            altitude: null
          },
          name: "Airport: Seoul",
          description: "",
          additionalData: {
            Country: "South Korea",
            "IATA code": "GMP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.9009704589844,
            longitude: 2.76054692268372,
            altitude: null
          },
          name: "Airport: Gerona",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "GRO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -23.4320755004883,
            longitude: -46.4695091247559,
            altitude: null
          },
          name: "Airport: Sao Paulo",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "GRU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 46.9910659790039,
            longitude: 15.4396276473999,
            altitude: null
          },
          name: "Airport: Graz",
          description: "",
          additionalData: {
            Country: "Austria",
            "IATA code": "GRZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 14.5832719802856,
            longitude: -90.527473449707,
            altitude: null
          },
          name: "Airport: Guatemala City",
          description: "",
          additionalData: {
            Country: "Guatemala",
            "IATA code": "GUA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.4834499359131,
            longitude: 144.795989990234,
            altitude: null
          },
          name: "Airport: Agana",
          description: "",
          additionalData: {
            Country: "Guam",
            "IATA code": "GUM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.4674987792969,
            longitude: 50.0466651916504,
            altitude: null
          },
          name: "Airport: Baku",
          description: "",
          additionalData: {
            Country: "Azerbaijan",
            "IATA code": "GYD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -2.15741896629333,
            longitude: -79.8835601806641,
            altitude: null
          },
          name: "Airport: Guayaquil",
          description: "",
          additionalData: {
            Country: "Ecuador",
            "IATA code": "GYE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 52.4610557556152,
            longitude: 9.68507766723633,
            altitude: null
          },
          name: "Airport: Hannover",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "HAJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.6303901672363,
            longitude: 9.98822784423828,
            altitude: null
          },
          name: "Airport: Hamburg",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "HAM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 21.22119140625,
            longitude: 105.807174682617,
            altitude: null
          },
          name: "Airport: Hanoi",
          description: "",
          additionalData: {
            Country: "Vietnam",
            "IATA code": "HAN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.9891529083252,
            longitude: -82.4090881347656,
            altitude: null
          },
          name: "Airport: Havana",
          description: "",
          additionalData: {
            Country: "Cuba",
            "IATA code": "HAV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 60.3172225952148,
            longitude: 24.9633331298828,
            altitude: null
          },
          name: "Airport: Helsinki",
          description: "",
          additionalData: {
            Country: "Finland",
            "IATA code": "HEL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.3397178649902,
            longitude: 25.1802978515625,
            altitude: null
          },
          name: "Airport: Heraklion",
          description: "",
          additionalData: {
            Country: "Greece",
            "IATA code": "HER"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.7800197601318,
            longitude: 117.298439025879,
            altitude: null
          },
          name: "Airport: Hefei",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "HFE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.2295036315918,
            longitude: 120.434455871582,
            altitude: null
          },
          name: "Airport: Hangzhou",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "HGH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.4361114501953,
            longitude: 132.919448852539,
            altitude: null
          },
          name: "Airport: Hiroshima",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "HIJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.3089199066162,
            longitude: 113.914604187012,
            altitude: null
          },
          name: "Airport: Hong Kong",
          description: "",
          additionalData: {
            Country: "Hong Kong",
            "IATA code": "HKG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.5522575378418,
            longitude: 139.779693603516,
            altitude: null
          },
          name: "Airport: Tokyo",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "HND"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 21.3186817169189,
            longitude: -157.922424316406,
            altitude: null
          },
          name: "Airport: Honolulu",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "HNL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 20.7855892181396,
            longitude: -76.3151092529297,
            altitude: null
          },
          name: "Airport: Holguin",
          description: "",
          additionalData: {
            Country: "Cuba",
            "IATA code": "HOG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -17.9318065643311,
            longitude: 31.0928478240967,
            altitude: null
          },
          name: "Airport: Harare",
          description: "",
          additionalData: {
            Country: "Zimbabwe",
            "IATA code": "HRE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 27.178316116333,
            longitude: 33.7994346618652,
            altitude: null
          },
          name: "Airport: Hurghada",
          description: "",
          additionalData: {
            Country: "Egypt",
            "IATA code": "HRG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.0808334350586,
            longitude: -0.323332995176315,
            altitude: null
          },
          name: "Airport: Huesca",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "HSK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 17.4531173706055,
            longitude: 78.4675827026367,
            altitude: null
          },
          name: "Airport: Hyderabad",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "HYD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 38.9445343017578,
            longitude: -77.455810546875,
            altitude: null
          },
          name: "Airport: Washington",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "IAD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 29.984432220459,
            longitude: -95.341438293457,
            altitude: null
          },
          name: "Airport: Houston",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "IAH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 7.36245822906494,
            longitude: 3.97833299636841,
            altitude: null
          },
          name: "Airport: Ibadan",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "IBA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.4690742492676,
            longitude: 126.45051574707,
            altitude: null
          },
          name: "Airport: Seoul",
          description: "",
          additionalData: {
            Country: "South Korea",
            "IATA code": "ICN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.4161109924316,
            longitude: 51.1522216796875,
            altitude: null
          },
          name: "Airport: Tehran",
          description: "",
          additionalData: {
            Country: "Iran",
            "IATA code": "IKA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 8.44021129608154,
            longitude: 4.49391889572144,
            altitude: null
          },
          name: "Airport: Ilorin",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "ILR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.6166534423828,
            longitude: 73.099235534668,
            altitude: null
          },
          name: "Airport: Islamabad",
          description: "",
          additionalData: {
            Country: "Pakistan",
            "IATA code": "ISB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.976921081543,
            longitude: 28.8146057128906,
            altitude: null
          },
          name: "Airport: Istanbul",
          description: "",
          additionalData: {
            Country: "Turkey",
            "IATA code": "IST"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 21.6795635223389,
            longitude: 39.1565361022949,
            altitude: null
          },
          name: "Airport: Jeddah",
          description: "",
          additionalData: {
            Country: "Saudi Arabia",
            "IATA code": "JED"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.6397514343262,
            longitude: -73.778923034668,
            altitude: null
          },
          name: "Airport: New York",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "JFK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 11.5472002029419,
            longitude: 43.1594009399414,
            altitude: null
          },
          name: "Airport: Djibouti",
          description: "",
          additionalData: {
            Country: "Djibouti",
            "IATA code": "JIB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -26.1391658782959,
            longitude: 28.246000289917,
            altitude: null
          },
          name: "Airport: Johannesburg",
          description: "",
          additionalData: {
            Country: "South Africa",
            "IATA code": "JNB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.047589302063,
            longitude: 8.52462196350098,
            altitude: null
          },
          name: "Airport: Kano",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "KAN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.5461120605469,
            longitude: 133.669448852539,
            altitude: null
          },
          name: "Airport: Kochi",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "KCZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 63.9850006103516,
            longitude: -22.6055564880371,
            altitude: null
          },
          name: "Airport: Keflavik",
          description: "",
          additionalData: {
            Country: "Iceland",
            "IATA code": "KEF"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -1.96862804889679,
            longitude: 30.1394500732422,
            altitude: null
          },
          name: "Airport: Kigali",
          description: "",
          additionalData: {
            Country: "Rwanda",
            "IATA code": "KGL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.5770931243896,
            longitude: 120.350006103516,
            altitude: null
          },
          name: "Airport: Kaohsiung",
          description: "",
          additionalData: {
            Country: "Taiwan",
            "IATA code": "KHH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 28.8649997711182,
            longitude: 115.900001525879,
            altitude: null
          },
          name: "Airport: Nanchang",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "KHN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.5280456542969,
            longitude: 135.188354492188,
            altitude: null
          },
          name: "Airport: Khabarovsk",
          description: "",
          additionalData: {
            Country: "Russia",
            "IATA code": "KHV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.4347229003906,
            longitude: 135.244171142578,
            altitude: null
          },
          name: "Airport: Osaka",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "KIX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.8772220611572,
            longitude: 131.448608398438,
            altitude: null
          },
          name: "Airport: Miyazaki",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "KMI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 19.7387676239014,
            longitude: -156.045623779297,
            altitude: null
          },
          name: "Airport: Kona",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "KOA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.8033962249756,
            longitude: 130.71940612793,
            altitude: null
          },
          name: "Airport: Kagoshima",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "KOJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 15.5894966125488,
            longitude: 32.5531616210938,
            altitude: null
          },
          name: "Airport: Khartoum",
          description: "",
          additionalData: {
            Country: "Sudan",
            "IATA code": "KRT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 27.6965827941895,
            longitude: 85.3591003417969,
            altitude: null
          },
          name: "Airport: Kathmandu",
          description: "",
          additionalData: {
            Country: "Nepal",
            "IATA code": "KTM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 2.7455780506134,
            longitude: 101.709915161133,
            altitude: null
          },
          name: "Airport: Kuala Lumpur",
          description: "",
          additionalData: {
            Country: "Malaysia",
            "IATA code": "KUL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 29.2265663146973,
            longitude: 47.9689292907715,
            altitude: null
          },
          name: "Airport: Kuwait City",
          description: "",
          additionalData: {
            Country: "Kuwait",
            "IATA code": "KWI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -8.85837459564209,
            longitude: 13.2311782836914,
            altitude: null
          },
          name: "Airport: Luanda",
          description: "",
          additionalData: {
            Country: "Angola",
            "IATA code": "LAD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.0800552368164,
            longitude: -115.152252197266,
            altitude: null
          },
          name: "Airport: Las Vegas",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "LAS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.9425354003906,
            longitude: -118.408073425293,
            altitude: null
          },
          name: "Airport: Los Angeles",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "LAX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 0.458600014448166,
            longitude: 9.41228294372559,
            altitude: null
          },
          name: "Airport: Libreville",
          description: "",
          additionalData: {
            Country: "Gabon",
            "IATA code": "LBV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.8751182556152,
            longitude: 33.6248512268066,
            altitude: null
          },
          name: "Airport: Larnaca",
          description: "",
          additionalData: {
            Country: "Cyprus",
            "IATA code": "LCA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.843936920166,
            longitude: -2.37009692192078,
            altitude: null
          },
          name: "Airport: Almeria",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "LEI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.432445526123,
            longitude: 12.2416334152222,
            altitude: null
          },
          name: "Airport: Leipzig",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "LEJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 6.16561079025269,
            longitude: 1.25451099872589,
            altitude: null
          },
          name: "Airport: Lome",
          description: "",
          additionalData: {
            Country: "Togo",
            "IATA code": "LFW"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.1480560302734,
            longitude: -0.190277993679047,
            altitude: null
          },
          name: "Airport: London",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "LGW"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.4775009155273,
            longitude: -0.461389005184174,
            altitude: null
          },
          name: "Airport: London",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "LHR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -12.0218887329102,
            longitude: -77.1143188476562,
            altitude: null
          },
          name: "Airport: Lima",
          description: "",
          additionalData: {
            Country: "Peru",
            "IATA code": "LIM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 38.7813110351562,
            longitude: -9.13591861724854,
            altitude: null
          },
          name: "Airport: Lisbon",
          description: "",
          additionalData: {
            Country: "Portugal",
            "IATA code": "LIS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.2332191467285,
            longitude: 14.1875114440918,
            altitude: null
          },
          name: "Airport: Linz",
          description: "",
          additionalData: {
            Country: "Austria",
            "IATA code": "LNZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 6.57736921310425,
            longitude: 3.32115602493286,
            altitude: null
          },
          name: "Airport: Lagos",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "LOS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 27.9318866729736,
            longitude: -15.38658618927,
            altitude: null
          },
          name: "Airport: Gran Canaria",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "LPA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.1033325195312,
            longitude: -84.4186096191406,
            altitude: null
          },
          name: "Airport: Cincinnati",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "LUK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -15.3308172225952,
            longitude: 28.4526271820068,
            altitude: null
          },
          name: "Airport: Lusaka",
          description: "",
          additionalData: {
            Country: "Zambia",
            "IATA code": "LUN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.671028137207,
            longitude: 32.7065811157227,
            altitude: null
          },
          name: "Airport: Luxor",
          description: "",
          additionalData: {
            Country: "Egypt",
            "IATA code": "LXR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.5051422119141,
            longitude: -1.99342799186707,
            altitude: null
          },
          name: "Airport: Lyneham",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "LYE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 45.7263870239258,
            longitude: 5.09083318710327,
            altitude: null
          },
          name: "Airport: Lyon",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "LYS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.9944143295288,
            longitude: 80.1805191040039,
            altitude: null
          },
          name: "Airport: Madras",
          description: "",
          additionalData: {
            Country: "India",
            "IATA code": "MAA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.4935569763184,
            longitude: -3.56676411628723,
            altitude: null
          },
          name: "Airport: Madrid",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "MAD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.3537445068359,
            longitude: -2.27495002746582,
            altitude: null
          },
          name: "Airport: Manchester",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "MAN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 28.4293937683105,
            longitude: -81.3089904785156,
            altitude: null
          },
          name: "Airport: Orlando",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MCO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 23.5932788848877,
            longitude: 58.2844429016113,
            altitude: null
          },
          name: "Airport: Muscat",
          description: "",
          additionalData: {
            Country: "Oman",
            "IATA code": "MCT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -37.6733322143555,
            longitude: 144.843338012695,
            altitude: null
          },
          name: "Airport: Melbourne",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "MEL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 19.4363021850586,
            longitude: -99.0720977783203,
            altitude: null
          },
          name: "Airport: Mexico City",
          description: "",
          additionalData: {
            Country: "Mexico",
            "IATA code": "MEX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.793249130249,
            longitude: -80.2905578613281,
            altitude: null
          },
          name: "Airport: Miami",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MIA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.9472236633301,
            longitude: -87.8965835571289,
            altitude: null
          },
          name: "Airport: Milwaukee",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MKE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.8574981689453,
            longitude: 14.477499961853,
            altitude: null
          },
          name: "Airport: Malta",
          description: "",
          additionalData: {
            Country: "Malta",
            "IATA code": "MLA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.8824043273926,
            longitude: -95.7834625244141,
            altitude: null
          },
          name: "Airport: Mcalester",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MLC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 4.19183301925659,
            longitude: 73.5291290283203,
            altitude: null
          },
          name: "Airport: Male",
          description: "",
          additionalData: {
            Country: "Maldives",
            "IATA code": "MLE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 14.5086469650269,
            longitude: 121.019584655762,
            altitude: null
          },
          name: "Airport: Manila",
          description: "",
          additionalData: {
            Country: "Philippines",
            "IATA code": "MNL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -25.9208354949951,
            longitude: 32.5726051330566,
            altitude: null
          },
          name: "Airport: Maputo",
          description: "",
          additionalData: {
            Country: "Mozambique",
            "IATA code": "MPM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.4355545043945,
            longitude: 5.21361112594604,
            altitude: null
          },
          name: "Airport: Marseille",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "MRS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 44.8819541931152,
            longitude: -93.2217636108398,
            altitude: null
          },
          name: "Airport: Minneapolis",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MSP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 29.9933891296387,
            longitude: -90.2580261230469,
            altitude: null
          },
          name: "Airport: New Orleans",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "MSY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.3537826538086,
            longitude: 11.7860860824585,
            altitude: null
          },
          name: "Airport: Munich",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "MUC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -34.8384170532227,
            longitude: -56.0308074951172,
            altitude: null
          },
          name: "Airport: Montevideo",
          description: "",
          additionalData: {
            Country: "Uruguay",
            "IATA code": "MVD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 45.6306076049805,
            longitude: 8.72811126708984,
            altitude: null
          },
          name: "Airport: Milano",
          description: "",
          additionalData: {
            Country: "Italy",
            "IATA code": "MXP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -1.31916701793671,
            longitude: 36.9275016784668,
            altitude: null
          },
          name: "Airport: Nairobi",
          description: "",
          additionalData: {
            Country: "Kenya",
            "IATA code": "NBO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.6584014892578,
            longitude: 7.21586990356445,
            altitude: null
          },
          name: "Airport: Nice",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "NCE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.1336889266968,
            longitude: 15.0340194702148,
            altitude: null
          },
          name: "Airport: Ndjamena",
          description: "",
          additionalData: {
            Country: "Chad",
            "IATA code": "NDJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 29.8266830444336,
            longitude: 121.461906433105,
            altitude: null
          },
          name: "Airport: Ninbo",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "NGB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.8584136962891,
            longitude: 136.805404663086,
            altitude: null
          },
          name: "Airport: Nagoya",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "NGO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.4815473556519,
            longitude: 2.18361401557922,
            altitude: null
          },
          name: "Airport: Niamey",
          description: "",
          additionalData: {
            Country: "Niger",
            "IATA code": "NIM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.0978565216064,
            longitude: -15.9479560852051,
            altitude: null
          },
          name: "Airport: Nouakchott",
          description: "",
          additionalData: {
            Country: "Mauritania",
            "IATA code": "NKC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.7420425415039,
            longitude: 118.862022399902,
            altitude: null
          },
          name: "Airport: Nanjing",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "NKG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.2550010681152,
            longitude: 136.92399597168,
            altitude: null
          },
          name: "Airport: Nagoya",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "NKM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.764720916748,
            longitude: 140.386383056641,
            altitude: null
          },
          name: "Airport: Tokyo",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "NRT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 3.72255611419678,
            longitude: 11.5532693862915,
            altitude: null
          },
          name: "Airport: Yaounde",
          description: "",
          additionalData: {
            Country: "Cameroon",
            "IATA code": "NSI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.4986991882324,
            longitude: 11.0668973922729,
            altitude: null
          },
          name: "Airport: Nuremberg",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "NUE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.7212791442871,
            longitude: -122.220718383789,
            altitude: null
          },
          name: "Airport: Oakland",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "OAK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 42.7333335876465,
            longitude: 143.217224121094,
            altitude: null
          },
          name: "Airport: Obihiro",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "OBO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 20.8986492156982,
            longitude: -156.430450439453,
            altitude: null
          },
          name: "Airport: Kahului",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "OGG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 26.1958141326904,
            longitude: 127.645866394043,
            altitude: null
          },
          name: "Airport: Okinawa",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "OKA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.9786033630371,
            longitude: -87.9048385620117,
            altitude: null
          },
          name: "Airport: Chicago",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "ORD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.7252769470215,
            longitude: 2.35944390296936,
            altitude: null
          },
          name: "Airport: Paris",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "ORY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.1988906860352,
            longitude: 2.86222195625305,
            altitude: null
          },
          name: "Airport: Ostend",
          description: "",
          additionalData: {
            Country: "Belgium",
            "IATA code": "OST"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 44.5721626281738,
            longitude: 26.1021785736084,
            altitude: null
          },
          name: "Airport: Bucharest",
          description: "",
          additionalData: {
            Country: "Romania",
            "IATA code": "OTP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.3531942367554,
            longitude: -1.5124169588089,
            altitude: null
          },
          name: "Airport: Ouagadougou",
          description: "",
          additionalData: {
            Country: "Burkina Faso",
            "IATA code": "OUA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 45.5887222290039,
            longitude: -122.597503662109,
            altitude: null
          },
          name: "Airport: Portland",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "PDX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.0801124572754,
            longitude: 116.58455657959,
            altitude: null
          },
          name: "Airport: Beijing",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "PEK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 5.29713916778564,
            longitude: 100.276863098145,
            altitude: null
          },
          name: "Airport: Penang",
          description: "",
          additionalData: {
            Country: "Malaysia",
            "IATA code": "PEN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -31.9402770996094,
            longitude: 115.966941833496,
            altitude: null
          },
          name: "Airport: Perth",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "PER"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.7180404663086,
            longitude: 32.4857292175293,
            altitude: null
          },
          name: "Airport: Paphos",
          description: "",
          additionalData: {
            Country: "Cyprus",
            "IATA code": "PFO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 5.01549386978149,
            longitude: 6.94959402084351,
            altitude: null
          },
          name: "Airport: Port Harcourt",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "PHC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.8719444274902,
            longitude: -75.2411422729492,
            altitude: null
          },
          name: "Airport: Philadelphia",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "PHL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 33.4342765808105,
            longitude: -112.011581420898,
            altitude: null
          },
          name: "Airport: Phoenix",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "PHX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 39.5536117553711,
            longitude: 2.72777795791626,
            altitude: null
          },
          name: "Airport: Palma de Mallorca",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "PMI"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -4.81602811813354,
            longitude: 11.8865966796875,
            altitude: null
          },
          name: "Airport: Pointe-noire",
          description: "",
          additionalData: {
            Country: "Congo (Brazzaville)",
            "IATA code": "PNR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 19.7579002380371,
            longitude: -70.5700302124023,
            altitude: null
          },
          name: "Airport: Puerto Plata",
          description: "",
          additionalData: {
            Country: "Dominican Republic",
            "IATA code": "POP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -17.5566673278809,
            longitude: -149.611389160156,
            altitude: null
          },
          name: "Airport: Papeete",
          description: "",
          additionalData: {
            Country: "French Polynesia",
            "IATA code": "PPT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.1008338928223,
            longitude: 14.2600002288818,
            altitude: null
          },
          name: "Airport: Prague",
          description: "",
          additionalData: {
            Country: "Czech Republic",
            "IATA code": "PRG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.6839179992676,
            longitude: 10.392749786377,
            altitude: null
          },
          name: "Airport: Pisa",
          description: "",
          additionalData: {
            Country: "Italy",
            "IATA code": "PSA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 16.2653064727783,
            longitude: -61.5318069458008,
            altitude: null
          },
          name: "Airport: Pointe-a-pitre",
          description: "",
          additionalData: {
            Country: "Guadeloupe",
            "IATA code": "PTP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 9.071364402771,
            longitude: -79.3834533691406,
            altitude: null
          },
          name: "Airport: Panama City",
          description: "",
          additionalData: {
            Country: "Panama",
            "IATA code": "PTY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.5673675537109,
            longitude: -68.3634338378906,
            altitude: null
          },
          name: "Airport: Punta Cana",
          description: "",
          additionalData: {
            Country: "Dominican Republic",
            "IATA code": "PUJ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.1795272827148,
            longitude: 128.938217163086,
            altitude: null
          },
          name: "Airport: Busan",
          description: "",
          additionalData: {
            Country: "South Korea",
            "IATA code": "PUS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 44.8935317993164,
            longitude: 13.922191619873,
            altitude: null
          },
          name: "Airport: Pula",
          description: "",
          additionalData: {
            Country: "Croatia",
            "IATA code": "PUY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.1433773040771,
            longitude: 121.805213928223,
            altitude: null
          },
          name: "Airport: Shanghai",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "PVG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 1.36041700839996,
            longitude: 103.909530639648,
            altitude: null
          },
          name: "Airport: Paya Lebar",
          description: "",
          additionalData: {
            Country: "Singapore",
            "IATA code": "QPG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -8.12679386138916,
            longitude: -34.923038482666,
            altitude: null
          },
          name: "Airport: Recife",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "REC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.4054183959961,
            longitude: 28.0861911773682,
            altitude: null
          },
          name: "Airport: Rhodes",
          description: "",
          additionalData: {
            Country: "Greece",
            "IATA code": "RHO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 56.9236106872559,
            longitude: 23.9711112976074,
            altitude: null
          },
          name: "Airport: Riga",
          description: "",
          additionalData: {
            Country: "Latvia",
            "IATA code": "RIX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.9181671142578,
            longitude: 12.2783327102661,
            altitude: null
          },
          name: "Airport: Laage",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "RLG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.5571117401123,
            longitude: 34.5837097167969,
            altitude: null
          },
          name: "Airport: Marsa Alam",
          description: "",
          additionalData: {
            Country: "Egypt",
            "IATA code": "RMF"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 24.9576396942139,
            longitude: 46.6987762451172,
            altitude: null
          },
          name: "Airport: Riyadh",
          description: "",
          additionalData: {
            Country: "Saudi Arabia",
            "IATA code": "RUH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 15.4762582778931,
            longitude: 44.2197380065918,
            altitude: null
          },
          name: "Airport: Sanaa",
          description: "",
          additionalData: {
            Country: "Yemen",
            "IATA code": "SAH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 13.4409465789795,
            longitude: -89.0557250976562,
            altitude: null
          },
          name: "Airport: San Salvador",
          description: "",
          additionalData: {
            Country: "El Salvador",
            "IATA code": "SAL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 32.7335548400879,
            longitude: -117.189666748047,
            altitude: null
          },
          name: "Airport: San Diego",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "SAN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -33.3929748535156,
            longitude: -70.7858047485352,
            altitude: null
          },
          name: "Airport: Santiago",
          description: "",
          additionalData: {
            Country: "Chile",
            "IATA code": "SCL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.4296646118164,
            longitude: -69.6689224243164,
            altitude: null
          },
          name: "Airport: Santo Domingo",
          description: "",
          additionalData: {
            Country: "Dominican Republic",
            "IATA code": "SDQ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -22.9104614257812,
            longitude: -43.1631317138672,
            altitude: null
          },
          name: "Airport: Rio De Janeiro",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "SDU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 32.1146621704102,
            longitude: 34.7822380065918,
            altitude: null
          },
          name: "Airport: Tel Aviv",
          description: "",
          additionalData: {
            Country: "Israel",
            "IATA code": "SDV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.4490013122559,
            longitude: -122.309303283691,
            altitude: null
          },
          name: "Airport: Seattle",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "SEA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 37.6189727783203,
            longitude: -122.374885559082,
            altitude: null
          },
          name: "Airport: San Francisco",
          description: "",
          additionalData: {
            Country: "United States",
            "IATA code": "SFO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 10.8187971115112,
            longitude: 106.65185546875,
            altitude: null
          },
          name: "Airport: Ho Chi Minh City",
          description: "",
          additionalData: {
            Country: "Vietnam",
            "IATA code": "SGN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.1978740692139,
            longitude: 121.336318969727,
            altitude: null
          },
          name: "Airport: Shanghai",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "SHA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.3824005126953,
            longitude: 123.290100097656,
            altitude: null
          },
          name: "Airport: Shenyang",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "SHE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 1.3501889705658,
            longitude: 103.994430541992,
            altitude: null
          },
          name: "Airport: Singapore",
          description: "",
          additionalData: {
            Country: "Singapore",
            "IATA code": "SIN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 9.99386119842529,
            longitude: -84.2088088989258,
            altitude: null
          },
          name: "Airport: San Jose",
          description: "",
          additionalData: {
            Country: "Costa Rica",
            "IATA code": "SJO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.439416885376,
            longitude: -66.0018310546875,
            altitude: null
          },
          name: "Airport: San Juan",
          description: "",
          additionalData: {
            Country: "Puerto Rico",
            "IATA code": "SJU"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 40.5197257995605,
            longitude: 22.9709491729736,
            altitude: null
          },
          name: "Airport: Thessaloniki",
          description: "",
          additionalData: {
            Country: "Greece",
            "IATA code": "SKG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 12.9163217544556,
            longitude: 5.20718908309937,
            altitude: null
          },
          name: "Airport: Sokoto",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "SKO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.9713897705078,
            longitude: -25.1706390380859,
            altitude: null
          },
          name: "Airport: Santa Maria",
          description: "",
          additionalData: {
            Country: "Portugal",
            "IATA code": "SMA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 52.701976776123,
            longitude: -8.92481708526611,
            altitude: null
          },
          name: "Airport: Shannon",
          description: "",
          additionalData: {
            Country: "Ireland",
            "IATA code": "SNN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -12.9109935760498,
            longitude: -38.3310432434082,
            altitude: null
          },
          name: "Airport: Salvador",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "SSA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 3.75526690483093,
            longitude: 8.70871734619141,
            altitude: null
          },
          name: "Airport: Malabo",
          description: "",
          additionalData: {
            Country: "Equatorial Guinea",
            "IATA code": "SSG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.8849983215332,
            longitude: 0.234999999403954,
            altitude: null
          },
          name: "Airport: London",
          description: "",
          additionalData: {
            Country: "United Kingdom",
            "IATA code": "STN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.6898765563965,
            longitude: 9.22196388244629,
            altitude: null
          },
          name: "Airport: Stuttgart",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "STR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -7.37983083724976,
            longitude: 112.78685760498,
            altitude: null
          },
          name: "Airport: Surabaya",
          description: "",
          additionalData: {
            Country: "Indonesia",
            "IATA code": "SUB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.5383186340332,
            longitude: 7.62823295593262,
            altitude: null
          },
          name: "Airport: Strasbourg",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "SXB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.0409526824951,
            longitude: -63.1088981628418,
            altitude: null
          },
          name: "Airport: Philipsburg",
          description: "",
          additionalData: {
            Country: "Netherlands Antilles",
            "IATA code": "SXM"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -33.9461097717285,
            longitude: 151.177215576172,
            altitude: null
          },
          name: "Airport: Sydney",
          description: "",
          additionalData: {
            Country: "Australia",
            "IATA code": "SYD"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 18.3028964996338,
            longitude: 109.412269592285,
            altitude: null
          },
          name: "Airport: Sanya",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "SYX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.7933044433594,
            longitude: 13.0043325424194,
            altitude: null
          },
          name: "Airport: Salzburg",
          description: "",
          additionalData: {
            Country: "Austria",
            "IATA code": "SZG"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.4269981384277,
            longitude: 11.7834358215332,
            altitude: null
          },
          name: "Airport: Parchim",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "SZW"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.6392574310303,
            longitude: 113.810661315918,
            altitude: null
          },
          name: "Airport: Shenzhen",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "SZX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.214168548584,
            longitude: 134.015548706055,
            altitude: null
          },
          name: "Airport: Takamatsu",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "TAK"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 36.2661094665527,
            longitude: 120.374435424805,
            altitude: null
          },
          name: "Airport: Qingdao",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "TAO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 41.2578620910645,
            longitude: 69.2811889648438,
            altitude: null
          },
          name: "Airport: Tashkent",
          description: "",
          additionalData: {
            Country: "Uzbekistan",
            "IATA code": "TAS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 38.7618408203125,
            longitude: -27.0907974243164,
            altitude: null
          },
          name: "Airport: Lajes (terceira Island)",
          description: "",
          additionalData: {
            Country: "Portugal",
            "IATA code": "TER"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 28.0444755554199,
            longitude: -16.57248878479,
            altitude: null
          },
          name: "Airport: Tenerife",
          description: "",
          additionalData: {
            Country: "Spain",
            "IATA code": "TFS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 35.6891670227051,
            longitude: 51.3134155273438,
            altitude: null
          },
          name: "Airport: Tehran",
          description: "",
          additionalData: {
            Country: "Iran",
            "IATA code": "THR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 14.8756580352783,
            longitude: 5.26535797119141,
            altitude: null
          },
          name: "Airport: Tahoua",
          description: "",
          additionalData: {
            Country: "Niger",
            "IATA code": "THZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 7.11700010299683,
            longitude: 35.382999420166,
            altitude: null
          },
          name: "Airport: Tippi",
          description: "",
          additionalData: {
            Country: "Ethiopia",
            "IATA code": "TIE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.6290740966797,
            longitude: 1.36381900310516,
            altitude: null
          },
          name: "Airport: Toulouse",
          description: "",
          additionalData: {
            Country: "France",
            "IATA code": "TLS"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 32.0113906860352,
            longitude: 34.8866653442383,
            altitude: null
          },
          name: "Airport: Tel Aviv",
          description: "",
          additionalData: {
            Country: "Israel",
            "IATA code": "TLV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.8114604949951,
            longitude: 5.45107507705688,
            altitude: null
          },
          name: "Airport: Tamanrasset",
          description: "",
          additionalData: {
            Country: "Algeria",
            "IATA code": "TMR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -18.7969493865967,
            longitude: 47.4788055419922,
            altitude: null
          },
          name: "Airport: Antananarivo",
          description: "",
          additionalData: {
            Country: "Madagascar",
            "IATA code": "TNR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 25.077730178833,
            longitude: 121.232818603516,
            altitude: null
          },
          name: "Airport: Taipei",
          description: "",
          additionalData: {
            Country: "Taiwan",
            "IATA code": "TPE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.0222206115723,
            longitude: 71.4669418334961,
            altitude: null
          },
          name: "Airport: Astana",
          description: "",
          additionalData: {
            Country: "Kazakhstan",
            "IATA code": "TSE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 52.559684753418,
            longitude: 13.2877111434937,
            altitude: null
          },
          name: "Airport: Berlin",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "TXL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -0.141144007444382,
            longitude: -78.4882125854492,
            altitude: null
          },
          name: "Airport: Quito",
          description: "",
          additionalData: {
            Country: "Ecuador",
            "IATA code": "UIO"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.6327781677246,
            longitude: 135.223892211914,
            altitude: null
          },
          name: "Airport: Kobe",
          description: "",
          additionalData: {
            Country: "Japan",
            "IATA code": "UKB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.9071044921875,
            longitude: 87.4742431640625,
            altitude: null
          },
          name: "Airport: Urumqi",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "URC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 52.1273002624512,
            longitude: 5.27618980407715,
            altitude: null
          },
          name: "Airport: Soesterberg",
          description: "",
          additionalData: {
            Country: "Netherlands",
            "IATA code": "UTC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -23.0074996948242,
            longitude: -47.1344451904297,
            altitude: null
          },
          name: "Airport: Campinas",
          description: "",
          additionalData: {
            Country: "Brazil",
            "IATA code": "VCP"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.110279083252,
            longitude: 16.5697212219238,
            altitude: null
          },
          name: "Airport: Vienna",
          description: "",
          additionalData: {
            Country: "Austria",
            "IATA code": "VIE"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 23.03444480896,
            longitude: -81.4352798461914,
            altitude: null
          },
          name: "Airport: Varadero",
          description: "",
          additionalData: {
            Country: "Cuba",
            "IATA code": "VRA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -22.4866676330566,
            longitude: 17.4624996185303,
            altitude: null
          },
          name: "Airport: Windhoek",
          description: "",
          additionalData: {
            Country: "Namibia",
            "IATA code": "WDH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: -1.32171905040741,
            longitude: 36.8148345947266,
            altitude: null
          },
          name: "Airport: Nairobi",
          description: "",
          additionalData: {
            Country: "Kenya",
            "IATA code": "WIL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 30.7837581634521,
            longitude: 114.208099365234,
            altitude: null
          },
          name: "Airport: Wuhan",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "WUH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 31.4944000244141,
            longitude: 120.429000854492,
            altitude: null
          },
          name: "Airport: Wuxi",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "WUX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 34.4471206665039,
            longitude: 108.751594543457,
            altitude: null
          },
          name: "Airport: Xi'an",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "XIY"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 24.5440368652344,
            longitude: 118.127738952637,
            altitude: null
          },
          name: "Airport: Xiamen",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "XMN"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.2943992614746,
            longitude: -123.111000061035,
            altitude: null
          },
          name: "Airport: Vancouver",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YHC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 45.6819458007812,
            longitude: -74.0052795410156,
            altitude: null
          },
          name: "Airport: Montreal",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YMX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 24.1442432403564,
            longitude: 38.0633506774902,
            altitude: null
          },
          name: "Airport: Yenbo",
          description: "",
          additionalData: {
            Country: "Saudi Arabia",
            "IATA code": "YNB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 46.7911109924316,
            longitude: -71.3933334350586,
            altitude: null
          },
          name: "Airport: Quebec",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YQB"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 48.9369430541992,
            longitude: -54.5680541992188,
            altitude: null
          },
          name: "Airport: Gander",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YQX"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 45.4705543518066,
            longitude: -73.7408294677734,
            altitude: null
          },
          name: "Airport: Montreal",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YUL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.1938896179199,
            longitude: -123.184440612793,
            altitude: null
          },
          name: "Airport: Vancouver",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YVR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.9669456481934,
            longitude: -84.7863922119141,
            altitude: null
          },
          name: "Airport: Wawa",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YXZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 51.1138877868652,
            longitude: -114.020278930664,
            altitude: null
          },
          name: "Airport: Calgary",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YYC"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 53.3191680908203,
            longitude: -60.4258346557617,
            altitude: null
          },
          name: "Airport: Goose Bay",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YYR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.6186103820801,
            longitude: -52.7519454956055,
            altitude: null
          },
          name: "Airport: St. John's",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YYT"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 43.6772232055664,
            longitude: -79.6305541992188,
            altitude: null
          },
          name: "Airport: Toronto",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "YYZ"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 11.1301918029785,
            longitude: 7.6858057975769,
            altitude: null
          },
          name: "Airport: Zaria",
          description: "",
          additionalData: {
            Country: "Nigeria",
            "IATA code": "ZAR"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 49.1833343505859,
            longitude: -123.949996948242,
            altitude: null
          },
          name: "Airport: Nanaimo",
          description: "",
          additionalData: {
            Country: "Canada",
            "IATA code": "ZNA"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 50.3255004882812,
            longitude: 7.52866697311401,
            altitude: null
          },
          name: "Airport: Koblenz",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "ZNV"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.973331451416,
            longitude: 8.52222347259521,
            altitude: null
          },
          name: "Airport: Donaueschingen",
          description: "",
          additionalData: {
            Country: "Germany",
            "IATA code": "ZQL"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 47.4647216796875,
            longitude: 8.54916667938232,
            altitude: null
          },
          name: "Airport: Zurich",
          description: "",
          additionalData: {
            Country: "Switzerland",
            "IATA code": "ZRH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        },
        {
          area: {
            type: "POINT_AREA",
            latitude: 22.0063991546631,
            longitude: 113.375999450684,
            altitude: null
          },
          name: "Airport: Zhuhai",
          description: "",
          additionalData: {
            Country: "China",
            "IATA code": "ZUH"
          },
          comment: "",
          projection: "EPSG 4326",
          spatialRepresentation: null,
          orbit: null
        }
      ],

      theme: {
        primaryColor: "#0b6bb3",
        secondaryColor: "#f39c12"
      }
    };
  }
};
</script>

<style scoped>
.map {
  width: 600px;
  height: 400px;
  margin: 30px auto;
}
data-template[metadata-block] {
  background-color: rebeccapurple;
}
</style>
