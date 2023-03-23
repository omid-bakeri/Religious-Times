// Religious Times Web Service with API
// Designer: Omid Bakeri
// Programmer: Omid Bakeri

const body = document.createElement("body");
const titleApp = document.querySelector(".titleApp");
const timeSet = document.querySelector(".timeSet");
const nightDayState = document.querySelector(".nightDayState");
const btnDay = document.querySelector(".btnDay");
const btnNight = document.querySelector(".btnNight");
const Guide = document.querySelector(".Guide");
const searchBoxTextGuide = document.querySelector(".searchBoxTextGuide");
const searchBoxInput = document.querySelector(".searchBoxInput");
const imgIconDay = document.querySelector(".imgIconDay");
const imgIconNight = document.querySelector(".imgIconNight");

// Night and Day State

btnNight.addEventListener("click", () => {
  nightDayState.style.backgroundColor = "red";
  searchBoxTextGuide.style.backgroundColor = "blue";
  document.body.style.backgroundColor = 'blue';
  titleApp.style.backgroundColor = 'blue';
});
