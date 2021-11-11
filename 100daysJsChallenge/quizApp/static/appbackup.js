// CREATE QUIZ CLASS
let quizBank = [
    question1 = {
        text: "what is HTML?",
        options: ["A", "B", "C", "D", "E"],
        answer: "B"
    },

    question2 = {
        text: "what is JS?",
        options: ["AA", "BA", "CA", "DA", "EA"],
        answer: "AA"

    },

    question3 = {
        text: "what is PASCAL?",
        options: ["AD", "BD", "CD", "DD", "ED"],
        answer: "ED"
    },

    question4 = {
        text: "what is COBOL?",
        options: ["ADA", "BDA", "CDA", "DDA", "EDA"],
        answer: "CDA"
    },

    question5 = {
        text: "what is PHP?",
        options: ["AR", "BR", "CR", "DR", "ER"],
        answer: "AR"
    }


];



class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

}


// CREATE QUESTION CLASS
class Question {
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
    }

    isCorrectAnswer(option) {
        return this.answer === option;
    }
}


// DISPLAY QUESTIONS
function displayQuestion() {
    if (quiz.isEnded) {
        showScores();
    } else {
        // populate quizQuestion in the specified div
        let quizQuestion = document.getElementById("quizQuestion");
        quizQuestion.innerText = quiz.getQuestionIndex().text;

        // populate the quiz options in their respective div
        let btnTag = ["A", "B", "C", "D", "E"];
        let options = quiz.getQuestionIndex().options;
        for (x = 0; x < 5; x++) {
            btns[x] = document.getElementById(`option${options[x]}`);
            btns[x].innerText = options[x];
            guess("button" + btnTag[x], options[x]);
        }

    }
}