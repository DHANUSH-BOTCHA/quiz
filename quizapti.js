//code By Dhanush
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What should be added to 11210 make it exactly divisible by 11 ?", ["1", "4","9", "10"], "10"),
	new Question("The average age of 12 children is 20 years. Is the age of one more child is added,the average decreases by  1. What is the age of the child added later ?", ["5", "7","19", "NOne of these."], "7"),
	new Question("A can do a piece of work in 15 days, but with the help of B finishes the work in 10 days. The share of A out of a wage of Rs 120 is ?", ["30 Rs", "50 Rs","80 Rs", "120 Rs"], "80 Rs"),
	new Question("The average age of four members of a family is 20 Years, if Grand Father is also added the average increases by 9. What is age of the Grand Father ?", ["56", "65","72", "80"], "65"),
	new Question("What is the 10th term of the sequence AP whose first term is 5 and common difference is 3 ?", ["30", "31","32", "33"], "32"),
	new Question(" letter number series  (D-4,F-6,H-8,J-10,?,?)..", ["L-12,N-14", "K-12,M-13","L-12,M-4", "K-12,M-14"], "L-12,N-14"),
	new Question("What's next (z,u,q,?,l)", ["i", "k","m", "n"], "n"),
	new Question("What is the next term (DF,GJ,KM,NQ,RT,?)", ["UW", "YZ","XZ", "UX"], "UX"),
	new Question("BMX,DNW,FOU,?", ["GHO", "GPS","HPS", "HPT"], "HPT"),
	new Question("DHL,PTX,BFJ,?", ["CGK", "KOS","NRV", "RVZ"], "RVZ")
	
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();