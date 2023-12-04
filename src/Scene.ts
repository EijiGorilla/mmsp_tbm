import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import Measurement from '@arcgis/core/widgets/Measurement';

import {
  constructionBoundaryLayer,
  stationBoxLayer,
  stationLayer,
  lotLayer,
  lotLayerBoundary,
  // geoLayer,
  tbmTunnelLayer,
  cutterHeadSpotLayer,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const lotGroupLayer = new GroupLayer({
  title: 'Land Acquisition',
  visible: false,
  visibilityMode: 'independent',
  layers: [lotLayer, lotLayerBoundary],
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, constructionBoundaryLayer], //stationLayer,
});

const tbmGroupLayer = new GroupLayer({
  title: 'TBM Tunnel',
  visible: false,
  visibilityMode: 'independent',
  layers: [tbmTunnelLayer, cutterHeadSpotLayer],
});

// map.add(geoLayer);
map.add(alignmentGroupLayer);
map.add(lotGroupLayer);
map.add(tbmGroupLayer);
map.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
  camera: {
    position: {
      x: 121.0322874,
      y: 14.6750462,
      z: 1000,
    },
    tilt: 65,
  },
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
    // disable stars
    starsEnabled: false,
    //disable atmosphere
    atmosphereEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Soil Profile' ||
    item.title === 'Land Acquisition' ||
    item.title === 'Lot Boundary'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

// Compass
var compass = new Compass({
  view: view,
});

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});
view.ui.add(compass, 'top-right');
