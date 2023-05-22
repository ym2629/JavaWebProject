import axios from "axios";

export async function makeFileData(filePath) {
  let result = await axios.post("/chart/graph", { data: { path: filePath } });
  return result;
}

export async function getChartData(id) {
  let result = await axios.get("/chart/graph/show/" + id);
  return result;
}

export async function renderChart() {
  await axios.get("/chart").then((result) => {
    console.log(result);
  });
}
