//here we need to define the dataPoints which are passed into the chart
import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
// create const with array with bunch of objects
// (because we expect every data point to be an object, when we map through data points in Chart.js)
    const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
//we wonna look at our filteredExpenses and go through all the expenses for a selected year
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
// look at every expense, get the month of that expense, and updates the value chartDataPoints of the appropriate data point by the expense amount.
console.log(chartDataPoints)
  return <Chart dataPoints={chartDataPoints} />;
// pass these chartDataPoints to the Chart 
};

export default ExpensesChart;