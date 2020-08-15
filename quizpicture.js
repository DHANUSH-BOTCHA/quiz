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
    new Question("What sort of map shows just countries and their borders ?", ["Geographical Map", "Political Map", "World Map", "Lined Map"], "Political Map"),
	new Question("What's another name for Tropical Grasslands ?", ["Panama", "Savanna", "Conifer Forest", "Deciduous Forest"], "Savanna"),
	new Question("What is the deepest place in the world's ocean ?", ["Tentacle", "Kelp bed", "Mariana Trench", "Steep point"], "Mariana Trench"),
	new Question("What is hottest place in the USA ?", ["Hawaii", "Death Valley", "Deep Canyons", "Mesas"], "Death Valley"),
	new Question("Where is HOLLYWOOD ?", ["Los Angeles", "Washinton DC", "New York", "Texas"], "Los Angeles"),
	new Question("What Language do most Brazilans speak ?", ["Italic", "German", "English", "Portuguese"], "Portuguese"),
	new Question("What is Worlds second largest continent ?", ["Asia", "Africa", "Australia", "Antratica"], "Africa"),
	new Question("What does a Camel store in its hump ?", ["Food", "Water", "Fat", "Extra water"], "Fat"),
	new Question("What is a Finnish steam room called ?", ["A Sauna", "Lynx", "Lapland", "Scandinavia"], "A Sauna"),
	new Question("What is the name of Queens official residance in london ?", ["Edinburgh Castle", "Exter Palace", "Buckingham Palace", "Brighton Palace"], "Buckingham Palace"),
    new Question("What is another name for the Netherlands ?",["Ostends","Brussels","Holland","Arnhem"],"Holland"),
	new Question("How many people visit the Eiffel Tower each year ?",["6 Million","60 Million","4 Million","40 Million"],"6 Million"),
	new Question("Which city held the 1992 Olympic Games ?",["Rio-de-janeior","Tokyo","Barcelona","London"],"Barcelona"),
	new Question("What were the people who lived in ancient Italy called ?",["Vaticans","Venicens","Vikings","Romans"],"Romans"),
	new Question("What is the world's most expensive Caviar called ?",["Almas Caviar","Draniki Caviar","Borsht Caviar","Eggs Caviar"],"Almas Caviar"),
	new Question("What is Greece's most important crop ? ",["Grapes","Oranges","Water Melons","Olives"],"Olives"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();