import React from 'react';
import { AgCharts } from 'ag-charts-react';

const LineChart = () => {
  const data = [
    { year: '2019-20', value: 40 },
    { year: '2020-21', value: 50 },
    { year: '2017-18', value: 55 },
    { year: '2018-19', value: 70 },
    { year: '2021-22', value: 100 },
    { year: '2022-23', value: 180 },
  ];

  const options = {
    data: data,
    series: [{
      xKey: 'year',
      yKey: 'value',
      stroke: '#008080',
      marker: {
        fill: '#008080',
        stroke: '#008080',
      },
    }],
    title: {
      text: 'Sum of Column23 by Vendor Score History yearly',
      fontSize: 18,
    },
    subtitle: {
      text: '',
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: { text: 'Vendor Score History yearly' },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'Sum of Column23' },
        min: 0,
        max: 200,
      },
    ],
    legend: {
      enabled: false,
    },
  };

  return (
    <div style={{ width: '414px', height: '200px' }}>
      <AgCharts options={options} />
    </div>
  );
};

export default LineChart;