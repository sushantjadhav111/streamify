import React from 'react'
import ChartsView from './ChartsView'
import KeyMetricsView from './KeyMetricsView'
import DataTableView from './DataTableView'
import "../css/DashboardView.module.scss"

const DashboardContainerView = ({metricsData,chartsData,tableData}) => {
  return (
    <div className="container " style={{padding:20}}>
      <h1 className="text-center my-4">Dashboard</h1>
      <KeyMetricsView data={metricsData} />
      <ChartsView data={chartsData} />
      <DataTableView data={tableData} />
    </div>

  )
}

export default DashboardContainerView