import React from 'react'
import DashboardContainerView from '../views/DashboardContainerView'
import { useDashboard } from '../context/Context';

const DashboardContainer = () => {
  const { metricsData, tableData, chartsData } = useDashboard();
  return (
<DashboardContainerView metricsData={metricsData} chartsData={chartsData} tableData={tableData}/>  )
}

export default DashboardContainer