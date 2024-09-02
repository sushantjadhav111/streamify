import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [metricsData, setMetricsData] = useState([
    { title: 'Total Users', value: '12000' },
    { title: 'Active Users', value: '5000' },
    { title: 'Total Streams', value: '6030' },
    { title: 'Revenue', value: '$260k' },
    { title: 'Top Artist', value: 'Udit Narayan' },
  ]);

  const [tableData, setTableData] = useState([
    { songName: 'Pehla Nasha', artist: 'Udit Narayan', dateStreamed: '2024-08-01', streamCount: 2000, userID: 'user123' },
    { songName: 'Tujhe Dekha To', artist: 'Kumar Sanu', dateStreamed: '2024-08-02', streamCount: 1800, userID: 'user456' },
    { songName: 'Chaiyya Chaiyya', artist: 'Sukhwinder Singh', dateStreamed: '2024-08-03', streamCount: 1700, userID: 'user789' },
    { songName: 'Mera Dil Bhi Kitna Pagal Hai', artist: 'Kumar Sanu', dateStreamed: '2024-08-04', streamCount: 1600, userID: 'user101' },
    { songName: 'Tera Ban Jaunga', artist: 'B Praak', dateStreamed: '2024-08-05', streamCount: 1500, userID: 'user202' },
  ]);

  const [chartsData, setChartsData] = useState({
    userGrowthData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Users',
          data: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500],
          borderColor: '#4B79A1',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
        {
          label: 'Active Users',
          data: [500, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700],
          borderColor: '#FF9F40',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: true,
        },
      ],
    },
    revenueDistributionData: {
      labels: ['Subscriptions', 'Ads'],
      datasets: [
        {
          data: [120000, 30000],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    topSongsData: {
      labels: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'],
      datasets: [
        {
          label: 'Streams',
          data: [5000, 4500, 4000, 3500, 3000],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: '#FFCE56',
          borderWidth: 1,
        },
      ],
    },
  });

  return (
    <DashboardContext.Provider value={{ metricsData, tableData, chartsData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
