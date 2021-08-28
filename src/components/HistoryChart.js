import React, { useEffect, useRef } from "react";
import Chartjs from "chart.js";

const HistoryChart = () => {
  const chartRef = useRef(); //accesing DOM element in React

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);
  return (
    <div className="bg-white border mt-2 rounded p-3">
        <div></div>
      <div>
        <canvas id="myChart" ref={chartRef} width={250} height={250}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
