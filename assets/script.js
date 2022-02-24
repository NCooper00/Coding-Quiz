var timeLeft = 60;

var score = 0;

const highScores = document.querySelector('.highScores');

var questions = [
    "How many planets are in our solar system?",
    "Which is bigger, the Earth or the Moon?",
    "How many people have been on the Moon?",
    "Which is hotter, Pluto or the Sun?",
    "Are you heavier on Earth or the Moon?"
]
console.log(questions[0]);

var answers0 = [
    "A: 20",
    "B: 9",
    "C: 3",
    "D: 8"
]

var answers1 = [
    "A: Earth",
    "B: Moon",
    "C: Same",
    "D: Moon isn't real"
]

var answers2 = [
    "A: 0",
    "B: 20",
    "C: 12",
    "D: 4"
]

var answers3 = [
    "A: Pluto",
    "B: Same",
    "C: Sun",
    "D: Me"
]

var answers4 = [
    "A: Same weight",
    "B: Earth",
    "C: Moon",
    "D: Mars"
]

const answers = document.querySelectorAll('.answers');

for (i=0; i<answers.length; i++) {
    answers[i].addEventListener('click', (event) => {
        for (e=0; e<answers.length; e++) {
            answers[e].setAttribute('aria-enabled', false);
        }
        var answerStat = event.currentTarget.getAttribute('aria-enabled');
        if (answerStat === "false") {
            event.currentTarget.setAttribute('aria-enabled', true);
        }
    })
}

var current = 0;

const start = document.querySelector('.startButton');
const next = document.querySelector('.next');

const answerSection = document.querySelector('.answerSection');


start.addEventListener('click', () => {
    highScores.setAttribute('data-visible', false);
    start.style.display = "none";
    timeLeft = 60;
    current = 0;
    document.querySelector('.quizQuestion').textContent = questions[0];
    document.querySelector('.one').textContent = answers0[0];
    document.querySelector('.two').textContent = answers0[1];
    document.querySelector('.three').textContent = answers0[2];
    document.querySelector('.four').textContent = answers0[3];
    startTimer();
});

// var one = document.querySelector('.one').getAttribute('aria-enabled');
// var two = document.querySelector('.two').getAttribute('aria-enabled');
// var three = document.querySelector('.three').getAttribute('aria-enabled');
// var four = document.querySelector('.four').getAttribute('aria-enabled');

function updateQuestion() {
if (current === 1) {
    document.querySelector('.quizQuestion').textContent = questions[current];
        document.querySelector('.one').textContent = answers1[0];
        document.querySelector('.two').textContent = answers1[1];
        document.querySelector('.three').textContent = answers1[2];
        document.querySelector('.four').textContent = answers1[3];
} else if (current === 2) {
    document.querySelector('.quizQuestion').textContent = questions[current];
        document.querySelector('.one').textContent = answers2[0];
        document.querySelector('.two').textContent = answers2[1];
        document.querySelector('.three').textContent = answers2[2];
        document.querySelector('.four').textContent = answers2[3];
} else if (current === 3) {
    document.querySelector('.quizQuestion').textContent = questions[current];
        document.querySelector('.one').textContent = answers3[0];
        document.querySelector('.two').textContent = answers3[1];
        document.querySelector('.three').textContent = answers3[2];
        document.querySelector('.four').textContent = answers3[3];
} else if (current === 4) {
    document.querySelector('.quizQuestion').textContent = questions[current];
        document.querySelector('.one').textContent = answers4[0];
        document.querySelector('.two').textContent = answers4[1];
        document.querySelector('.three').textContent = answers4[2];
        document.querySelector('.four').textContent = answers4[3];
} else {
    gameOVER();
}
}


