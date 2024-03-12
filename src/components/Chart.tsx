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
  const [delayedSwitch, setDelayedSwitch] = useState<boolean>(false);

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

  useEffect(() => {
    if (delayedSwitch === true) {
      tbmTunnelLayer.renderer = tbmDelayedRenderer;
    } else {
      tbmTunnelLayer.renderer = tbmStatusRenderer;
    }
  });

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
        fontSize: 25,
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
        text: '[bold]' + chartData[1],
        fontSize: '1.6em',
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
      strokeOpacity: 0.1,
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
      strokeOpacity: 0.8,
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
        fontSize: '1em',
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
    <div>
      <CalciteLabel layout="inline">
        <span style={{ marginRight: 'auto', fontSize: '1.7rem' }}>PROGRESS</span>
        <img
          src="https://EijiGorilla.github.io/Symbols/TBM.png"
          alt="TBM Logo"
          height={'90%'}
          width={'20%'}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </CalciteLabel>

      {/* Total Number of Segment rings */}
      <CalciteLabel>
        Total Rings
        <div className="totalProgressNumber">{thousands_separators(chartData[0])}</div>
      </CalciteLabel>
      {/* Progress Chart */}
      <CalciteLabel>
        Segmented Rings
        <div
          id={chartID}
          style={{
            width: '22vw',
            height: '28vh',
            color: 'white',
            marginRight: '10px',
          }}
        ></div>
      </CalciteLabel>
      {/* <div className="gaugeChartTitle">Segment Ring</div> */}
      <CalciteLabel>
        Cutter Head Position
        <div className="cutterHeadPositionNo">
          {tunnelL === '' || cutterHeadPositionNo[0] === undefined ? (
            <div className="ringAbsentLabel">Ring No.-------</div>
          ) : (
            <div className="ringPresentLabel">
              Ring No.<span>{cutterHeadPositionNo[0]}</span>
            </div>
          )}
        </div>
      </CalciteLabel>
      {/* Delayed Segment */}
      <CalciteLabel>
        Delayed Segment
        <CalciteSwitch
          onCalciteSwitchChange={(event) => setDelayedSwitch(event.target.checked)}
        ></CalciteSwitch>
        <div className="delayedSegmentNo">
          {chartData[3] === 0 || chartData[4] === undefined ? (
            <div className="totalDelayZero">0% (0)</div>
          ) : (
            <div className="totalDelayPresent">
              {chartData[4]} % ({thousands_separators(chartData[3])})
            </div>
          )}
        </div>
      </CalciteLabel>
    </div>
  );
};

export default Chart;
