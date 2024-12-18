function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = document.querySelector("#madrid .date");
  let madridTimeElement = document.querySelector("#madrid .time");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
            <div>
              <h2>${cityName}<h2>
              <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
            </div>
              
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )} <small>${cityTime.format("A")}<small></div>

  <a href="/">All Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement = addEventListener("change", updateCity);
