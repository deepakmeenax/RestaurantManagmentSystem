import './graph.style.css';
import { useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { GData } from '../utils';

Chart.register(CategoryScale);

function DataGraph() {
  const [chartData, setChartData] = useState({
    labels: GData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained ',
        data: GData.map((data) => data.userGain),
        fill: true,
        backgroundColor: '#03c9878d',
        borderColor: '#03C988',
        borderWidth: 2,
      },
    ],
  });

  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Users Gained between 2016-2020',
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

export default DataGraph;
