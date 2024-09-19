import React, { useState, useEffect } from 'react';
import { AgCharts } from 'ag-charts-react';
import { AgGridReact } from 'ag-grid-react';

const TabularChart = () => {
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const [columnDefs] = useState([
    { field: 'gstIn', headerName: 'GSTIN' },
    { field: 'state', headerName: 'State' },

  ]);

  // const [chartOptions, setChartOptions] = useState({
  //   title: {
  //     text: 'Vendor Score History',
  //   },
  //   data: [],
  //   series: [{
  //     xKey: 'year',
  //     yKey: 'score',
  //   }],
  // });

  useEffect(() => {

    const fetchData = async () => {
      // we can replace with API call
      const data = [
        { gstIn: '22AAAAA0000A1Z10', state: 'Madhya Pradesh' },
        { gstIn: '22AAAAA0000A1Z5', state: 'Madhya Pradesh' },
        { gstIn: '22AAAAA0000A1Z8', state: 'Madha Pradesh' },
        { gstIn: '22AAAAA0000A1Z9', state: 'Madha Pradesh' },
        { gstIn: '22AAAAA0000A1Z10', state: 'Madha Pradesh' }

      ];
      setRowData(data);
    };

    fetchData();
  }, []);

  // const onSelectionChanged = (event) => {
  //   const selectedNodes = event.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   setSelectedRow(selectedData[0]);


  //   if (selectedData.length > 0) {
  //     setChartOptions(prevOptions => ({
  //       ...prevOptions,
  //       data: [
  //         { year: '2022-23', score: selectedData[0].vendorScore },
  //         { year: '2021-22', score: selectedData[0].vendorScore * 0.9 },

  //       ],
  //     }));
  //   }
  // };

  return (
    <div className="table-first-row">
      <div className="ag-theme-alpine" style={{ height: '207px', width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="single"

        />
      </div>

    </div>
  );
};

export default TabularChart;