var question =document.querySelector(".question");
var options =document.querySelector(".options")
var option1 =document.querySelector(".option1");
var option2 =document.querySelector(".option2");
var option3 =document.querySelector(".option3");
var RightorWrong =document.querySelector("#CorIn");
var timer =document.querySelector("#timeNumber");
var scoreIs = document.querySelector('#scoreIs');
var initInput = document.querySelector('.input');
var submitBtn = document.querySelector('#Submit');

const Question1={
    questionC:"What are variables used for in JavaScript?",
    option1C:'For Changing a value’s data type.',
    option2C:'For Changing language settings.',
    option3C:'For storing or holding data.',
    CorrectO:3
};
const Question2={
    questionC:"Which of the following is an example of a single line comment?",
    option1C:'‘Is this a comment?’',
    option2C:'// Is this a Comment?',
    option3C:'Console.log(‘Is this a comment?’);',
    CorrectO:2
};
const Question3={
    questionC:"What is String Concatenation?",
    option1C:'When you assign a string to a variable. ',
    option2C:'When you change a variable’s Value.',
    option3C:'When you join strings together.',
    CorrectO:3
};
const Question4={
    questionC:"What is the correct way to call the ‘random’ method on the Math global object?",
    option1C:'Math.random()',
    option2C:'math.random()',
    option3C:'Math(random)',
    CorrectO:1
};
const Question5={
    questionC:"Which of the following statements are true?",
    option1C:'Objects store unordered data of any type as key-value pairs.',
    option2C:'Objects cant store other objects. ',
    option3C:'Objects only store strings ',
    CorrectO:1
};
var questionPool=[Question1,Question2,Question3,Question4,Question5];
var highScores=JSON.parse(localStorage.getItem('highScores'));
// from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
//Fisher-Yates Algorithm for shuffling array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var timeLeft= 10;
function Countdown(){
    console.log("CountdownFired")
    var timeInterval = setInterval(function () {
    timer.textContent=JSON.stringify(timeLeft);
    timeLeft--;
    if (timeLeft===-1){
        timer.textContent="0";
        clearInterval(timeInterval);
        console.log(timeLeft);
        console.log("areWeFiring?");
        question.textContent='Time is Up, Game Over';
        option1.setAttribute("class","options invisible");
        option2.setAttribute("class","options invisible");
        option3.setAttribute("class","options invisible");
        scoreIs.textContent="Your Final Score is: "+(timeLeft+1);
        initInput.setAttribute('class',"input visible");
        submitBtn.addEventListener('click',saveScore);
    }
    if(i>4){
        clearInterval(timeInterval);
    }
},1000);
}
function nextQuestion(){
    i++;
    if(i<=4){
    question.textContent=questionPool[i].questionC;
    option1.textContent=questionPool[i].option1C;
    option2.textContent=questionPool[i].option2C;
    option3.textContent=questionPool[i].option3C;
        }else{
            question.textContent='Thats the End'
            option1.setAttribute("class","options invisible");
            option2.setAttribute("class","options invisible");
            option3.setAttribute("class","options invisible");
            scoreIs.textContent="Your Final Score is: "+timeLeft;
            initInput.setAttribute('class',"input visible");
            submitBtn.addEventListener('click',saveScore);
        }
}
function validateAnswer(event){
    if(event.target.id==questionPool[i].CorrectO){
        console.log('you got this right');
        timeLeft+=5
        nextQuestion();
        RightorWrong.textContent="Correct!"
    }else{
        console.log('You got this Wrong');
        timeLeft-=5
        nextQuestion();
        RightorWrong.textContent="Incorrect!"
        }
}
function saveScore(){
    var initials = document.getElementById("initials");
    highScores[initials.value] = timeLeft+1;
    localStorage.setItem('highScores', JSON.stringify(highScores));
    initials.value=""
}


Countdown();
shuffle(questionPool);
var i=0;
question.textContent=questionPool[i].questionC
option1.textContent=questionPool[i].option1C
option2.textContent=questionPool[i].option2C
option3.textContent=questionPool[i].option3C
options.addEventListener('click',validateAnswer);
