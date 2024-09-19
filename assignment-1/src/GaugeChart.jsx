import React from 'react';
import { AgCharts } from 'ag-charts-react';

const GaugeChart = () => {
  const options = {
    data: [
      { type: 'Score', value: 900 }
    ],
    series: [{
      type: 'gauge',
      minValue: 0,
      maxValue: 2400,
      innerRadius: 0.8,
      dataFields: {
        value: 'value',
        category: 'type'
      },
      numTicks: 4,
      strokeWidth: 10,
      colors: ['#008080', '#E0E0E0'],
    }],
    title: {
      text: 'Sum of Target score and Sum of Vendor Score',
      fontSize: 18,
    },
    subtitle: {
      text: '1200',
      fontSize: 32,
      fontWeight: 'bold',
    },
  };

  return (
    <div className='gauge-chart' style={{ width: '150px' }}>
      <AgCharts options={options} />
    </div>
  );
};

export default GaugeChart;