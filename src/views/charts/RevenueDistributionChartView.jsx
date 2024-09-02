import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "../../css/ChartsView.module.scss" 


ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueDistributionChartView = ({data}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || '';
            return `${label}: $${value}k`;
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Revenue Distribution</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default RevenueDistributionChartView;
