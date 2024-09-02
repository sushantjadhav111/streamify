import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';
import "../../css/ChartsView.module.scss" 

ChartJS.register(LineElement, CategoryScale, LinearScale);

const UserGrowthChartView = ({data}) => {

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Users',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">User Growth Chart</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGrowthChartView;
