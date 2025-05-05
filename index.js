const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date();
console.log(today);

const dayname = ["Sunday","Monday","Tuesday","Wednesdy","Thursday","Friday","Saturday"];
const monthname =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = dayname[today.getDay()];
month.innerHTML =monthname[today.getMonth()] ;
year.innerHTML = today.getFullYear();