next.addEventListener('click', () => {
    if (current === 0) {
        var one = document.querySelector('.one').getAttribute('aria-enabled');
        var two = document.querySelector('.two').getAttribute('aria-enabled');
        var three = document.querySelector('.three').getAttribute('aria-enabled');
        var four = document.querySelector('.four').getAttribute('aria-enabled');
        if (four === "true") {
            // timeLeft += 10;
            score++;
        } else {
            timeLeft -= 10;
        }
        current++;
        updateQuestion();
    } else if (current === 1) {
        var one = document.querySelector('.one').getAttribute('aria-enabled');
        var two = document.querySelector('.two').getAttribute('aria-enabled');
        var three = document.querySelector('.three').getAttribute('aria-enabled');
        var four = document.querySelector('.four').getAttribute('aria-enabled');

        if (one === "true") {
            // timeLeft += 10;
            score++;
        } else {
            timeLeft -= 10;
        }
        current++;
        updateQuestion();
    } else if (current === 2) {
        var one = document.querySelector('.one').getAttribute('aria-enabled');
        var two = document.querySelector('.two').getAttribute('aria-enabled');
        var three = document.querySelector('.three').getAttribute('aria-enabled');
        var four = document.querySelector('.four').getAttribute('aria-enabled');

        if (three === "true") {
            // timeLeft += 10;
            score++;
        } else {
            timeLeft -= 10;
        }
        current++;
        updateQuestion();
    } else if (current === 3) {
        var one = document.querySelector('.one').getAttribute('aria-enabled');
        var two = document.querySelector('.two').getAttribute('aria-enabled');
        var three = document.querySelector('.three').getAttribute('aria-enabled');
        var four = document.querySelector('.four').getAttribute('aria-enabled');
        
        if (three === "true") {
            // timeLeft += 10;
            score++;
        } else {
            timeLeft -= 10;
        }
        current++;
        next.textContent="Submit";
        next.setAttribute('onclick', "gameOVER()");
        updateQuestion();
    } else if (current === 4) {
        var one = document.querySelector('.one').getAttribute('aria-enabled');
        var two = document.querySelector('.two').getAttribute('aria-enabled');
        var three = document.querySelector('.three').getAttribute('aria-enabled');
        var four = document.querySelector('.four').getAttribute('aria-enabled');
    
        if (two === "true") {
            // timeLeft += 10;
            score++;
        } else {
            timeLeft -= 10;
        }
        current++;
    } else {
        gameOVER();
    }
});


const timer = document.querySelector('.timer');
function startTimer() {
    var quizTimer = setInterval(function() {
        if(timeLeft < 0){
            clearInterval(quizTimer);
            gameOVER();
        } else {
            if (timeLeft > 59) {
                timer.textContent = "Time Left: 1:00";
                timeLeft -= 1;
            } else if (timeLeft >= 10 && timeLeft < 60) {
                timer.textContent = "Time Left: 0:" + timeLeft;
                timeLeft -= 1;
            } else if (timeLeft < 10) {
                timer.textContent = "Time Left: 0:0" + timeLeft;
                timeLeft -= 1;
            } else if (timeLeft < 0) {
                timer.textContent = "Time Left: 0:00";
            } 
        } 
    }, 1000);
}
const lastScore = document.querySelector('.lastScore');

function gameOVER() {
    highScores.setAttribute('data-visible', true);
    start.style.display = "flex";

    lastScore.textContent = "Your Score: " + score;

    console.log(score);
    console.log(timeLeft);
}

const HSreturn = document.querySelector('.return');
const viewHS = document.querySelector('.highscore-button');

HSreturn.addEventListener('click', () => {
    highScores.setAttribute('data-visible', false);
    timeLeft = 60;
});

viewHS.addEventListener('click', () => {
    highScores.setAttribute('data-visible', true);
});

const save = document.querySelector('.save');

const HSSection = document.querySelector('.highscoreSection');
const input = document.querySelector('.initials');

save.addEventListener('click', () => {
    const h2 = document.createElement('h2');
    const text = input.value + ": " + score + " points!";
    h2.textContent = text;
    HSSection.appendChild(h2);
});