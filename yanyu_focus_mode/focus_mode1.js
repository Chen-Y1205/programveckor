let totalSeconds = 0;
let interval = null;
let running = false;

const inputH = document.querySelector(".input_h");
const inputM = document.querySelector(".input_m");
const inputS = document.querySelector(".input_s");

const timer = document.getElementById("timer");
const setBtn = document.getElementById("setBtn");
const pausBtn = document.getElementById("pausBtn");
const stoppBtn = document.getElementById("stoppBtn");
const inputSection = document.getElementById("input_timer");

function formatTime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  return (
    String(h).padStart(2, "0") + ":" +
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0")
  );
}

function tick() {
  if (totalSeconds <= 0) {
    stopTimer();
    return;
  }
  totalSeconds--;
  timer.textContent = formatTime(totalSeconds);
}

// Set Timer
setBtn.onclick = () => {
    const h = parseInt(inputH.value) || 0;
    const m = parseInt(inputM.value) || 0;
    const s = parseInt(inputS.value) || 0;

    totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds <= 0) {
        alert("Enter the time.");
        return;
    }

    timer.textContent = formatTime(totalSeconds);

    // Dölj input, visa knapp
    inputSection.classList.add("hidden"); 
    setBtn.classList.add("hidden"); 
    pausBtn.classList.remove("hidden");
    stoppBtn.classList.remove("hidden");


    interval = setInterval(tick, 1000);
    running = true;
    };

    // paus/stopp
    pausBtn.onclick = () => {
    if (running) {
        clearInterval(interval);
        pausBtn.textContent = "continue";
        running = false;
    } else {
        interval = setInterval(tick, 1000);
        pausBtn.textContent = "Pause";
        running = true;
    }
    };

    // stanna och reset
    function stopTimer() {
    clearInterval(interval);
    running = false;
    totalSeconds = 0;

    timer.textContent = "00:00:00";
    pausBtn.textContent = "Pause";

    inputH.value = "";
    inputM.value = "";
    inputS.value = "";

    inputSection.classList.remove("hidden");
    setBtn.classList.remove("hidden");
    pausBtn.classList.add("hidden");
    stoppBtn.classList.add("hidden");
    }

    stoppBtn.onclick = stopTimer;
