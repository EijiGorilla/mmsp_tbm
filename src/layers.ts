import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  LineSymbol3D,
  PathSymbol3DLayer,
  TextSymbol,
  LabelSymbol3D,
  TextSymbol3DLayer,
} from '@arcgis/core/symbols';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: '8a7097f019e14e488e31235519a963fd',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Construction Boundary */

// Construction boundary
const ConstructionBoundaryFill = new UniqueValueRenderer({
  field: 'MappingBoundary',
  uniqueValueInfos: [
    {
      value: 1,
      label: '',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2.5,
          color: [220, 220, 220],
          style: 'short-dash',
        },
      }),
    },
  ],
});

export const constructionBoundaryLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  outFields: ['*'],
  renderer: ConstructionBoundaryFill,
  definitionExpression: 'MappingBoundary = 1',
  title: 'Construction Boundary',
  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupEnabled: false,
});

// * Station Box * //
// let stationBoxRenderer = new UniqueValueRenderer({
//   field: 'Layer',
//   uniqueValueInfos: [
//     {
//       value: 'U-Shape Retaining Wall',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Cut & Cover Box',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'TBM Shaft',
//       symbol: new SimpleFillSymbol({
//         color: [104, 104, 104],
//         style: 'backward-diagonal',
//         outline: {
//           width: 1,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'TBM',
//       symbol: new SimpleFillSymbol({
//         color: [178, 178, 178],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.5,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Station Platform',
//       symbol: new SimpleFillSymbol({
//         color: [240, 204, 230],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.4,
//           color: 'black',
//         },
//       }),
//     },
//     {
//       value: 'Station Box',
//       symbol: new SimpleFillSymbol({
//         color: [0, 0, 0, 0],
//         outline: {
//           width: 2,
//           color: 'red',
//         },
//       }),
//     },
//     {
//       value: 'NATM',
//       symbol: new SimpleFillSymbol({
//         color: [178, 178, 178, 0],
//         style: 'backward-diagonal',
//         outline: {
//           width: 0.5,
//           color: 'grey',
//         },
//       }),
//     },
//   ],
// });

export const stationBoxLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 8,
  // renderer: stationBoxRenderer,
  minScale: 150000,
  maxScale: 0,
  title: 'Station Box',
  outFields: ['*'],
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

// * Station Layer * //
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        font: {
          family: 'Ubuntu Mono',
          //weight: "bold"
        },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'c34277793d164f248abb0926963ae92d',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Station',
  labelingInfo: [labelClass],
  definitionExpression: "Project = 'MMSP'",
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* lot layer */
let lotDefaultSymbol = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [110, 110, 110],
    width: 0.7,
  },
});

const lotColor = [
  [112, 173, 71, 0.5],
  [0, 112, 255, 0.5],
  [255, 255, 0, 0.5],
  [255, 170, 0, 0.5],
  [255, 0, 0, 0.5],
  [0, 115, 76, 0.5],
];

const lotLayerStatusRenderer = new UniqueValueRenderer({
  field: 'StatusNVS3',
  defaultSymbol: lotDefaultSymbol,
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Paid',
      symbol: new SimpleFillSymbol({
        color: lotColor[0],
      }),
    },
    {
      value: 2,
      label: 'For Payment Processing',
      symbol: new SimpleFillSymbol({
        color: lotColor[1],
      }),
    },
    {
      value: 3,
      label: 'For Legal Pass',
      symbol: new SimpleFillSymbol({
        color: lotColor[2],
      }),
    },
    {
      value: 4,
      label: 'For Appraisal/Offer to Buy',
      symbol: new SimpleFillSymbol({
        color: lotColor[3],
      }),
    },
    {
      value: 5,
      label: 'For Expro',
      symbol: new SimpleFillSymbol({
        color: lotColor[4],
      }),
    },
    {
      value: 6,
      label: 'with WOP Fully Turned-over',
      symbol: new SimpleFillSymbol({
        color: lotColor[5],
      }),
    },
  ],
});

const lotLabel = new LabelClass({
  symbol: new TextSymbol({
    color: 'black',
    font: {
      family: 'Gill Sans',
      size: 8,
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.CN',
  },
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  title: 'Land Acquisition',

  labelsVisible: false,
  labelingInfo: [lotLabel],
  renderer: lotLayerStatusRenderer,
  popupTemplate: {
    title: '<p>{Id}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'OWNER',
            label: 'Land Owner',
          },
          {
            fieldName: 'Station1',
          },
          {
            fieldName: 'StatusNVS3',
            label: '<p>Status of Land Acquisition</p>',
          },
        ],
      },
    ],
  },
});

