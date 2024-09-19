import React, { useState, useEffect } from 'react';
import './app.scss';
import { AgGridReact } from 'ag-grid-react';
import { AgCharts } from 'ag-charts-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function NavBar() {

  return (

    < >
      <div className='nav-box'>
        <div className='navbox-text'> 22AAAAA0000A1Z10 </div>
        <div className='navbox-subtext'> First GSTIN </div>
      </div>

      <div className='nav-box'>
        <div className='navbox-text'>Tuesday, August 27, 2024</div>
        <div className='navbox-subtext'>Earliest date of Registraction</div>
      </div>

      <div className='nav-box'>
        <div className='navbox-text'>Slab 5 cr - 25 cr</div>
        <div className='navbox-subtext'>First E Annual Aggreate Turnover </div>
      </div>

      <div className='nav-box'>
        <div className='navbox-text'>UDHYAM-GJ-24-2025</div>
        <div className='navbox-subtext' >First E Annual Aggreate Turnover </div>
      </div>

      <div className='nav-box'>
        <div className='navbox-text'>26</div>
        <div className='navbox-subtext'>First 3B DAY Dealy </div>
      </div>

      <div className='nav-box'>
        <div className='navbox-text'>15</div>
        <div className='navbox-subtext'>First R1 Day Dealy </div>
      </div>



    </>

  );
};


export default NavBar;