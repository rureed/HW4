var questions = [{
    q: "WORK IT, MAKE IT, DO IT, ...?",
    c: ["BUILD IT", "MAKES US", "DAFT", "PUNK"],
    a: "MAKES US"
},
{
    q: "HARDER, BETTER, FASTER, ...?",
    c: ["SMARTER", "STRONGER", "SMELLY", "DISCOVERY"],
    a: "STRONGER"
},
{
    q: "MORE THAN, HOUR, OUR, ...?",
    c: ["FLOWER", "NEVER", "INTERSTELLA", "5555"],
    a: "NEVER"
},
{
    q: "EVER, AFTER, WORK IS, ...?",
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
    document.getElementById("remaining").innerHTML = remaining;

    clock = setInterval(function() {
        remaining--;
        document.getElementById("remaining").innerHTML = remaining;

        if (remaining <= 0) {
            clearInterval(clock);
            allDone();
        }
    }, 1000);
    next()
}

function next() {
    question++

    if (question > questions.length - 1) {
        allDone();
        // return;
    }

    var theQuiz = questions[question].q

    for (i = 0; i < questions[question].c.length; i++) {
        var buttStuff ='<button onclick=\"[ANS]\">[CHOICE]</button>';
    }
}
  


function start() {


}

function answer() {

}