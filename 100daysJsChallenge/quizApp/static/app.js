// create a quiz bank to hold questions, options and reference to the answer
let quizBank = [
    question1 = {
        content: "what is HTML?",
        options: ["A", "B", "C", "D", "E"],
        answer: 2
    },

    question2 = {
        content: "what is JS?",
        options: ["AA", "BA", "CA", "DA", "EA"],
        answer: 0

    },

    question3 = {
        content: "what is PASCAL?",
        options: ["AD", "BD", "CD", "DD", "ED"],
        answer: 4
    },

    question4 = {
        content: "what is COBOL?",
        options: ["ADA", "BDA", "CDA", "DDA", "EDA"],
        answer: 3
    },

    question5 = {
        content: "what is PHP?",
        options: ["AR", "BR", "CR", "DR", "ER"],
        answer: 1
    }


];

// creates variables to hold quizLength, questionId and score
let quizLength = quizBank.length;
let questionId = 0;
let score = 0;
let btns = [];
let options = ["A", "B", "C", "D", "E"];

document.addEventListener("onload", quiz());

function quiz() {
    if (questionId < 5) {
        // populate current question index in the quiz
        let questionCount = document.getElementById("questionCount");
        questionCount.innerText = `Question ${questionId + 1} of ${quizLength} `;

        // populate quizQuestion in the specified div
        let quizQuestion = document.getElementById("quizQuestion");
        quizQuestion.innerText = quizBank[questionId].content;

        // populate the quiz options in their respective div

        for (x = 0; x < 5; x++) {
            btns[x] = document.getElementById(`option${options[x]}`);
            btns[x].innerText = quizBank[questionId].options[x]

        }

    } else {
        document.getElementById("questionCount").style.display = "none";
        document.getElementById("quizQuestion").style.display = "none";
        document.getElementById("quizOptions").style.display = "none";
        document.getElementById("quizScore").style.display = "block";
        document.getElementById("restartQuiz").style.display = "block";
        document.getElementById("score").innerText = score;
        document.getElementById("quizLength").innerText = quizBank.length;
    }
}



function getGuess() {

    let btn = [];
    for (x = 0; x < 5; x++) {
        btn[x] = document.getElementById(`button${options[x]}`);

        btn[x].addEventListener("click", function () {
            if (checkButton(btn.indexOf(this)) == quizBank[questionId].answer) {
                score++
            }

            questionId++
            console.log("Next Question id " + questionId);
            console.log("current score is " + score);
            quiz()

        })


    }


}

function checkButton(button) {
    return button;
}

getGuess();
console.log(document.getElementById("restartQuiz"));
document.getElementById("restartQuiz").addEventListener("click", function () {
    questionId = 0;
    score = 0;
    document.getElementById("questionCount").style.display = "block";
    document.getElementById("quizQuestion").style.display = "block";
    document.getElementById("quizOptions").style.display = "block";
    document.getElementById("quizScore").style.display = "none";
    document.getElementById("restartQuiz").style.display = "none";
    quiz();
});





// btn[x].addEventListener("click", function () {
//     buttonsControl(this, x)
// }, false);


// for (x = 0; x < btn.length; x++){
//     btn[x].innerText += ` ${quizQuestions[x].options[x]}`;
// }

// ` ${quizquestions}`
























// Quiz Bank
// let quizBank = [
//     {
//         question: "what is HTML?",
//         options: ["A", "B", "C", "D", "E"],
//         answer: "B"
//     },

//     {
//         question: "what is JS?",
//         options: ["AA", "BA", "CA", "DA", "EA"],
//         answer: "C"

//     },

//     {
//         question: "what is PASCAL?",
//         options: ["AD", "BD", "CD", "DD", "ED"],
//         answer: "C"
//     },

//     {
//         question: "what is COBOL?",
//         options: ["ADA", "BDA", "CDA", "DDA", "EDA"],
//         answer: "A"
//     },

//     {
//         question: "what is PHP?",
//         options: ["AR", "BR", "CR", "DR", "ER"],
//         answer: "E"
//     },

// ];

// class Quiz{
//     constructor({question}) {
//         this.question = question.question;
//         this.options = question.options;
//         this.answer = question.answer;
//         this.score = 0;
//         this.questionIndex = 0;
//         this.questions = question[this.question];
//     }

//     displayQuestion() {
//         // Displays Progress
//         questionCount.innerText = `Question ${this.questionIndex + 1} of ${quizBank.length} `;

//         // Displays Question
//         quizQuestion.innerText = content;



//         // create an array to store all options btn element
//         let optionsBtns = [];

//         // create an array to store all options span element
//         let optionsSpan = [];

//         // populate the optionsSpan and optionsBtn arrays with their respective html elements
//         for (x = 0; x < options.length; x++) {
//             optionsSpan[x] = document.getElementById("option" + options[x]);
//             optionsBtns[x] = document.getElementById("button" + options[x])
//         }

//         // displays the respective options into their html elements
//         for (x = 0; x < options.length; x++) {
//             optionsSpan[x].innerText = options[x];
//         }

//     }


// }

// let newQuiz = new Quiz(quizBank[0]);

// console.log(newQuiz);
// // let quizStart = new Quiz()


// // class Question {

// //     constructor({ question, options, answer }) {
//         // this.question = question;
//         // this.options = options;
//         // this.answer = answer;
// //     }

// // }



// // let questionX = new Question(quizBank[0]);
// // console.log(questionX);

// // function initializeQuiz(question) {
// //     let content = question.content;
// //     let options = question.options;
// //     let answer = question.answer;
// //     let score = 0;
// //     let questionIndex = 0;

// //     console.log();

// // }

// // function displayQuestion() {
// //     // Displays Progress
// //     questionCount.innerText = `Question ${questionIndex + 1} of ${quizBank.length} `;

// //     // Displays Question
// //     quizQuestion.innerText = content;



// //     // create an array to store all options btn element
// //     let optionsBtns = [];

// //     // create an array to store all options span element
// //     let optionsSpan = [];

// //     // populate the optionsSpan and optionsBtn arrays with their respective html elements
// //     for (x = 0; x < options.length; x++) {
// //         optionsSpan[x] = document.getElementById("option" + options[x]);
// //         optionsBtns[x] = document.getElementById("button" + options[x])
// //     }

// //     // displays the respective options into their html elements
// //     for (x = 0; x < options.length; x++) {
// //         optionsSpan[x].innerText = options[x];
// //     }

// // }


// // initializeQuiz(quizBank[0]);








