import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
//   as a text because this will be assigned as a CSS style

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    // rounding to the nearest integer, relation value and maxValue in percents
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
        {/* how much the fill depends on the data (relation value and maxValue*/}
        {/* set the style of an element dynamically - style={{}} {}dynamic {}object 
        (if we will use "background-color" we need "" or use camelKeys - backgroundColor: 'red') */}
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
