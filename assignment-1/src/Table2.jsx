import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const FillingStatusTables = () => {
  const [gstr3bRowData] = useState([
    { 'GSTR3B Filling Status': '2021-22', 'Sum of Avg Days_1': 10 },
    { 'GSTR3B Filling Status': '2017-18', 'Sum of Avg Days_1': 9 },
    { 'GSTR3B Filling Status': '2018-19', 'Sum of Avg Days_1': 7 },
    { 'GSTR3B Filling Status': '2019-20', 'Sum of Avg Days_1': 5 },
    { 'GSTR3B Filling Status': 'Total', 'Sum of Avg Days_1': 37 },
  ]);

  const [gstr1RowData] = useState([
    { 'GSTRR1 Filling Status': '2017-18', 'Sum of Avg Days': 10 },
    { 'GSTRR1 Filling Status': '2018-19', 'Sum of Avg Days': 13 },
    { 'GSTRR1 Filling Status': '2019-20', 'Sum of Avg Days': 6 },
    { 'GSTRR1 Filling Status': '2020-21', 'Sum of Avg Days': 4 },
    { 'GSTRR1 Filling Status': 'Total', 'Sum of Avg Days': 45 },
  ]);

  const gstr3bColumnDefs = [
    { field: 'GSTR3B Filling Status', width: 150 },
    { field: 'Sum of Avg Days_1', width: 150 },
  ];

  const gstr1ColumnDefs = [
    { field: 'GSTRR1 Filling Status', width: 150 },
    { field: 'Sum of Avg Days', width: 150 },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginLeft: '421px', marginTop: '17px', height: '247px' }}>
      <div className="ag-theme-alpine" style={{ height: '247px', width: 320 }}>

        <AgGridReact
          rowData={gstr3bRowData}
          columnDefs={gstr3bColumnDefs}
          defaultColDef={defaultColDef}
          suppressMovableColumns={true}
          headerHeight={30}
          rowHeight={30}
        />
      </div>
      <div className="ag-theme-alpine" style={{ height: '247px', width: 320 }}>

        <AgGridReact
          rowData={gstr1RowData}
          columnDefs={gstr1ColumnDefs}
          defaultColDef={defaultColDef}
          suppressMovableColumns={true}
          headerHeight={30}
          rowHeight={30}
        />
      </div>
    </div>
  );
};

export default FillingStatusTables;