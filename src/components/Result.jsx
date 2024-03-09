import React from "react";
import { calculateInvestmentResults } from "../util/investment.js";

const Result = ({ result }) => {
  const completeResults = calculateInvestmentResults(result);

  console.log(completeResults);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Result;
