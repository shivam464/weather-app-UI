import React from "react";
import ApexCharts from "react-apexcharts";
const Chart = ({ options }) => {
  return (
    <div>
      <div id="gauge-chart">
        <ApexCharts
          options={options}
          series={options.series}
          type="radialBar"
          height={100}
        />
      </div>
    </div>
  );
};

export default Chart;
