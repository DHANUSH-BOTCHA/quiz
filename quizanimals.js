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
    new Question("Which Mammal lives the longest?", ["Elephant", "Two-toed sloth","Humans", "Mongolian Gerlib"], "Humans"),
	new Question("Which are longer, Monkeys arms or legs?", ["Arms", "Legs","Both are same", "None of these"], "Arms"),
	new Question("Why do cats have whiskers?", ["To sense prey", "To sense enemies","To find the way in dark", "All of these"], "To find the way in dark"),
	new Question("What is the tail of the fox called ...?", ["Cleaner", "Brush","Comb", "wooly fur"], "Brush"),
	new Question("Which Bear makes nests in trees ?", ["Spectacled Bear", "Giant Panda","Sloth Bear", "Sun Bear"], "Sun Bear"),
	new Question("What are rabbit babies called ...", ["Penny", "Cubs","Kittens", "rabbies"], "Kittens"),
	new Question("Which are bigger, Wallabies or Kangaroos?", ["Wallabies", "Kangaroos","Both are same", "None of these"], "Kangaroos"),
	new Question("How much can a camel drink at one time ?", ["8 Buckets", "7 Buckets","9 Buckets", "10 Buckets"], "9 Buckets"),
	new Question("What makes the loudest Noise on earth ?", ["Dolphin", "Blue Whale","Elephant", "Baleen Whales"], "Blue Whale"),
	new Question("Which bird has the most feathers ?", ["Buzzard", "Turkey","kiwi", "Whistling Swan"], "Whistling Swan"),
	new Question("In which season do birds start courting ?", ["Autumn ", "Mild summer","Spring", "Mild Rainy"], "Spring"),
	new Question("Which birds are able to tie knots ?", ["Weaver", "Humming","Kiwi", "Cranes"], "Weaver"),
	new Question("Which bird builds the biggest nests in the world ?", ["Wren bird", "Weaver bird","Blad Eagle", "Wood pecker"], "Blad Eagle"),
	new Question("Where in the world, birds only can survive ?", ["Artic", "Antartica","Alaska", "Ice land"], "Antartica"),
	new Question("What are baby swans called ?", ["Flamingos", "heron","Watted Jacana", "Cygnets"], "Cygnets"),
	new Question("How long can birds survive without returning to land ?", ["1 year", "3 years","5 years", "6 years"], "5 years"),
	new Question("How long can penguin stay underwater ?", ["15 mins", "20 mins","25 mins", "18 mins"], "20 mins"),
	new Question("Which is the fastest bird of prey ?", ["Swift", "Secretary Bird"," Hawk eagle", "Peregrine Falcon"], "Peregrine Falcon"),
	new Question("Where do budgerigars live in the world ?", ["Africa", "China","Australia", "California"], "Australia"),
	new Question("Which is the biggest butterfly in the world?", [" Eighty-eight butterfly", "Purple Emperor Butterfly","Queen Alexandea's Birdwing", "Red Glider Butterfly"], "Queen Alexandea's Birdwing")
    
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();