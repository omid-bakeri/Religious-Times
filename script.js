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
const result_box_day = document.querySelector(".result-box-day");
const result_city = document.querySelector(".result-city");
const azan_sobh = document.querySelector(".azan-sobh");
const tolo_aftab = document.querySelector(".tolo-aftab");
const azan_zohr = document.querySelector(".azan-zohr");
const azan_maghreb = document.querySelector(".azan-maghreb");
const nime_sharei_shab = document.querySelector(".nime-sharei-shab");
const map_link = document.querySelector(".map-link");
const startBox = document.querySelector(".startBox");
const tetBox = document.querySelector(".TetBox");
const closeBox = document.querySelector(".closeBox");

const month = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

// current Time
function getCurrentTime(time) {
  let currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }

  timeSet.textContent = `ساعت اکنون : ${second} : ${minute} : ${hour}`;
  return time;
}
setInterval(function () {
  var cTime = getCurrentTime();
  // Timer.innerHTML = cTime;
}, 1000);

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

class CityAPI {
  constructor() {
    search_box_button.addEventListener("click", this._getAPI.bind(this));
    closeBox.addEventListener("click", this._closeElement.bind(this));
  }
  _getAPI() {
    if (searchBoxInput.value.length === 0) {
      this._ShowError();
      return false;
    } else if (searchBoxInput.value.length !== 0) {
      this._showBox();
      this._ShowElement();
      return true;
    }
  }
  _ShowError() {
    startBox.classList.remove(".startBox-hidden");
    startBox.style.display = "block";
    tetBox.textContent = "کاربر گرامی شهر مد نظر خود را وارد نمایید";
  }
  _closeElement() {
    startBox.classList.add(".startBox-hidden");
    startBox.style.display = "none";
  }
  _showBox() {
    result_box.classList.remove("result_box-hidden");
    result_box.style.display = "block";
  }
  _ShowElement() {
    const cityAPI = function (city) {
      fetch(
        `https://one-api.ir/owghat/?token=274908:641729abd8413&city=${city}&en_num=true`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          result_city.textContent = data.result.city;
          result_box_day.textContent = `${data.result.day} ${
            month[data.result.month - 1]
          }  1402`;
          azan_sobh.textContent = `اذان صبح : ${data.result.azan_sobh}`;
          tolo_aftab.textContent = `طلوع آفتاب : ${data.result.toloe_aftab}`;
          azan_zohr.textContent = `اذان ظهر : ${data.result.azan_zohre}`;
          azan_maghreb.textContent = `اذان مغرب : ${data.result.azan_maghreb}`;
          nime_sharei_shab.textContent = `نیمه شب شرعی : ${data.result.nime_shabe_sharie}`;
        });
    };
    let cityElement = searchBoxInput.value;
    cityAPI(cityElement);
  }
}
const cityAPI = new CityAPI();
