var score = 0;
var question = -1;
var remaining = 0;
var clock;

function time() {
    remaining = 75;
    document.getElementById("remaining").innerHTML = remaining;

    clock = setInterval(function() {
        remaining--;
        document.getElementById("remaining").innerHTML = remaining;

        if (remaining <= 0) {
            clearInterval(clock);
            endQuiz();
        }
    }, 1000);
    next()
}


  

var startBtn = document.get

function start() {


}

function next() {

}

function answer() {

}