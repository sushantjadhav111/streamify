import React, { Suspense, lazy, memo } from 'react'
import "../css/DashboardView.module.scss"
const KeyMetricsView = lazy(() => import('./KeyMetricsView'));
const DataTableView = lazy(() => import('./DataTableView'));
const ChartsView = lazy(() => import('./ChartsView'));

const DashboardContainerView = ({metricsData,chartsData,tableData}) => {
  return (
    <div className="container " style={{padding:20,background: "#c1d1e2"}}>
      <h1 className="text-center my-4 mt-2">Streamify</h1>
      <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Suspense fallback={<div>Loading...</div>}>
      <KeyMetricsView data={metricsData} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <ChartsView data={chartsData} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <DataTableView data={tableData} />
      </Suspense>
    </div>
  )
}

export default memo(DashboardContainerView)