import { cutterHeadSpotLayer, tbmTunnelLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import { view } from './Scene';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import { IconSymbol3DLayer, PointSymbol3D } from '@arcgis/core/symbols';
import Graphic from '@arcgis/core/Graphic';

export async function generateTbmTunnelData({ contractP, tunnelL }: any) {
  var total_segment_number = new StatisticDefinition({
    onStatisticField: 'line',
    outStatisticFieldName: 'total_segment_number',
    statisticType: 'count',
  });

  var total_segment_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_segment_comp',
    statisticType: 'sum',
  });

  var total_segment_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN delayed = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_segment_delay',
    statisticType: 'sum',
  });

  // Query
  var query = tbmTunnelLayer.createQuery();
  query.outStatistics = [total_segment_comp, total_segment_number, total_segment_delay];

  const qContractp = "Package = '" + contractP + "'";
  const qTunnel = "line = '" + tunnelL + "'";
  const qAll = qContractp + ' AND ' + qTunnel;

  // Query
  if (contractP && tunnelL) {
    query.where = qAll;
    tbmTunnelLayer.definitionExpression = qAll;
  } else {
    query.where = qContractp;
    tbmTunnelLayer.definitionExpression = qContractp;
  }

  // zoom to layer
  zoomToLayer(tbmTunnelLayer);

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total = stats.total_segment_number;
    const complete = stats.total_segment_comp;
    const pComp = (complete / total) * 100;

    const delay = stats.total_segment_delay;
    const pDelay = ((delay / total) * 100).toFixed(1);

    return [total, complete, pComp, delay, pDelay];
  });
}

export async function cutterHeadPositionData({ contractP, tunnelL }: any) {
  var query = tbmTunnelLayer.createQuery();

  const tbmSpot = 'tbmSpot = 1';
  // eslint-disable-next-line no-useless-concat
  const qContractp = "Package = '" + contractP + "'" + ' AND ' + tbmSpot;
  // eslint-disable-next-line no-useless-concat
  const qTunnel = "line = '" + tunnelL + "'" + ' AND ' + tbmSpot;
  const qAll = qContractp + ' AND ' + qTunnel + ' AND ' + tbmSpot;

  // Query
  if (contractP && tunnelL) {
    query.where = qAll;
  } else if (contractP && !tunnelL) {
    query.where = qContractp;
  }

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    const stats = response.features[0]?.attributes;
    const segmentN = stats?.segmentno;
    const tbmN = stats?.line;
    return [segmentN, tbmN];
  });
}

const spatialReference = SpatialReference.WebMercator;
export async function tbmCutterHeadSpotData({ contractP, tunnelL }: any) {
  cutterHeadSpotLayer.removeAll();
  var query = tbmTunnelLayer.createQuery();
  query.returnGeometry = true;
  query.groupByFieldsForStatistics = ['line'];

  const tbmSpot = 'tbmSpot = 1';
  // eslint-disable-next-line no-useless-concat
  const qContractp = "Package = '" + contractP + "'" + ' AND ' + tbmSpot;
  // eslint-disable-next-line no-useless-concat
  const qTunnel = "line = '" + tunnelL + "'" + ' AND ' + tbmSpot;
  const qAll = qContractp + ' AND ' + qTunnel + ' AND ' + tbmSpot;

  // Query
  if (contractP && tunnelL) {
    query.where = qAll;
  } else if (contractP && !tunnelL) {
    query.where = qContractp;
  }

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    stats.forEach((result: any, index: any) => {
      const vertex = result.geometry.paths[0];
      const long = (vertex[0][0] + vertex[1][0]) / 2;
      const lat = (vertex[0][1] + vertex[1][1]) / 2;

      const point = {
        spatialReference: spatialReference,
        type: 'point',
        x: long,
        y: lat,
        z: 5,
      };

      const symbol = new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: 'https://EijiGorilla.github.io/Symbols/TBM_LOGO2.png',
            },
            size: 30,
          }),
        ],
        verticalOffset: {
          screenLength: 100,
          maxWorldLength: 500,
          minWorldLength: 40,
        },
        callout: {
          type: 'line',
          size: 1.5,
          color: '#E83618',
          border: {
            color: '#E83618',
          },
        },
        // maxScale: 1000,
        // minScale: 25000000,
      });

      const myGraphic = new Graphic({
        geometry: point,
        symbol: symbol,
      });
      return cutterHeadSpotLayer.add(myGraphic);
    });
  });
}

export async function timeSeriesChartData({ contractP, tunnelL }: any) {
  var total_segment_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_segment_comp',
    statisticType: 'sum',
  });

  var query = tbmTunnelLayer.createQuery();

  const qNoEndDate = 'enddate IS NOT NULL';
  // eslint-disable-next-line no-useless-concat
  const qContractp = "Package = '" + contractP + "'" + ' AND ' + qNoEndDate;
  // eslint-disable-next-line no-useless-concat
  const qTunnel = "line = '" + tunnelL + "'" + ' AND ' + qNoEndDate;
  const qAll = qContractp + ' AND ' + qTunnel + ' AND ' + qNoEndDate;

  // Query
  console.log(contractP, '; ', tunnelL);
  if (contractP && tunnelL) {
    query.where = qAll;
    tbmTunnelLayer.definitionExpression = qAll;
  } else {
    query.where = qContractp;
    tbmTunnelLayer.definitionExpression = qContractp;
  }

  query.outStatistics = [total_segment_comp];
  query.outFields = ['enddate'];
  query.orderByFields = ['enddate'];
  query.groupByFieldsForStatistics = ['enddate'];

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;

    // collect all dates for each viaduct type
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.enddate;
      const value = attributes.total_segment_comp;

      // compile in object
      return Object.assign(
        {},
        {
          date: date,
          value: value,
        },
      );
    });
    return data;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
