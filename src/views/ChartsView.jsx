import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chart as chartjs } from "chart.js/auto";
import "../css/ChartsView.module.scss";
import UserGrowthChartView from "./charts/UserGrowthChartView";
import RevenueDistributionChartView from "./charts/RevenueDistributionChartView";
import { Col, Row } from "react-bootstrap";
import TopStreamedSongsChartView from "./charts/TopStreamedSongsChartView";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartsView = ({ data }) => {
  return (
    <>
      <Row className="charts-row" style={{ display: "flex",justifyContent:'space-around' }}>
        <Col xs={12} md={6} className="chart-col" style={{ width: "45%" }}>
          <UserGrowthChartView data={data.userGrowthData} />
        </Col>

        <Col xs={12} md={6} className="chart-col" style={{ width: "45%" }}>
          <TopStreamedSongsChartView data={data.topSongsData} />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={4}
          className="chart-col"
          style={{ width: "30%", marginLeft: "20px", marginRight: "20px" }}
        >
          <RevenueDistributionChartView data={data.revenueDistributionData} />
        </Col>{" "}
      </Row>
    </>
  );
};

export default ChartsView;
