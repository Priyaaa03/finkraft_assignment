import React, { useState, useEffect } from 'react';
import './app.scss';
import { AgGridReact } from 'ag-grid-react';
import { AgCharts } from 'ag-charts-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import NavBar from './NavBar';
import GaugeChart from './GaugeChart';
import TabularChart from './Table';
import FillingStatusTables from './Table2';
import GSTRFillingCharts from './Graphs';
import LineChart from './LineChart';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard">
      <div className='header-box'>
        <div className='header'>Taj Hotels Private Limited</div>
        <div className="dropdown">
          <div>PAN</div>
          <button className="dropbtn" onClick={toggleDropdown}>
            All
          </button>
          {isOpen && (
            <div id="myDropdown" className="dropdown-content">
              <a href="#">AAACT3957G</a>
            </div>
          )}
        </div>

      </div>
      <NavBar className='navbar' />

      <div className='first-row'>
        <GaugeChart />
        <div className='map-visuals'> Map and filled map visuals aren't enabled for your org. Contact your tenant admin to fix this. <a href='google.com'> See details</a></div>
        <TabularChart />
        <LineChart />
      </div>
      <div className='second-row'>
        <FillingStatusTables className='filling-status-table' />
        <GSTRFillingCharts />
      </div>
    </div>
  );
};


export default App;
