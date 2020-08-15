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
    new Question("What is the world's largest 'Bear'?", ["Polar Bear", "Asian black Bear","Sloth Bear", "Pizzly Bear"], "Polar Bear"),
    new Question("What name is given to forest that are found near the equator?", ["Deciduous Forests", "Coniferous Forests", "Tropical Rainforests", "Mediterranean Forests"], "Tropical Rainforests"),
    new Question("Why do squirrels have Bushy tails?", ["To swing", "To balance", "To collect food", "To leeps from Tree to Tree"], "To balance"),
    new Question("What is the world's biggest 'Deer' ?", ["Sambar Deer", "The Moose", "Fallow Deer", "Mule Deer"], "The Moose"),
    new Question("How big is the biggest 'Fungus' in the world(as size)?", ["More than 500 cricket pitches", "More than 1,600 football pitches", "More than 5 cricket pitches ", "More than 16 football pitches"], "More than 1,600 football pitches"),
	new Question("How much height a 'Web-Frog' can fly?", ["1 Mt", "5 Mt", "10 Mt", "15 Mt"], "15Mt"),
	new Question("How old are the BaoBab Trees?", ["300 years", "1000years", "3000 years", "5000 years"], "3000 years"),
	new Question("How many feets can a 'Ostriche' grow?", ["12 ft", "11 ft", "10ft", "9ft"], "9ft"),
	new Question("'Hyenas' are more closely related to-- ",[ "Dogs", "Panthers", "Cats","Cheethas"], "Cats"),
	new Question("What animals name in African 'Varks' means?", ["Horse", "Pig", "Cat", "Donkey"], "Pig"),
	new Question("How many eggs will an African queen termite produce in her life time?", ["650 thousand", "650 lakhs", "650 million", "650 billion"], "650 million"),
	new Question("How long a slow worm will live (in years)?", ["10", "30", "50", "70"], "50"),
	new Question("How tall is the Tallest Cactus on record?", ["60 ft", "57 ft", "63 ft", "66 ft"], "63 ft"),
	new Question("What do you call a camel with one hump?", ["Bacterian Camel", "Dromedary", "Hybrid Camel", "Cama"], "Dromedary"),
	new Question("By what names Mountain Lions are known?", ["Puma", "Cougar", "Panther", "All"], "All"),
	new Question("How high is the Mount Everst?", ["28,000 ft", "30,000 ft", "29,000 ft", "31,000 ft"], "29,000 ft"),
	new Question("Which is the worlds longest river?", ["Bhramaputra", "Nile", "Yangtze", "Amazon River"], "Nile"),
	new Question("Which is the worlds largest fresh-Water lake ?", ["Baikal", "Tanganyika", "Caspian", "Superior"], "Superior"),
	new Question("In the past what plant could have been used for dressing wounds?", ["Sphagnum", "Marshes", "Wildparadise", "Rafflisia"], "Sphagnum"),
	new Question("Which creature has the longest life recorded in history on Earth?", ["American Alligators", "Jelly fish", "Artic Whale", "Bowhead Whale"], "Jelly fish")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();