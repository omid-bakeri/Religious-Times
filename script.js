// Religious Times Web Service with API
// Designer: Omid Bakeri
// Programmer: Omid Bakeri

const body = document.createElement("body");
const titleApp = document.querySelector(".TitleApp");
const timeSet = document.querySelector(".timeSet");
const nightDayState = document.querySelector(".nightDayState");
const btnDay = document.querySelector(".btnDay");
const btnNight = document.querySelector(".btnNight");
const Guide = document.querySelector(".Guide");
const searchBoxTextGuide = document.querySelector(".searchBoxTextGuide");
const searchBoxInput = document.querySelector(".searchBoxInput");
const imgIconDay = document.querySelector(".imgIconDay");
const imgIconNight = document.querySelector(".imgIconNight");
const result_box = document.querySelector(".result-box");
const search_box_button = document.querySelector(".search-box-button");
const result_search_result_city = document.querySelector(
  ".result-search-result-city"
);
const result_city = document.querySelector(".result-city");
const azan_sobh = document.querySelector(".azan-sobh");
const tolo_aftab = document.querySelector(".tolo-aftab");
const azan_zohr = document.querySelector(".azan-zohr");
const azan_maghreb = document.querySelector(".azan-maghreb");
const nime_sharei_shab = document.querySelector(".nime-sharei-shab");
const map_link = document.querySelector(".map-link");

// Night and Day State

class ChangeDarKTheme {
  constructor() {
    btnNight.addEventListener("click", this._changeDarkThemeFunc.bind(this));
    btnDay.addEventListener("click", this._changeDayThemeFunc.bind(this));
  }
  _changeDarkThemeFunc() {
    document.body.style.backgroundColor = "#101E42";
    imgIconDay.src = "icons/icons8-sun-53 (1).png";
    btnDay.style.backgroundColor = "#0C4AA6";
    btnNight.style.backgroundColor = "#0C4AA6";
    imgIconNight.src = "icons/icons8-moon-symbol-53.png";
    nightDayState.style.backgroundColor = "#0C4AA6";
    result_box.style.opacity = "95%";
    result_box.style.backgroundColor = "#0C4AA6";
    titleApp.style.backgroundColor = "#0C4AA6";
    titleApp.style.color = "#ffffff";
    timeSet.style.color = "#ffffff";
    searchBoxTextGuide.style.color = "#ffffff";
    result_search_result_city.style.color = "#ffffff";
    azan_sobh.style.color = "#ffffff";
    tolo_aftab.style.color = "#ffffff";
    azan_zohr.style.color = "#ffffff";
    nime_sharei_shab.style.color = "#ffffff";
    azan_maghreb.style.color = "#ffffff";
    map_link.style.color = "#B8BBC0";
    result_city.style.color = "#C4F012";
    searchBoxInput.style.backgroundColor = "#0C4AA6";
    searchBoxInput.style.border = "none";
    searchBoxInput.style.color = "#ffffff";
    Guide.style.color = "#2992F3";
    searchBoxInput.addEventListener("focus", () => {
      searchBoxInput.style.border = "2px solid #05a6db";
      searchBoxInput.style.transition = "0.6s ease";
    });
  }
  _changeDayThemeFunc() {
    document.body.style.backgroundColor = "#ffffff";
    imgIconDay.src = "icons/icons8-sun-53.png";
    btnDay.style.backgroundColor = "#F2F2F2";
    btnNight.style.backgroundColor = "#F2F2F2";
    imgIconNight.src = "icons/icons8-moon-symbol-53 (1).png";
    nightDayState.style.backgroundColor = "#F2F2F2";
    result_box.style.opacity = "80%";
    result_box.style.backgroundColor = "#F2F2F2";
    titleApp.style.backgroundColor = "#F2F2F2";
    titleApp.style.color = "#3C3C3C";
    timeSet.style.color = "#3C3C3C";
    searchBoxTextGuide.style.color = "#3C3C3C";
    result_search_result_city.style.color = "#3C3C3C";
    azan_sobh.style.color = "#3C3C3C";
    tolo_aftab.style.color = "#3C3C3C";
    azan_zohr.style.color = "#3C3C3C";
    nime_sharei_shab.style.color = "#3C3C3C";
    azan_maghreb.style.color = "#3C3C3C";
    map_link.style.color = "#265FF0";
    result_city.style.color = "#E27729";
    searchBoxInput.style.border = "2px solid #e8e7e7";
    searchBoxInput.style.color = "black";
    searchBoxInput.style.backgroundColor = "#F2F2F2";
  }
}
const changeDarKTheme = new ChangeDarKTheme();

// API Religious Times
