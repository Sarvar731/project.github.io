const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const newYears = '18 June 2022';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecunds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecunds / 3600 / 24);
    const hours = Math.floor(totalSecunds / 3600) % 24;
    const mins = Math.floor(totalSecunds / 60) % 60;
    const secunds = Math.floor(totalSecunds) % 60;

    console.log(days, hours, mins, secunds);

    daysEl.innerHTML = formatIme(days);
    hoursEL.innerHTML = formatIme(hours);
    minsEl.innerHTML =formatIme(mins) ;
    secondsEl.innerHTML = formatIme(secunds);
}

  function formatIme(time) {
      return time < 10 ? `0${time}`  : time;
       
  }
countdown();

setInterval(countdown, 1000);