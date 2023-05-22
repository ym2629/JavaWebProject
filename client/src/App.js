import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import MyChart from "./component/MyChart/MyChart";
import Nav from "./component/Nav/Nav";
import { getChartData, makeFileData, renderChart } from "./api/api";
import "./AppMedia.css";
function App() {
  let [todo, setTodo] = useState("");
  let [filePath, setFilePath] = useState([]);
  let [chartData, setChartData] = useState([]);
  let [taskNumber, setTaskNumber] = useState("");
  let [chartType, setChartType] = useState("line");
  useEffect(() => {
    renderChart();
  }, []);
  function changeFile(e) {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = () => {
      setFilePath(reader.result);
    };
  }
  async function sendData(e) {
    try {
      let result = await makeFileData(filePath);
      alert("데이터를 등록하였습니다!");
    } catch (e) {
      alert("파일을선택해주세요!");
      console.log(e);
    }
  }
  async function handleChart(id) {
    try {
      let result = await getChartData(id);
      console.log(result);
      setChartData(result.data);
      setTaskNumber(id);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      
      <Nav setChartType={setChartType} />

      <div className="chart">
        <div className="chart-file">
          <input
            type="file"
            onChange={changeFile}
            placeholder="Upload file"
            accept=".txt"
            name="file"
            id="file"
          ></input>
          <label for="file">파일찾기</label>
          <button type="submit" onClick={sendData}>
            업로드
          </button>
        </div>
        <div className="chart-image">
          <MyChart
            chartData={chartData}
            taskNumber={taskNumber}
            chartType={chartType}
          />
        </div>
      </div>
      <div className="buttonList">
        <p>작업단위</p>
        <div className="taskButtons">
          <button onClick={() => handleChart(1)}>task1</button>
          <button onClick={() => handleChart(2)}>task2</button>
          <button onClick={() => handleChart(3)}>task3</button>
          <button onClick={() => handleChart(4)}>task4</button>
          <button onClick={() => handleChart(5)}>task5</button>
        </div>
        <p>코어단위</p>
        <div className="coreButtons">
          <button onClick={() => handleChart(6)}>core1</button>
          <button onClick={() => handleChart(7)}>core2</button>
          <button onClick={() => handleChart(8)}>core3</button>
          <button onClick={() => handleChart(9)}>core4</button>
          <button onClick={() => handleChart(10)}>core5</button>
        </div>
      </div>
    </div>
  );
}

export default App;
