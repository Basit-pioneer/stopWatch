var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function Timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec>+100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec>=60){
        min++
        minHeading.innerHTML = min
        sec = 0;
    }
}


function start(){
    interval = setInterval(Timer,10)
   var btn1 = document.getElementById("btn1").setAttribute("disabled","")
}

function stop(){
    clearInterval(interval)
    var btn2 = document.getElementById("btn2").setAttribute("disabled","")

}

function reset(){
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
    clearInterval(interval)
    var btn3 = document.getElementById("btn3").setAttribute("disabled","")
}