const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  console.log(`Waiting for an interval ${currentTime / 1000} seconds`);};



const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
