var currentQuestion = 0;

var questions = [
     {
        "question" : "Commonly used data types DO NOT include:", 
        "answers" : {
            "1" : "Strings",
            "2" : "Booleans",
            "3" : "Alerts",
            "4" : "Numbers"
        },
        "correctAnswer" : "answer3"
    } ,

    {
        "question" : "Arrays in Javascript can be used to store ____.", 
        "answers" : {
            "1" : "Numbers and strings",
            "2" : "Other arrays",
            "3" : "Booleans",
            "4" : "All of the above"
        },
        "correctAnswer" : "answer4"
    } ,

     {
        "question" : "String values must be enclosed within ____ when being assigned to variables.", 
        "answers" : {
            "1" : "Commas",
            "2" : "Curly Brackets",
            "3" : "Quotes",
            "4" : "Parentheses"
        },
        "correctAnswer" : "answer3"
    } ,

     {
        "question" : "A very useful tool used during development and debugging for printing content to the debugger is:", 
        "answers" : {
            "1" : "Javascript",
            "2" : "Terminal/Bash",
            "3" : "For loops",
            "4" : "Console log"
        },
        "correctAnswer" : "answer4"
    } ,

    {
        "question" : "The condition in an If/else statement is enclosed within ____.", 
        "answers" : {
            "1" : "Quotes",
            "2" : "Curly Brackets",
            "3" : "Parentheses",
            "4" : "Square Brackets"
        },
        "correctAnswer" : "answer3"
    } 
];

function choiceSelected(event) {
   var id = event.target.id;
   if (id === questions[currentQuestion].correctAnswer) {
    // Tell the user they got it correct
   } else {
       //user got it incorrect
   }
   currentQuestion++;
   populateQuestionAndAnswers();
    console.log(event);
};


function startQuiz() {
    $("#initialQuizInfo").replaceWith($("#questionAndAnswers"));
    populateQuestionAndAnswers();
    $("#questionAndAnswers").removeClass("hide");
};

function populateQuestionAndAnswers() {
$("#question").text(questions[currentQuestion].question);
$("#answer1").text(questions[currentQuestion].answers[1]);
$("#answer2").text(questions[currentQuestion].answers[2]);
$("#answer3").text(questions[currentQuestion].answers[3]);
$("#answer4").text(questions[currentQuestion].answers[4]);
}