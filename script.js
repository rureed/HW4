var questions = [{
    q: "WORK IT - MAKE IT - DO IT - ...?",
    c: ["BUILD IT", "MAKES US", "DAFT", "PUNK"],
    a: "MAKES US"
},
{
    q: "HARDER - BETTER - FASTER - ...?",
    c: ["SMARTER", "STRONGER", "SMELLY", "DISCOVERY"],
    a: "STRONGER"
},
{
    q: "MORE THAN - HOUR - OUR - ...?",
    c: ["FLOWER", "NEVER", "INTERSTELLA", "5555"],
    a: "NEVER"
},
{
    q: "EVER - AFTER - WORK IS - ...?",
    c: ["HELMETS", "OVER", "THOMAS", "GUY-MANUEL"],
    a: "OVER"
},
{
    q: "Work it harder, make it better, do it faster, makes us stronger, more than ever, hour after, our work is ...?",
    c: ["always coding", "never over", "one more time", "TRON"],
    a: "never over"
}
]

var score = 0;
var question = -1;
var remaining = 0;
var clock;

function time() {
    remaining = 75;
    document.querySelector("#remaining").innerHTML = remaining;

    clock = setInterval(function () {
        remaining--;
        document.querySelector("#remaining").innerHTML = remaining;

        if (remaining <= 0) {
            clearInterval(clock);
            allDone();
        }
    }, 1000);
    next();
}

function next() {
    question++

    if (question > questions.length - 1) {
        allDone();
        return;
    }

    var theQuiz = '<h3>' + questions[question].q + '</h3>'

    for (var i = 0; i < questions[question].c.length; i++) {
        var butGo = '<button class="btn-primary btn-lg" onclick="answer">selection</button>';
     butGo = butGo.replace("selection", questions[question].c[i]);
    if (questions[question].c[i] === questions[question].a) {
        butGo = butGo.replace("answer", "right()");
    } else {
        butGo = butGo.replace("answer", "wrong()");
    }
    theQuiz += butGo
}
    document.querySelector("#area").innerHTML = theQuiz;
}

function right() {
    next();
}

function wrong() {
    remaining -= 10;
    next();
}

function allDone() {
    clearInterval(clock);
    var area = '<h1> Your score is ' + remaining + '.</h1> <br> <input id="name" placeholder="name"> <br> <button onclick="save()">Save Your Score</button>';
    document.querySelector("#area").innerHTML = area;
}

function save() {
    localStorage.setItem("palyer", document.querySelector("#name").value);
    localStorage.setItem("playerScore", score);
    theScore();
}

function theScore() {
    var area = '<h3>' + localStorage.getItem("player") + ': ' + localStorage.getItem("playerScore") + '</h3>';
    document.querySelector("#area").innerHTML = area
}