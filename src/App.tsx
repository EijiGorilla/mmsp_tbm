/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList, measurement, compass } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTab,
  CalciteChip,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteButton,
  CalciteNavigation,
  CalciteNavigationLogo,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import ProgressChart from './components/ProgressChart';
import { dateUpdate, dropdownData } from './Query';
import { tbmTunnelLayer } from './layers';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // For dropdown filter
  const [contractPackage, setConstractPackage] = useState<null | any>(null);
  const [tunnelLine, setTunnelLine] = useState<null | any>(null);
  const [tunnelLineList, setTunnelLineList] = useState<null | undefined | any>([]);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // Measurement tools
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');

  //
  const [tbmTunnelLayerLoaded, setTbmTunnelLayerLoaded] = useState<any>();
  useEffect(() => {
    tbmTunnelLayer.load().then(() => {
      setTbmTunnelLayerLoaded(tbmTunnelLayer.loadStatus);
    });
  });

  // Default values for dropdown
  const defaultValue = {
    field1: 'CP101',
    field2: [
      {
        name: 'SG1-NB',
      },
      {
        name: 'SG1-SB',
      },
      {
        name: 'SG2-NB',
      },
      {
        name: 'SG2-SB',
      },
      {
        name: 'SG3-NB',
      },
      {
        name: 'SG3-SB',
      },
    ],
  };
  // Create dropdown list//
  useEffect(() => {
    setConstractPackage(defaultValue);
    setTunnelLineList(defaultValue.field2);
  }, []);

  // handle change event of the Municipality dropdown
  const handleContractPackageChange = (obj: any) => {
    setConstractPackage(obj);
    setTunnelLineList(obj.field2);
    setTunnelLine(null);
  };

  // handle change event of the barangay dropdownff
  const handleTunnelLineChange = (obj: any) => {
    setTunnelLine(obj);
  };

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  // Measurement Tool
  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
  }, [activeAnalysis]);

  useEffect(() => {
    map.ground.opacity = underground === false ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;

      // Measurement tool
      measurement.container = measurementToolDiv.current;
      const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
      view.ui.add(measureButton, 'top-right');

      view.ui.add(compass, 'top-right');
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#555555' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" scale="m">
          {tbmTunnelLayerLoaded === 'loaded' && (
            <Chart
              contractP={contractPackage === null ? defaultValue.field1 : contractPackage.field1}
              tunnelL={tunnelLine === null ? '' : tunnelLine.name}
            />
          )}
        </CalciteTabs>

        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderBottomWidth: '6px',
            height: '70px',
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">MMSP TBM TUNNEL</b>
          <div className="date" style={{ width: '15%' }}>
            {!asOfDate ? '' : 'As of ' + asOfDate}
          </div>

          <div className="dropdownFilterLayout">
            <b
              style={{
                color: 'white',
                margin: 10,
                fontSize: '0.9vw',
              }}
            ></b>
            <Select
              placeholder="Select CP"
              value={contractPackage}
              options={dropdownData}
              onChange={handleContractPackageChange}
              getOptionLabel={(x: any) => x.field1}
              styles={customstyles}
            />
            <br />
            <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}></b>
            <Select
              placeholder="Select Line"
              value={tunnelLine}
              options={tunnelLineList}
              onChange={handleTunnelLineChange}
              getOptionLabel={(x: any) => x.name}
              styles={customstyles}
            />
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/MMSP.png"
            alt="GCR Logo"
            height={'58px'}
            width={'77px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '3rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter data</b> by contract package and segment line.
                  </li>
                  <br />
                  <li>
                    <b>Filter</b> the data from dropdwon lists in the header.
                  </li>
                  <br />
                  <li>You can visualize underground using 'Ground' switch button at the bottom.</li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '220px',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          Off{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          On
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* Measurement Tools */}
        <div
          id="measurementToolMenu"
          className="esri-widget"
          style={{
            padding: '0.5em',
            maxWidth: '110px',
            width: '200px',
            height: '45px',
          }}
        >
          <CalciteButton
            id="directLineMeasurementAnalysisButton"
            icon-start="measure-line"
            title="Interact with direct line measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="areaMeasurementAnalysisButton"
            icon-start="measure-area"
            title="Interact with area measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="clearButton"
            icon-start="trash"
            title="Clear measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
        </div>

        {/* Monthly progress */}
        {nextWidget === 'charts' && nextWidget !== activeWidget ? (
          <ProgressChart
            contractP={contractPackage === null ? defaultValue.field1 : contractPackage.field1}
            tunnelL={tunnelLine === null ? '' : tunnelLine.name}
          />
        ) : (
          ''
        )}
      </CalciteShell>
    </>
  );
}

export default App;
