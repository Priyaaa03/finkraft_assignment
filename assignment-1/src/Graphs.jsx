import React from 'react';
import { AgCharts } from 'ag-charts-react';

const GSTRFillingCharts = () => {
  const gstr3bData = [
    { year: '2022-23', filledDelay: 43, filledOnTime: 57 },
    { year: '2017-18', filledDelay: 85, filledOnTime: 15 },
    { year: '2019-20', filledDelay: 42, filledOnTime: 58 },
    { year: '2020-21', filledDelay: 58, filledOnTime: 42 },
    { year: '2021-22', filledDelay: 20, filledOnTime: 80 },
    { year: '2018-19', filledDelay: 43, filledOnTime: 57 },
  ];

  const gstr1Data = [
    { year: '2018-19', filledDelay: 10, filledOnTime: 90 },
    { year: '2022-23', filledDelay: 95, filledOnTime: 5 },
    { year: '2019-20', filledDelay: 15, filledOnTime: 85 },
    { year: '2021-22', filledDelay: 98, filledOnTime: 2 },
    { year: '2017-18', filledDelay: 85, filledOnTime: 15 },
    { year: '2020-21', filledDelay: 99, filledOnTime: 1 },
  ];

  const createChartOptions = (data, title) => ({
    title: {
      text: title,
      fontSize: 18,
    },
    data: data,
    series: [
      {
        type: 'bar',
        xKey: 'year',
        yKey: 'filledDelay',
        yName: 'Filled delay',
        stacked: true,
        fillOpacity: 1,
        strokeWidth: 0,
        fill: '#0A8394',  // Darker teal
      },
      {
        type: 'bar',
        xKey: 'year',
        yKey: 'filledOnTime',
        yName: 'Filled on time',
        stacked: true,
        fillOpacity: 1,
        strokeWidth: 0,
        fill: '#38B0C1',  // Lighter teal
      },
    ],
    legend: {
      position: 'top',
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: {
          text: 'GSTR3B Filling Status',
        },
      },
      {
        type: 'number',
        position: 'left',
        title: {
          text: 'Sum of 3B Value',
        },
        label: {
          formatter: (params) => {
            return params.value + '%';
          },
        },
        max: 100,
      },
    ],
  });

  return (
    <div className='graph-second-row'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: 400, height: 400 }}>
          <AgCharts options={createChartOptions(gstr3bData, 'Sum of 3B Value by GSTR3B Filling Status and Delay filling 3B')} />
        </div>
        <div style={{ width: 400, height: 400 }}>
          <AgCharts options={createChartOptions(gstr1Data, 'Sum of R1 Value by GSTRR1 Filling Status and Delay filling R1')} />
        </div>
      </div>
    </div>
  );
};

export default GSTRFillingCharts;