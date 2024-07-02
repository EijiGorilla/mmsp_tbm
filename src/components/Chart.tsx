import { useEffect, useRef, useState } from 'react';
import { tbmDelayedRenderer, tbmStatusRenderer, tbmTunnelLayer } from '../layers';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5radar from '@amcharts/amcharts5/radar';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

import '../App.css';
import {
  cutterHeadPositionData,
  generateTbmTunnelData,
  tbmCutterHeadSpotData,
  thousands_separators,
} from '../Query';
import {
  CalciteBlock,
  CalciteLabel,
  CalcitePanel,
  CalciteSwitch,
  CalciteNavigation,
  CalciteNavigationLogo,
} from '@esri/calcite-components-react';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

// Draw chart
const Chart = ({ contractP, tunnelL }: any) => {
  const chartRef = useRef<unknown | any | undefined>({});
  const [chartData, setChartData] = useState([]);
  const [cutterHeadPositionNo, setCutterHeadPositionNo] = useState([]);

  const chartID = 'gauge-bar';

  useEffect(() => {
    generateTbmTunnelData({ contractP, tunnelL }).then((response: any) => {
      setChartData(response);
    });

    cutterHeadPositionData({ contractP, tunnelL }).then((response: any) => {
      setCutterHeadPositionNo(response);
    });

    tbmCutterHeadSpotData({ contractP, tunnelL });
  }, [contractP, tunnelL]);

  const chartTitleColor = am5.color('#d4ff33'); // yellow green
  const percentProgressLabelColor = am5.color('#00C3FF'); // light blue
  const strokeOtherColor = am5.color('#c5c5c5'); // grey

  // Utility Chart
  useEffect(() => {
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);
    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: -180,
        endAngle: 0,
        radius: am5.percent(90), // size of overall chart
        innerRadius: -20, // expand inward,
        y: -50,
        paddingBottom: -40,
      }),
    );
    chartRef.current = chart;

    chart.children.unshift(
      am5.Label.new(root, {
        text: 'Completed',
        fontSize: '2rem',
        textAlign: 'center',
        fill: percentProgressLabelColor,
        x: am5.percent(50),
        centerX: am5.percent(50),
        y: am5.percent(100),
        centerY: am5.percent(100),
      }),
    );

    chart.children.unshift(
      am5.Label.new(root, {
        text: '[bold]' + thousands_separators(chartData[1]),
        fontSize: '2.8rem',
        textAlign: 'center',
        fill: chartTitleColor,
        x: am5.percent(50),
        centerX: am5.percent(50),
        y: am5.percent(65),
        centerY: am5.percent(100),
      }),
    );

    var axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: am5.percent(120), //gagues width becomes thicker outward
      strokeOpacity: 1,
      minGridDistance: 30,
    });

    // Enable ticks
    axisRenderer.ticks.template.setAll({
      visible: true,
      strokeOpacity: 0.5,
      length: -6,
      //inside: true,
      stroke: strokeOtherColor,
    });

    axisRenderer.grid.template.setAll({
      stroke: root.interfaceColors.get('background'),
      visible: false,
      strokeOpacity: 0,
    });

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer,
      }),
    );

    // Axis labels properties
    xAxis.get('renderer').labels.template.setAll({
      fill: strokeOtherColor,
      fontSize: 10,
      textAlign: 'center',
      inside: true, // move labels inside ticks
      //radius: 20,
    });

    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    var axisDataItem = xAxis.makeDataItem({});
    var clockHand = am5radar.ClockHand.new(root, {
      //pinRadius: 10,
      radius: am5.percent(-3),
      innerRadius: -30,
      bottomWidth: 10,
      topWidth: 0,
    });

    clockHand.pin.setAll({
      fillOpacity: 0,
      strokeOpacity: 0,
    });

    clockHand.hand.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0.7,
      stroke: percentProgressLabelColor,
      fill: percentProgressLabelColor,
      strokeWidth: 1,
    });

    var bullet = axisDataItem.set(
      'bullet',
      am5xy.AxisBullet.new(root, {
        sprite: clockHand,
      }),
    );

    xAxis.createAxisRange(axisDataItem);

    // Label for percent progress
    var label = chart.radarContainer.children.push(
      am5.Label.new(root, {
        centerX: am5.percent(50),
        textAlign: 'center',
        centerY: am5.percent(90),
        y: am5.percent(25),
        fontSize: '1.8rem',
        fill: percentProgressLabelColor,
      }),
    );

    // Add percent progress values
    bullet.get('sprite').on('rotation', function () {
      var value = axisDataItem.get('value');
      label.set('text', value === undefined ? '' : value.toFixed(1).toString() + '%');
    });

    axisDataItem.animate({
      key: 'value',
      to: chartData[2],
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });

    chart.bulletsContainer.set('mask', undefined);

    xAxis.createAxisRange(
      xAxis.makeDataItem({
        above: true,
        value: 0,
        endValue: 100,
      }),
    );

    xAxis.createAxisRange(
      xAxis.makeDataItem({
        above: true,
        value: chartData[2],
        endValue: 100,
      }),
    );

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  });

  return (
    <div
      style={{
        borderStyle: 'solid',
        borderLeftWidth: '6px',
        marginTop: '-6px',
        marginRight: '-6px',
      }}
    >
      <div
        style={{
          display: 'flex',
          borderStyle: 'solid',
          paddingBottom: '10px',
        }}
      >
        <dl style={{ textIndent: '20px' }}>
          <dt style={{ color: 'white', fontSize: '1.7rem' }}>Total Rings</dt>
          <dd
            style={{
              color: '#d4ff33',
              fontSize: '2.6rem',
              fontWeight: 'bold',
              lineHeight: '1.2',
            }}
          >
            {thousands_separators(chartData[0])}
          </dd>
        </dl>
        <img
          src="https://EijiGorilla.github.io/Symbols/TBM.png"
          alt="TBM Logo"
          height={'25%'}
          width={'25%'}
          style={{ margin: 'auto' }}
        />
      </div>

      {/* Progress Chart */}
      <div style={{ borderStyle: 'solid', borderTopWidth: '6px', paddingTop: '10px' }}>
        <div style={{ color: 'white', fontSize: '1.7rem', textIndent: '20px' }}>
          Segmented Rings
        </div>
        <div
          id={chartID}
          style={{
            // width: '23vw',
            height: '33vh',
            color: 'white',
            paddingBottom: '20px',
          }}
        ></div>
      </div>

      {/* <div className="gaugeChartTitle">Segment Ring</div> */}
      <dl
        style={{
          textIndent: '20px',
          borderStyle: 'solid',
          borderTopWidth: '6px',
          borderBottomWidth: '6px',
          margin: '0',
          paddingTop: '10px',
          paddingBottom: '20px',
        }}
      >
        <dt style={{ color: 'white', fontSize: '1.7rem' }}>Cutter Head Position</dt>{' '}
        {tunnelL === '' || cutterHeadPositionNo[0] === undefined ? (
          <dd style={{ fontSize: '1.5rem', color: 'white', paddingTop: '15px' }}>
            Ring No.-------
          </dd>
        ) : (
          <dd style={{ fontSize: '1.5rem', color: 'white', paddingTop: '15px' }}>
            Ring No.
            <span
              style={{
                color: '#E83618',
                fontSize: '2.8rem',
                fontWeight: 'bold',
                paddingLeft: '10px',
              }}
            >
              {cutterHeadPositionNo[0]}
            </span>
          </dd>
        )}
      </dl>
    </div>
  );
};

export default Chart;
