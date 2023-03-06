var days=document.getElementById("days");
var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var box=document.getElementsByClassName("box");

console.log(days,hours,minutes,seconds);

var deadline=new Date("apr 30, 2023 23:55:41").getTime();

var x = setInterval(function(){ 
var now=new Date().getTime();
var t=deadline-now;

var daysContent = Math.floor(t / (1000 * 60 * 60 * 24));
var hoursContent = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutesContent = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var secondsContent = Math.floor((t % (1000 * 60)) / 1000);

days.innerHTML=daysContent;
hours.innerHTML=hoursContent;
minutes.innerHTML=minutesContent;
seconds.innerHTML=secondsContent;

if (t < 0) {
    clearInterval(x);
}
},1000);