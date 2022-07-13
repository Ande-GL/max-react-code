import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    // extract from the array of objects, our specific property of value
    const totalMaximum = Math.max(...dataPointValue)
    // But since Math.max wants a list of arguments instead of an array
    // We can use the spread operator here to pull out all the array elements
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
        //   we also should add a key, it helps react render these list items efficiently. We will use label for it.
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      {/* add dynamically, mapping every data point to a chart bar */}
      {/* expected that to hold a value which is an array */}
      {/* that data point is an object which has a value property */}
    </div>
  );
};

export default Chart;
