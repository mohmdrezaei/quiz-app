const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
let formatedDara = null;
const formatData = (qustionData) => {
  console.log(qustionData)
  const result = qustionData.map((item) => {
    const questionObject = { question: item.question };
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    questionObject.answes = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex; 
    return questionObject;
  });
  return result
};
const fetchData = async () => {
  const res = await fetch(URL);
  const json = await res.json();
 formatedDara = formatData(json.results);
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};
window.addEventListener("load", fetchData);
