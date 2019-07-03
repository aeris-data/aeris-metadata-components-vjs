<template>
  <section><aeris-metadata-parameters :parameters="parameters" :theme="theme"></aeris-metadata-parameters></section>
</template>

<script>
import AerisMetadataParameters from "../../../../../lib/modules/aeris-metadata-blocks/submodules/aeris-metadata-parameters/components/aeris-metadata-parameters";
export default {
  name: "aeris-metadata-parameters-test",
  components: { AerisMetadataParameters },
  data() {
    return {
      parameters: [
        {
          shortName: "NO",
          longName: "mole_fraction_of_nitrogen_monoxide_in_air",
          uom: "ppb",
          comment: {
            en: "Since 2005-05-01",
            fr: "Depuis 2005-05-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_nitrogen_monoxide_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.NITROGEN_COMPOUNDS.NITROGEN_OXIDES.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "NITROGEN_COMPOUNDS",
              name: {
                en: "Nitrogen compounds",
                fr: "Composés azotés"
              },
              thesaurusVariable: {
                code: "NITROGEN_OXIDES",
                name: {
                  en: "Nitrogen oxides",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "O3",
          longName: "mole_fraction_of_ozone_in_air",
          uom: "ppb",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_ozone_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.OXYGEN_COMPOUNDS.OZONE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "OXYGEN_COMPOUNDS",
              name: {
                en: "Oxygen compounds",
                fr: "Composés oxygénés"
              },
              thesaurusVariable: {
                code: "OZONE",
                name: {
                  en: "Ozone",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Zonal wind",
          longName: "eastward_wind",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "eastward_wind",
          thesaurusConcat: "ATMOSPHERIC_WINDS.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "air_stag_temp",
          longName: "stagnation_air_temperature",
          uom: "K",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "stagnation_air_temperature",
          thesaurusConcat: "ATMOSPHERIC_TEMPERATURE.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_TEMPERATURE",
            name: {
              en: "Atmospheric temperature",
              fr: "Température atmosphérique"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "CO2",
          longName: "mole_fraction_of_carbon_dioxide_in_air",
          uom: "ppm",
          comment: {
            en: "Since 2005-05-01",
            fr: "Depuis 2005-05-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_carbon_dioxide_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.CARBON_AND_HYDROCARBON_COMPOUNDS.CARBON_DIOXIDE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "CARBON_AND_HYDROCARBON_COMPOUNDS",
              name: {
                en: "Carbon and hydrocarbon compounds",
                fr: ""
              },
              thesaurusVariable: {
                code: "CARBON_DIOXIDE",
                name: {
                  en: "Carbon dioxide",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Potential vorticity",
          longName: "ertel_potential_vorticity",
          uom: "K m2 kg-1 s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "ertel_potential_vorticity",
          thesaurusConcat: "ATMOSPHERIC_WINDS.WIND_DYNAMICS.VORTICITY.POTENTIAL_VORTICITY",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "WIND_DYNAMICS",
              name: {
                en: "Wind dynamics",
                fr: ""
              },
              thesaurusVariable: {
                code: "VORTICITY",
                name: {
                  en: "Vorticity",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "POTENTIAL_VORTICITY",
                  name: {
                    en: "Potential vorticity",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Boundary layer height ECMWF",
          longName: "atmosphere_boundary_layer_thickness",
          uom: "m",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "atmosphere_boundary_layer_thickness",
          thesaurusConcat: "ALTITUDE.PLANETARY_BOUNDARY_LAYER_HEIGHT.NULL.NULL",
          thesaurusVariable: {
            code: "ALTITUDE",
            name: {
              en: "Altitude",
              fr: ""
            },
            thesaurusVariable: {
              code: "PLANETARY_BOUNDARY_LAYER_HEIGHT",
              name: {
                en: "Planetary boundary layer height",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "air_temp",
          longName: "air_temperature",
          uom: "K",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "air_temperature",
          thesaurusConcat: "ATMOSPHERIC_TEMPERATURE.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_TEMPERATURE",
            name: {
              en: "Atmospheric temperature",
              fr: "Température atmosphérique"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "NO2",
          longName: "mole_fraction_of_nitrogen_dioxide_in_air",
          uom: "ppb",
          comment: {
            en: "Since 2005-05-01",
            fr: "Depuis 2005-05-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_nitrogen_dioxide_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.NITROGEN_COMPOUNDS.NITROGEN_OXIDES.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "NITROGEN_COMPOUNDS",
              name: {
                en: "Nitrogen compounds",
                fr: "Composés azotés"
              },
              thesaurusVariable: {
                code: "NITROGEN_OXIDES",
                name: {
                  en: "Nitrogen oxides",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Wind direction",
          longName: "wind_from_direction",
          uom: "degree",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "wind_from_direction",
          thesaurusConcat: "ATMOSPHERIC_WINDS.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Barometric altitude",
          longName: "barometric_altitude",
          uom: "m",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "barometric_altitude",
          thesaurusConcat: "ALTITUDE.BAROMETRIC_ALTITUDE.NULL.NULL",
          thesaurusVariable: {
            code: "ALTITUDE",
            name: {
              en: "Altitude",
              fr: ""
            },
            thesaurusVariable: {
              code: "BAROMETRIC_ALTITUDE",
              name: {
                en: "Barometric altitude",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Wind speed",
          longName: "wind_speed",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "wind_speed",
          thesaurusConcat: "ATMOSPHERIC_WINDS.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Air temperature",
          longName: "air_temperature",
          uom: "K",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "air_temperature",
          thesaurusConcat: "ATMOSPHERIC_TEMPERATURE.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_TEMPERATURE",
            name: {
              en: "Atmospheric temperature",
              fr: "Température atmosphérique"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "NOx",
          longName: "mole_fraction_of_nox_expressed_as_nitrogen_in_air",
          uom: "ppb",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_nox_expressed_as_nitrogen_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.NITROGEN_COMPOUNDS.NITROGEN_OXIDES.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "NITROGEN_COMPOUNDS",
              name: {
                en: "Nitrogen compounds",
                fr: "Composés azotés"
              },
              thesaurusVariable: {
                code: "NITROGEN_OXIDES",
                name: {
                  en: "Nitrogen oxides",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "RHL",
          longName: "relative_humidity",
          uom: "1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "relative_humidity",
          thesaurusConcat: "ATMOSPHERIC_WATER_VAPOR.WATER_VAPOR_INDICATORS.HUMIDITY.RELATIVE_HUMIDITY",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WATER_VAPOR",
            name: {
              en: "Atmospheric water vapor",
              fr: "Vapeur d'eau atmosphérique"
            },
            thesaurusVariable: {
              code: "WATER_VAPOR_INDICATORS",
              name: {
                en: "Water vapor indicators",
                fr: ""
              },
              thesaurusVariable: {
                code: "HUMIDITY",
                name: {
                  en: "Humidity",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "RELATIVE_HUMIDITY",
                  name: {
                    en: "Relative humidity",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "NOy",
          longName: "mole_fraction_of_total_reactive_nitrogen_in_air",
          uom: "ppb",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_total_reactive_nitrogen_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.NITROGEN_COMPOUNDS.NITROGEN_OXIDES.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "NITROGEN_COMPOUNDS",
              name: {
                en: "Nitrogen compounds",
                fr: "Composés azotés"
              },
              thesaurusVariable: {
                code: "NITROGEN_OXIDES",
                name: {
                  en: "Nitrogen oxides",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Geopotential height at 500hPa",
          longName: "geopotential_height",
          uom: "m",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "geopotential_height",
          thesaurusConcat: "ALTITUDE.GEOPOTENTIAL_HEIGHT.NULL.NULL",
          thesaurusVariable: {
            code: "ALTITUDE",
            name: {
              en: "Altitude",
              fr: ""
            },
            thesaurusVariable: {
              code: "GEOPOTENTIAL_HEIGHT",
              name: {
                en: "Geopotential height",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Potential vorticity ECMWF",
          longName: "ertel_potential_vorticity",
          uom: "K m2 kg-1 s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "ertel_potential_vorticity",
          thesaurusConcat: "ATMOSPHERIC_WINDS.WIND_DYNAMICS.VORTICITY.POTENTIAL_VORTICITY",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "WIND_DYNAMICS",
              name: {
                en: "Wind dynamics",
                fr: ""
              },
              thesaurusVariable: {
                code: "VORTICITY",
                name: {
                  en: "Vorticity",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "POTENTIAL_VORTICITY",
                  name: {
                    en: "Potential vorticity",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Air pressure",
          longName: "air_pressure",
          uom: "Pa",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "air_pressure",
          thesaurusConcat: "ATMOSPHERIC_PRESSURE.STATIC_PRESSURE.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_PRESSURE",
            name: {
              en: "Atmospheric pressure",
              fr: "Pression atmosphérique"
            },
            thesaurusVariable: {
              code: "STATIC_PRESSURE",
              name: {
                en: "Static pressure",
                fr: "Pression statique"
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Aircraft ground speed",
          longName: "platform_speed_wrt_ground",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "platform_speed_wrt_ground",
          thesaurusConcat: "PLATFORM_CHARACTERISTICS.NA.AIRSPEED_GROUND_SPEED.NULL",
          thesaurusVariable: {
            code: "PLATFORM_CHARACTERISTICS",
            name: {
              en: "Platform characteristics",
              fr: "Caractéristiques plateforme"
            },
            thesaurusVariable: {
              code: "NA",
              name: {
                en: "Na",
                fr: ""
              },
              thesaurusVariable: {
                code: "AIRSPEED_GROUND_SPEED",
                name: {
                  en: "Airspeed/ground speed",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Boundary layer height",
          longName: "atmosphere_boundary_layer_thickness",
          uom: "m",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "atmosphere_boundary_layer_thickness",
          thesaurusConcat: "ALTITUDE.PLANETARY_BOUNDARY_LAYER_HEIGHT.NULL.NULL",
          thesaurusVariable: {
            code: "ALTITUDE",
            name: {
              en: "Altitude",
              fr: ""
            },
            thesaurusVariable: {
              code: "PLANETARY_BOUNDARY_LAYER_HEIGHT",
              name: {
                en: "Planetary boundary layer height",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "H2O_gas",
          longName: "mole_fraction_of_water_vapor_in_air",
          uom: "ppm",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_water_vapor_in_air",
          thesaurusConcat: "ATMOSPHERIC_WATER_VAPOR.WATER_VAPOR_INDICATORS.WATER_VAPOR.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WATER_VAPOR",
            name: {
              en: "Atmospheric water vapor",
              fr: "Vapeur d'eau atmosphérique"
            },
            thesaurusVariable: {
              code: "WATER_VAPOR_INDICATORS",
              name: {
                en: "Water vapor indicators",
                fr: ""
              },
              thesaurusVariable: {
                code: "WATER_VAPOR",
                name: {
                  en: "Water vapor",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Air potential temperature",
          longName: "air_potential_temperature",
          uom: "K",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "air_potential_temperature",
          thesaurusConcat: "ATMOSPHERIC_TEMPERATURE.SURFACE_TEMPERATURE.POTENTIAL_TEMPERATURE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_TEMPERATURE",
            name: {
              en: "Atmospheric temperature",
              fr: "Température atmosphérique"
            },
            thesaurusVariable: {
              code: "SURFACE_TEMPERATURE",
              name: {
                en: "Surface temperature",
                fr: ""
              },
              thesaurusVariable: {
                code: "POTENTIAL_TEMPERATURE",
                name: {
                  en: "Potential temperature",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "CO",
          longName: "mole_fraction_of_carbon_monoxide_in_air",
          uom: "ppb",
          comment: {
            en: "Since 2001-12-01",
            fr: "Depuis 2001-12-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_carbon_monoxide_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.CARBON_AND_HYDROCARBON_COMPOUNDS.CARBON_MONOXIDE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "CARBON_AND_HYDROCARBON_COMPOUNDS",
              name: {
                en: "Carbon and hydrocarbon compounds",
                fr: "Composés carbonés"
              },
              thesaurusVariable: {
                code: "CARBON_MONOXIDE",
                name: {
                  en: "Carbon monoxide",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "CH4",
          longName: "mole_fraction_of_methane_in_air",
          uom: "ppb",
          comment: {
            en: "Since 2005-05-01",
            fr: "Depuis 2005-05-01"
          },
          type: "",
          cfStandardName: "mole_fraction_of_methane_in_air",
          thesaurusConcat: "ATMOSPHERIC_CHEMISTRY.CARBON_AND_HYDROCARBON_COMPOUNDS.METHANE.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_CHEMISTRY",
            name: {
              en: "Atmospheric chemistry",
              fr: "Chimie atmosphérique"
            },
            thesaurusVariable: {
              code: "CARBON_AND_HYDROCARBON_COMPOUNDS",
              name: {
                en: "Carbon and hydrocarbon compounds",
                fr: ""
              },
              thesaurusVariable: {
                code: "METHANE",
                name: {
                  en: "Methane",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Meridional wind",
          longName: "northward_wind",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "northward_wind",
          thesaurusConcat: "ATMOSPHERIC_WINDS.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Vertical wind velocity",
          longName: "upward_air_velocity",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "upward_air_velocity",
          thesaurusConcat: "ATMOSPHERIC_WINDS.WIND_DYNAMICS.VERTICAL_WIND_VELOCITY_SPEED.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_WINDS",
            name: {
              en: "Atmospheric winds",
              fr: "Vents atmosphériques"
            },
            thesaurusVariable: {
              code: "WIND_DYNAMICS",
              name: {
                en: "Wind dynamics",
                fr: ""
              },
              thesaurusVariable: {
                code: "VERTICAL_WIND_VELOCITY_SPEED",
                name: {
                  en: "Vertical wind velocity/speed",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Surface pressure",
          longName: "surface_air_pressure",
          uom: "Pa",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "surface_air_pressure",
          thesaurusConcat: "ATMOSPHERIC_PRESSURE.SURFACE_PRESSURE.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_PRESSURE",
            name: {
              en: "Atmospheric pressure",
              fr: "Pression atmosphérique"
            },
            thesaurusVariable: {
              code: "SURFACE_PRESSURE",
              name: {
                en: "Surface pressure",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Stagnation air temperature",
          longName: "stagnation_air_temperature",
          uom: "K",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "stagnation_air_temperature",
          thesaurusConcat: "ATMOSPHERIC_TEMPERATURE.NULL.NULL.NULL",
          thesaurusVariable: {
            code: "ATMOSPHERIC_TEMPERATURE",
            name: {
              en: "Atmospheric temperature",
              fr: "Température atmosphérique"
            },
            thesaurusVariable: {
              code: "NULL",
              name: {
                en: "",
                fr: ""
              },
              thesaurusVariable: {
                code: "NULL",
                name: {
                  en: "",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
        },
        {
          shortName: "Aircraft air speed",
          longName: "platform_speed_wrt_air",
          uom: "m s-1",
          comment: {
            en: "Since 1994-08-01",
            fr: "Depuis 1994-08-01"
          },
          type: "",
          cfStandardName: "platform_speed_wrt_air",
          thesaurusConcat: "PLATFORM_CHARACTERISTICS.NA.AIRSPEED_GROUND_SPEED.NULL",
          thesaurusVariable: {
            code: "PLATFORM_CHARACTERISTICS",
            name: {
              en: "Platform characteristics",
              fr: "Caractéristiques plateforme"
            },
            thesaurusVariable: {
              code: "NA",
              name: {
                en: "Na",
                fr: ""
              },
              thesaurusVariable: {
                code: "AIRSPEED_GROUND_SPEED",
                name: {
                  en: "Airspeed/ground speed",
                  fr: ""
                },
                thesaurusVariable: {
                  code: "NULL",
                  name: {
                    en: "",
                    fr: ""
                  },
                  thesaurusVariable: null
                }
              }
            }
          }
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
