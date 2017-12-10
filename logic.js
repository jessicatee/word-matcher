var highScore = 0;
var currentScore = 0;
var questionBank = [];
var answers = [];

document.getElementById("startNew").addEventListener("click", newGame);

function buildQuestions(num) {

	function findAnswer(element) {
  		return element == answer;
	};

	var wordPairs = [["cat", "katze"], ["dog", "hund"], ["mouse", "maus"], ["rabbit", "kaninchen"], ["bird", "vogel"],
					["cow", "kuh"], ["sheep", "schaf"], ["pig", "schwein"], ["chicken", "huhn"]];

	// Builds a bank of questions, avoiding duplicates
	do {

		var answers = [];
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

		//if (answers.findIndex(findAnswer) >= 0) {
		//	answers.pop();
		//} else {
		//	questionBank.push([question, answer]);
		//}

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

};
	
// Generate question set



// Loop through questions
// Update current score
// Compare to highscore
// 