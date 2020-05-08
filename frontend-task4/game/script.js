//storing questions as an object in an array
let questions =[
    {
        question: "The OSI Reference model is made up of how many layers?",
        option1: 4,
        option2: 3,
        option3: 6,
        option4: 7,
        answer: "option4"
    },
    {
        question: "Router operates in which layer of OSI Reference Model?",
        option1: "Physical Layer",
        option2: "Network Layer",
        option3: "Transport Layer",
        option4: "Application Layer",
        answer: "option2"
    },
    {
        question: "The Internet is an example of",
        option1: "Cell switched network",
        option2: "circuit switched network",
        option3: "Packet switched network",
        option4: "All of above",
        answer: "option3"
    },
    {
        question: "What does DMA stand for?",
        option1: "Distinct Memory Access",
        option2: "Direct Memory Access",
        option3: "Direct Module Access",
        option4: "Direct Memory Allocation",
        answer: "option2"
    },
    {
        question: "VGA is?",
        option1: "Video Graphics Array",
        option2: "Visual Graphics Array",
        option3: "Volatile Graphics Array",
        option4: "Video Graphics Adapter",
        answer: "option1"
    }
]

//selecting elements from the html file
let options = Array.from(document.querySelectorAll(".opt"));
let main_question = document.querySelector(".main_question");
let nextQuestion = document.querySelector(".nextQuestion");
let questionNumberDisplay = document.querySelector(".questionNumberDisplay");
let scorePoints = document.querySelector(".score_points");
let optionDiv = document.querySelector("option");
let username = document.querySelector(".username");

username.innerHTML = localStorage.getItem("username");

//declarations
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let maximumQuestion = 5;
let point = 1;


//function to begin the game 

function startGame(){
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions];
    localStorage.setItem("maxQuestion", maximumQuestion);
    getNewQuestion();
}

//this function get new question
function getNewQuestion() {
    localStorage.setItem("finalScore", score);
    nextQuestion.style.display = "none";
    if (availableQuestions == 0 || questionCounter > maximumQuestion){
        return window.location.assign("../end-game/end.html");
    }

    questionCounter++;

    questionNumberDisplay.innerHTML = `Question ${questionCounter} / ${maximumQuestion}`;

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    main_question.innerHTML = currentQuestion.question;

    options.forEach( option => {
        let number = option.dataset["number"];
        option.innerHTML = currentQuestion["option" + number];
    })
    availableQuestions.splice(questionIndex, 1);
}

//answering questions and checking if it is correct or not
options.forEach(option => {
    option.addEventListener("click", ()=>{
        nextQuestion.style.display = "block";
        if(option.innerHTML == currentQuestion[currentQuestion.answer]){
            option.parentElement.classList.add("correct");
            option.classList.add("white-text");
            pointsCounter(point);
        }
        else{
            option.parentElement.classList.add("wrong");
            option.classList.add("white-text");
        }
        options.forEach(option => {
            
            option.parentElement.classList.add("disable");
            if(option.innerHTML == currentQuestion[currentQuestion.answer]){
                option.parentElement.classList.add("correct")
                option.classList.add("white-text");
            }
        })
    })
})

//removing and adding backgrounds to the options and navigating to the next question
function next(){
    nextQuestion.addEventListener("click", ()=>{
        
                
        options.forEach(opt => {
            opt.parentElement.classList.remove("correct");
            opt.parentElement.classList.remove("wrong");
            opt.classList.remove("white-text");
            opt.parentElement.classList.remove("disable");
        })
        

        getNewQuestion();
    })
}

next();

//calculates the number of correct answers
pointsCounter = pt => {
    score += pt;
    scorePoints.innerHTML = score;
}


startGame();