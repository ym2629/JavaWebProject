import React, { useEffect } from "react";
import Chart from "chart.js";
import "./MyChart.css";
let LineChart;

function MyChart({ chartData, taskNumber, chartType }) {
  useEffect(() => {
    buildChart();
    console.log(chartType);
  }, [chartData, taskNumber, chartType]);
  const buildChart = () => {
    let ctx = document.getElementById("LineChart").getContext("2d");

    if (typeof LineChart !== "undefined") LineChart.destroy();

    if (taskNumber <= 5) {
      LineChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ["core1", "core2", "core3", "core4", "core5"],

          datasets: [
            {
              hoverOffset: 4,
              label: "Max",
              data: [
                chartData[0],
                chartData[1],
                chartData[2],
                chartData[3],
                chartData[4],
              ],

              fill: false,
              borderColor: "#FF6998",
              backgroundColor: "#FF6998",
              tension: 0.1,
            },
            {
              label: "Min",
              data: [
                chartData[5],
                chartData[6],
                chartData[7],
                chartData[8],
                chartData[9],
              ],
              fill: false,
              borderColor: "#845EC2",
              backgroundColor: "#845EC2",
              tension: 0.1,
            },
            {
              label: "Avg",
              data: [
                chartData[10],
                chartData[11],
                chartData[12],
                chartData[13],
                chartData[14],
              ],
              fill: false,
              borderColor: "#D65DB1",
              backgroundColor: "#D65DB1",
              tension: 0.1,
            },

            {
              label: "Std",
              data: [
                chartData[15],
                chartData[16],
                chartData[17],
                chartData[18],
                chartData[19],
              ],
              fill: false,
              borderColor: "#63e6be",
              backgroundColor: "#63e6be",
              tension: 0.1,
            },
          ],
        },
      });
    } else {
      LineChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ["task1", "task2", "task3", "task4", "task5"],
          datasets: [
            {
              hoverOffset: 4,
              label: "Max",
              data: [
                chartData[0],
                chartData[1],
                chartData[2],
                chartData[3],
                chartData[4],
              ],
              fill: false,
              borderColor: "#FF6998",
              backgroundColor: "#FF6998",
              tension: 0.1,
            },
            {
              label: "Min",
              data: [
                chartData[5],
                chartData[6],
                chartData[7],
                chartData[8],
                chartData[9],
              ],
              fill: false,
              borderColor: "#845EC2",
              backgroundColor: "#845EC2",
              tension: 0.1,
            },
            {
              label: "Avg",
              data: [
                chartData[10],
                chartData[11],
                chartData[12],
                chartData[13],
                chartData[14],
              ],
              fill: false,
              borderColor: "#D65DB1",
              backgroundColor: "#D65DB1",
              tension: 0.1,
            },

            {
              label: "Std",
              data: [
                chartData[15],
                chartData[16],
                chartData[17],
                chartData[18],
                chartData[19],
              ],
              fill: false,
              borderColor: "#63e6be",
              backgroundColor: "#63e6be",
              tension: 0.1,
            },
          ],
        },
      });
    }
  };

  return (
    <div>
      <h2>
        {taskNumber > 5 ? "core" : "task"}
        {taskNumber <= 5 ? taskNumber : taskNumber - 5}의
        {taskNumber > 5 ? "task" : "core"}별 수행능력
      </h2>
      <canvas className="Chart" id="LineChart" width="1000" heght="500" />
    </div>
  );
}

export default MyChart;