/* Lot boundary only */
const lotLayerBoundaryRenderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [0, 0, 0, 0],
    style: 'solid',
    outline: {
      color: [110, 110, 110],
      width: 1.5,
    },
  }),
});

const lotLayerBoundaryLabel = new LabelClass({
  symbol: new TextSymbol({
    color: 'white',
    font: {
      // autocast as new Font()
      family: 'Gill Sans',
      size: 8,
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.CN',
  },
});

export const lotLayerBoundary = new FeatureLayer({
  portalItem: {
    id: '7e20edfba96e4854acd716cbadf5f57f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  outFields: ['*'],
  title: 'Lot Boundary',
  renderer: lotLayerBoundaryRenderer,
  labelingInfo: [lotLayerBoundaryLabel],
});

/* geotechnical information */
// export const geoLayer = new FeatureLayer({
//   portalItem: {
//     id: '6992715c99d04df28fb93ca9ee9d2b5f',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   layerId: 6,
//   elevationInfo: {
//     mode: 'absolute-height', //absolute-height
//     offset: 0,
//   },
//   hasZ: true,
//   title: 'Soil Profile',
//   outFields: ['*'],
// });

// const geoColor = [
//   [0, 112, 255, 1], // 'Sandy sand'
//   [230, 230, 0, 1], // 'Silty sand'
//   [197, 0, 255, 1], // 'Rock Type'
// ];

// function renderGeoLayer() {
//   const renderer = new UniqueValueRenderer({
//     field: 'Class',
//   });

//   for (var i = 0; i < geoColor.length; i++) {
//     renderer.addUniqueValueInfo({
//       value: i + 1,
//       symbol: new LineSymbol3D({
//         symbolLayers: [
//           new PathSymbol3DLayer({
//             profile: 'circle',
//             material: {
//               color: geoColor[i],
//             },
//             width: 6,
//             height: 6,
//             join: 'miter',
//             cap: 'none',
//             anchor: 'bottom',
//             profileRotation: 'all',
//           }),
//         ],
//       }),
//     });
//   }
//   geoLayer.renderer = renderer;
// }
// renderGeoLayer();

// /* NATM layer */
// const natmColor = [
//   [225, 225, 225, 0.1], // To be Constructed (white)
//   [130, 130, 130, 0.5], // Under Construction
//   [255, 0, 0, 0.8], // Delayed
//   [0, 112, 255, 0.8], // Completed
// ];

// var natmLayer = new SceneLayer({
//   portalItem: {
//     id: 'd8a87f380b69495a9906fb7035ca84a9',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   elevationInfo: {
//     mode: 'absolute-height', //"on-the-ground", relative-to-ground, absolute-height
//     offset: 0,
//   },
//   title: 'NATM',
//   outFields: ['*'],
// });

// // Symbology for natmLayer
// function renderNATMLayer() {
//   const renderer = new UniqueValueRenderer({
//     field: 'status',
//   });

//   for (var i = 0; i < natmColor.length; i++) {
//     renderer.addUniqueValueInfo({
//       value: i + 1,
//       symbol: new MeshSymbol3D({
//         symbolLayers: [
//           new FillSymbol3DLayer({
//             material: {
//               color: natmColor[i],
//               colorMixMode: 'replace',
//             },
//             edges: new SolidEdges3D({
//               color: [225, 225, 225, 0.3],
//             }),
//           }),
//         ],
//       }),
//     });
//   }
//   natmLayer.renderer = renderer;
// }
// renderNATMLayer();

/* TBM Segment */
const tbmColor = {
  1: [225, 225, 225, 0.5], // To be Constructed (white), original: [225, 225, 225, 0.1]
  //1: "#ffffff",
  2: [232, 54, 24, 1], // Excavated
  3: [0, 112, 255, 0.8], // Completed
};

export const tbmDelayedRenderer = new UniqueValueRenderer({
  field: 'delayed',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Delayed Segment',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: [255, 0, 0, 0.5],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
  ],
});

export const tbmStatusRenderer = new UniqueValueRenderer({
  field: 'status',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'To be Constructed',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[1],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
    {
      value: 2,
      label: 'Excavating (Cutter Head)',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[2],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
    {
      value: 3,
      label: 'Segmented',
      symbol: new LineSymbol3D({
        symbolLayers: [
          new PathSymbol3DLayer({
            profile: 'circle',
            material: {
              color: tbmColor[3],
            },
            width: 5,
            height: 5,
            join: 'miter',
            cap: 'butt',
            anchor: 'bottom',
            profileRotation: 'all',
          }),
        ],
      }),
    },
  ],
});

export const tbmTunnelLayer = new FeatureLayer({
  portalItem: {
    id: '6992715c99d04df28fb93ca9ee9d2b5f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  elevationInfo: {
    mode: 'absolute-height',
    offset: -2,
  },
  hasZ: true,
  //definitionExpression: "Package = 'CP101'",
  renderer: tbmStatusRenderer,
  title: 'TBM Segment',
  outFields: ['*'],
  popupTemplate: {
    title: 'Ring No.: <b>{segmentno}</b> (<b>{line}</b>)',
    lastEditInfoEnabled: false,
  },
});

export const cutterHeadSpotLayer = new GraphicsLayer({
  title: 'Cutter Head Position',
});

/* Muck Pit */
// const muckPitRenderer = new SimpleRenderer({
//   symbol: new MeshSymbol3D({
//     symbolLayers: [
//       new FillSymbol3DLayer({
//         material: {
//           color: [0, 112, 255, 0.5],
//         },
//         edges: new SolidEdges3D({
//           color: '#4e4e4e',
//           size: 1,
//         }),
//       }),
//     ],
//   }),
// });

// const muckPitLayer = new SceneLayer({
//   portalItem: {
//     id: 'a55358f858994df69f3dea4246a37020',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   title: 'Muck Pit',
//   renderer: muckPitRenderer,
// });

// /* River layer */
// const riverLayer = new FeatureLayer({
//   portalItem: {
//     id: '5ebdee597f3540d1baed240034532883',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   title: 'River',
//   layerId: 1,
//   elevationInfo: {
//     mode: 'on-the-ground',
//     offset: 0,
//   },
//   renderer: new SimpleRenderer({
//     symbol: new PolygonSymbol3D({
//       symbolLayers: [
//         {
//           type: 'water',
//           waveDirection: 260,
//           color: '#005B66', //#005B66, #25427c
//           waveStrength: 'moderate',
//           waterbodySize: 'medium',
//         },
//       ],
//     }),
//   }),
// });

/* TBM Shaft */
// const tbmShaftRenderer = new SimpleRenderer({
//   symbol: new MeshSymbol3D({
//     symbolLayers: [
//       new FillSymbol3DLayer({
//         material: { color: [0, 112, 255, 0.7] },
//         edges: new SolidEdges3D({
//           type: 'solid',
//           color: '#4E4E4E',
//           size: 1,
//         }),
//       }),
//     ],
//   }),
// });

// var tbmShaft = new SceneLayer({
//   portalItem: {
//     id: '0bba3bc8c087412b89a3d72a47a1c6aa',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   popupEnabled: false,
//   renderer: tbmShaftRenderer,
//   elevationInfo: {
//     mode: 'absolute-height',
//     offset: 0,
//   },
//   title: 'TBM Shaft',
//   // when filter using date, example below. use this format
//   //definitionExpression: "EndDate = date'2020-6-3'"
// });

/* Station Structure */
// const stationStructureColors = [
//   [225, 225, 225, 0], // To be Constructed (white)
//   [130, 130, 130, 0.3], // Under Construction
//   [255, 0, 0, 0.6], // Delayed
//   [0, 197, 255, 0.5], // Completed
// ];

// function renderStationStructureLayer() {
//   const renderer = new UniqueValueRenderer({
//     field: 'Status',
//   });
//   for (var i = 0; i < stationStructureColors.length; i++) {
//     renderer.addUniqueValueInfo({
//       value: i + 1,
//       symbol: new MeshSymbol3D({
//         symbolLayers: [
//           new FillSymbol3DLayer({
//             material: {
//               color: stationStructureColors[i],
//               colorMixMode: 'replace',
//             },
//             edges: new SolidEdges3D({
//               color: [225, 225, 225, 0.3],
//             }),
//           }),
//         ],
//       }),
//     });
//   }
//   stationStructureLayer.renderer = renderer;
// }

// export const stationStructureLayer = new SceneLayer({
//   //structureLayer
//   portalItem: {
//     id: '09f1e6d86cf34567bebcd22afcad8b4b',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   elevationInfo: {
//     mode: 'absolute-height',
//     offset: 0,
//   },
//   title: 'Station Structure',
//   popupTemplate: {
//     title: '<h5>{Status}</h5>',
//     lastEditInfoEnabled: false,
//     returnGeometry: true,
//     content: [
//       {
//         type: 'fields',
//         fieldInfos: [
//           {
//             fieldName: 'Type',
//             label: 'Type of Structure',
//           },
//           {
//             fieldName: 'ID',
//             label: 'Structure ID',
//           },
//           {
//             fieldName: 'Status',
//             label: 'Construction Status',
//           },
//         ],
//       },
//     ],
//   },
// });
// renderStationStructureLayer();
