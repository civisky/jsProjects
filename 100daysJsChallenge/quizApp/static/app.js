let quizBank = [
    question1 = {
        content: "what is HTML?",
        options: ["A", "B", "C", "D", "E"],
        answer: "B"
    },

    question2 = {
        content: "what is JS?",
        options: ["AA", "BA", "CA", "DA", "EA"],
        answer: "DA"

    },

    question3 = {
        content: "what is PASCAL?",
        options: ["AD", "BD", "CD", "DD", "ED"],
        answer: "CD"
    },

    question4 = {
        content: "what is COBOL?",
        options: ["ADA", "BDA", "CDA", "DDA", "EDA"],
        answer: "ADA"
    },

    question5 = {
        content: "what is PHP?",
        options: ["AR", "BR", "CR", "DR", "ER"],
        answer: "ER"
    }


];
let options = ["A", "B", "C", "D", "E"];
let btns = [];
for (x = 0; x < 5; x++) {
    btns[x] = document.getElementById(`option${options[x]}`);
}

let quizLength = quizBank.length;
let questionId = 0;
let questionCount = document.getElementById("questionCount");
questionCount.innerText = `Question ${questionId + 1} of ${quizLength} `;

let quizQuestion = document.getElementById("quizQuestion");
quizQuestion.innerText = quizBank[0].content;


for (x = 0; x < quizOptions.length; x++) {


}



// for (x = 0; x < btn.length; x++){
//     btn[x].innerText += ` ${quizQuestions[x].options[x]}`;
// }

// ` ${quizquestions}`
console.log();


