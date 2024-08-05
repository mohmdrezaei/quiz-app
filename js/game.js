const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium";
let formatedDara = null;
const loader = document.getElementById("loader");
const container = document.getElementById("container");


const fetchData = async () => {
  const res = await fetch(URL);
  const json = await res.json();
  formatedDara = json;
  start();
};

const start =()=>{
    loader.style.display = 'none';
    container.style.display = 'block'
}
window.addEventListener("load", fetchData);
