import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const [enterFilter, setEnterFilter] = useState("2022");
  // const filterChange = (event) => {
  //   setEnterFilter(event.target.value);
  // };

  // props.onSaveExpensesFilter(enterFilter);

  const filterChange = (event) => {
    props.onSaveExpensesFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
