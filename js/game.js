import formatData from "./helper.js";
const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
let formattedData = null;

const fetchData = async () => {
  const res = await fetch(URL);
  const json = await res.json();
 formattedData = formatData(json.results);
 console.log(formattedData)
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};
window.addEventListener("load", fetchData);
