var questions = [{
    q: "WORK IT - MAKE IT - DO IT - ...",
    c: ["BUILD IT", "MAKES US", "DAFT", "PUNK"],
    a: "MAKES US"
},
{
    q: "HARDER - BETTER - FASTER - ...",
    c: ["SMARTER", "STRONGER", "SMELLY", "DISCOVERY"],
    a: "STRONGER"
},
{
    q: "MORE THAN - HOUR - OUR - ...",
    c: ["FLOWER", "NEVER", "INTERSTELLA", "5555"],
    a: "NEVER"
},
{
    q: "EVER - AFTER - WORK IS - ...",
    c: ["HELMETS", "OVER", "THOMAS", "GUY-MANUEL"],
    a: "OVER"
},
{
    q: "Work it harder, make it better, do it faster, makes us stronger, more than ever, hour after, our work is ...?",
    c: ["always coding", "never over", "one more time", "TRON"],
    a: "never over"
}
]

var question = -1;
var remaining = 0;
var clock;

function time() {
    remaining = 120;
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
    
    var area = '<h1> Your score is ' + remaining + '.</h1> <input type="text" id="name" placeholder="Enter Name"> <br> <button class="btn-primary btn-lg" onclick="aSave()">Save Your Score</button>';
    document.querySelector("#area").innerHTML = area;
}

function aSave() {
    localStorage.setItem("playerScore", remaining);
    localStorage.setItem("player", document.getElementById('name').value);
    theScore();
}

function theScore() {
    var area = '<h3>' + localStorage.getItem("player") + ': ' + localStorage.getItem("playerScore") + '</h3><button class="btn-primary btn-lg" onclick="location.reload()">Try Again?</button'
    document.querySelector("#area").innerHTML = area

    //If you get the last answer wrong, or just rapidly click wrong answers, the timer at the top won't reflect the actual score 'cause it doesn't update as quickly as the 'allDone' function.
}




