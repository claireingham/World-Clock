setInterval(function () {
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
  madridDateElement.innerHTML = moment().format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}, 1000);
