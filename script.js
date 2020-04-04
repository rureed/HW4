function remaining() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }
  

var startBtn = document.get

function start() {

}

function next() {

}

function answer() {

}