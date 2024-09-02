import React from 'react'
import DashboardContainerView from '../views/DashboardContainerView'
import { chartsData, metricsData, tableData } from '../data/demoContent'

const DashboardContainer = () => {
  return (
<DashboardContainerView metricsData={metricsData} chartsData={chartsData} tableData={tableData}/>  )
}

export default DashboardContainer