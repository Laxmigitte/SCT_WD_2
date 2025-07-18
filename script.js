let startTime, interval;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById("time").innerText = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  interval = setInterval(updateDisplay, 1000);
}

function pauseStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  elapsedTime += Date.now() - startTime;
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("time").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (!isRunning) return;
  const time = document.getElementById("time").innerText;
  const lap = document.createElement("li");
  lap.textContent = `Lap: ${time}`;
  document.getElementById("laps").appendChild(lap);
}
