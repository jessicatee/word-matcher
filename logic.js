var highScore = 0;
var currentScore = 0;
var questionBank = [];
var answers = [];

document.getElementById("startNew").addEventListener("click", newGame);

function buildQuestions(num) {

	var wordPairs = [["cat", "katze"], ["dog", "hund"], ["mouse", "maus"], ["rabbit", "kaninchen"], ["bird", "vogel"],
					["cow", "kuh"], ["sheep", "schaf"], ["pig", "schwein"], ["chicken", "huhn"]];

	// Builds a bank of questions
	do {
		var answer = "";
		var question = "Translate the ";

		// Pick word
		word = Math.floor((Math.random() * wordPairs.length));

		// Pick written language
		language = Math.round(Math.random());

		if (language == 0) {
			question += "English word <strong>";
			answer = wordPairs[word][1];
			answers.push(wordPairs[word][1]);
		} else {
			question += "German word <strong>";
			answer = wordPairs[word][0];
			answers.push(wordPairs[word][0]);
		}

		question += wordPairs[word][language] + "</strong>: ";

		questionBank.push([question, answer]);

	} while (questionBank.length < num);

	return questionBank;
}


function newGame() {

	questionBank = [];
	var word;
	var language;	

	buildQuestions(5);

	for (var i = 0; i < questionBank.length; i++) {
		userAnswer = prompt(questionBank[i][0]);

		if (userAnswer == questionBank[i][1]) {
			currentScore += 1;
			alert("That was correct!");
		} else {
			alert("Sorry, that was incorrect");
		}
	}

	alert("You got " + currentScore + " correct answers");

	if (currentScore > highScore) {
		highScore = currentScore;
	}

};
	
// Generate question set



// Loop through questions
// Update current score
// Compare to highscore
// 