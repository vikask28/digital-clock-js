const time = document.getElementById("time");
const seconds = document.getElementById("seconds");

const day = document.getElementById("day");
const date = document.getElementById("date");

setInterval (function getTime(){
    let currentdate = new Date();
    time.innerHTML = currentdate.getHours() + ":" + currentdate.getMinutes();
    seconds.innerHTML =":" + currentdate.getSeconds();

}, 1000)

function getDate(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentdate = new Date();
    let dayName = days[currentdate.getDay()];
    day.innerHTML = dayName;
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
    date.innerHTML = currentdate.getDate() + " " + months[currentdate.getMonth()] + " " + currentdate.getFullYear();
    console.log(currentdate)
}

getDate();









