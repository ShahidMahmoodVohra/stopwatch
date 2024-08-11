let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    document.getElementById("startBtn").disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    print("00:00:00.000");
    elapsedTime = 0;
    document.getElementById("startBtn").disabled = false;
}

// Adding event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
