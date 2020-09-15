const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');


currentYear = new Date().getFullYear();
currentMonth = new Date().getMonth();
currentDate = new Date().getDate();

let futureDate = new Date(currentYear,currentMonth,currentDate+10,16,0,00);

let actMonth = months[futureDate.getMonth()]
let actWeekdays = weekdays[futureDate.getUTCDay()]




giveAway.textContent = ` giveaway ends on ${actWeekdays}, ${actMonth},${futureDate.getUTCDate()},${futureDate.getFullYear()}, 
${futureDate.getHours()}:${futureDate.getMinutes()}`+ `0pm`

///setting the countdowntimers
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today =  new Date().getTime();
  const t = futureTime - today
  console.log(t);
  //perform some simple math
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1 day = 24 hours
  //values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  const oneSecond = 1000;
  days.textContent = Math.floor(t/oneDay);
  hours.textContent = Math.floor((t % oneDay)/oneHour);
  mins.textContent = Math.floor((t % oneHour)/oneMin);
  secs.textContent = Math.floor((t% oneMin) / oneSecond);

  if (t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">
    sorry, this giveaway has expired</h4>`
  }
}
let countdown = setInterval(getRemainingTime,1000)
getRemainingTime();


