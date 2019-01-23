"use strict";
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const PACKAGE = require("../package.json");
const buildVersion = PACKAGE.version;
const buildName = PACKAGE.name;

const webpackConfig = merge(baseWebpackConfig, {
  entry:{
    //aeris-metadata-component
    "aeris-metadata-component" :"./src/lib/modules/index.js",
    
    //module aeris-metadata-block
    "aeris-metadata-blocks/aeris-metadata-blocks" : "./src/lib/modules/aeris-metadata-blocks/index.js",
    
    //submodule aeris-metadata-block
    "aeris-metadata-blocks/submodules/aeris-metadata-citations":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-citations/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-contacts":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-contacts/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-data-links":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-data-links/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-datapolicy":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-datapolicy/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-description":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-description/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-doi":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-doi/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-formats":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-formats/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-information":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-information/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-information-links":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-information-links/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-instruments":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-instruments/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-modifications":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-modifications/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-parameters":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-parameters/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-platforms":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-platforms/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-publications":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-publications/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-quicklook-gallery":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-quicklook-gallery/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-single-file-download":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-single-file-download/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-spatial-extents":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-spatial-extents/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-temporal-extents/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-title":"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-title/index.js",
    "aeris-metadata-blocks/submodules/aeris-metadata-year-select-download" :"./src/lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-year-select-download/index.js",
    
    //module aeris-metadata-international-field
    "aeris-metadata-international-field/aeris-metadata-international-field": "./src/lib/modules/aeris-metadata-international-field/index.js",
    
    //module aeris-metadata-services
    "aeris-metadata-services/aeris-metadata-services" : "./src/lib/modules/aeris-metadata-services/index.js",
    
    //module aeris-metadata-ui
    "aeris-metadata-ui/aeris-metadata-ui" :"./src/lib/modules/aeris-metadata-ui/index.js",
    
    //submodule aeris-metadata-ui
    "aeris-metadata-ui/submodules/aeris-metadata-layout":"./src/lib/modules/aeris-metadata-ui/submodules/aeris-metadata-layout/index.js",
    "aeris-metadata-ui/submodules/aeris-metadata-list":"./src/lib/modules/aeris-metadata-ui/submodules/aeris-metadata-list/index.js",
    "aeris-metadata-ui/submodules/aeris-metadata-synthesis":"./src/lib/modules/aeris-metadata-ui/submodules/aeris-metadata-synthesis/index.js",
    "aeris-metadata-ui/submodules/aeris-metadata-ui-table":"./src/lib/modules/aeris-metadata-ui/submodules/aeris-metadata-ui-table/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "[name]" + "_" + buildVersion + ".js"
  },
  devtool: "#source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin(["dist/*"], {
      root: path.resolve(__dirname, "../")
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
});
module.exports = webpackConfig;

