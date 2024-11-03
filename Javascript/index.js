function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:m:ss[<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:m:ss[<small>]A[</small>]");
  }
  let mawsonElement = document.querySelector("#mawson");
  if (mawsonElement) {
    let mawsonDateElement = mawsonElement.querySelector(".date");
    let mawsonTimeElement = mawsonElement.querySelector(".time");
    let mawsonTime = moment().tz("Antarctica/Mawson");

    mawsonDateElement.innerHTML = mawsonTime.format("MMM Do YYYY");
    mawsonTimeElement.innerHTML = mawsonTime.format(
      "h:m:ss[<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small>
    </div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
