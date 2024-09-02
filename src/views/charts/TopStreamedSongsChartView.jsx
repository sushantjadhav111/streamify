import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import "../../css/ChartsView.module.scss" 

ChartJS.register(BarElement, CategoryScale, LinearScale);

const TopStreamedSongsChartView = ({data}) => {

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Songs',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Stream Count',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Top 5 Streamed Songs</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopStreamedSongsChartView;
