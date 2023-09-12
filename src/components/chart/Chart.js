import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxmum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaxmum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
