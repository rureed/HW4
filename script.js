var questions = [{
    title: "WORK IT, MAKE IT, DO IT, ...?",
    choices: ["BUILD IT", "MAKES US", "DAFT", "PUNK"],
    answer: "MAKES US"
},
{
    title: "HARDER, BETTER, FASTER, ...?",
    choices: ["SMARTER", "STRONGER", "SMELLY", "DISCOVERY"],
    answer: "STRONGER"
},
{
    title: "MORE THAN, HOUR, OUR, ...?",
    choices: ["FLOWER", "NEVER", "INTERSTELLA", "5555"],
    answer: "NEVER"
},
{
    title: "EVER, AFTER, WORK IS, ...?",
    choices: ["HELMETS", "OVER", "THOMAS", "GUY-MANUEL"],
    answer: "OVER"
},
{
    title: "Work it harder, make it better, do it faster, makes us stronger, more than ever, hour after, our work is ...?",
    choices: ["always coding", "never over", "one more time", "TRON"],
    answer: "never over"
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