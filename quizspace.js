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
    new Question("How Old is the Universe?", ["14 Million", "40 Million","14 Billion", "40 Billion"], "14 Billion"),
    new Question("Who invented the first Telescope?", ["Hans Lippershey", "Galileo Galilei", "Zacharias Janssen", "Lyman Spitzer,"], "Hans Lippershey"),
    new Question("There used to a Ninth planet,Pluto but now this is classed as...", ["Gas Planet", "Ice Planet", "Terestial Planet", "Dwarf Planet"], "Dwarf Planet"),
    new Question("Where are the oldest stars in the Milky way clustered.. ", ["Spiral Clusters","Giant Clusters","Minimal Clusters","Globular Clusters"], "Globular Clusters"),
    new Question("How far is the Proxima Centurai from earth ?", ["40 Million KM","40 Billion KM","40 Trillion KM","400 Million KM"], "40 Trillion"),
	new Question("How fast does Voyager 1 travel?", ["171 KMPS", "17.1 KMPS", "1.17 KMPS", "None of these"], "17.1 KMPS"),
	new Question("How long did it take Cassini-Huygens to reach Saturn?", ["8 Years", "9 Years", "6 Years", "7 Years"], "7 Years"),
	new Question("How many tests were needed for the engine that powered the first stage of Ariane 5 ?", ["30", "100", "300", "400"], "300"),
	new Question("How many Astronauts have walked on the moon ? ",[ "10", "11", "12","13"], "12"),
	new Question("How long does it take the orbiter to reach space?", ["10 Mins", "9 Mins", "8 Mins", "7 Mins"], "8 Mins"),
	new Question("How many human Beings have been sent into space ?", ["200", "300", "250", "400"], "400"),
	new Question("What is longest period an Astronaut has spent in the space?", ["10 Months", "12 Months", "14 Months", "16 Months"], "14 Months"),
	new Question("What was the first Artificial Satellite?", ["Sputnik 1", "Salyut 1", "Skylab", "Voyager 1"], "Sputnik 1"),
	new Question("Which Planet is the smallest in our Solar System?", ["Venus", "Mercury", "Pluto", "Mars"], "Mercury"),
	new Question("In Roman mythology,who was Mercury?", ["Receiver", "Messenger", "Transpoter", "Driver"], "Messenger"),
	new Question("Who is credited with discovering Jupiters largest moons?", ["Simon Marius", "Galileo Galilei", "Aryabhatta", "None of these"], "Galileo Galilei"),
	new Question("Which of these planets have rings ?", ["Jupiters", "Uranus", "Saturn", "All of these"], "All of these"),
	new Question("In Greek mythology, Who was Uranus ?", ["A hell", "A heaven", "A Bolder one", "A Cooler one"], "A heaven"),
	new Question("What does the word 'Comet' means ?", ["Long-tailed star", "Long-Showered star", "Long-haired star", "Long-Bodied star"], "Long-haired star"),
	new Question("how many languages are spoken on earth?", ["4000", "5000", "6000", "7000"], "7000")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();