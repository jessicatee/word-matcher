//English to german word pairs, english = [x,0], corresponding german = [x,1]
var wordPairs = [["cat", "katze"], ["dog", "hund"], ["mouse", "maus"], ["rabbit", "kaninchen"], ["bird", "vogel"]];
var highScore = 0;
var displayCurrentScore = document.getElementById("currentScore");
var displayHighScore = document.getElementById("highScore");

function newQuestion() {

	function generateQuestion() {

		for (var i = 0; i <= 5; i++)
		{
			// Start to create sentence
			var question = "Translate the ";

			// Pick written language
			language = Math.round(Math.random());

			if (language == 0) {
				question += "English word <strong>";
			} else {
				question += "German word <strong>";
			}

			// Pick word
			word = Math.floor((Math.random() * wordPairs.length));

			question += wordPairs[word][language] + "</strong>: ";

			document.getElementById("question").innerHTML = question;
		}

		

	}

	var language;
	var word;

	// Show input elements
	var userAnswer = document.getElementById("userAnswer");
	userAnswer.classList.toggle("hidden");
	document.getElementById("submitAnswer").classList.toggle("hidden");

	generateQuestion();

	document.getElementById("submitAnswer").addEventListener("click", function() {

		var currentScore = 0;
		var userinput = userAnswer.value;
		var scoreOutput = "";

		if (language == 0) {
			if (userinput == wordPairs[word][1]) {
				currentScore += 1;
				displayCurrentScore.innerHTML = currentScore;
			}
		} else {
			if (userinput == wordPairs[word][0]) {
				currentScore += 1;
				displayCurrentScore.innerHTML = currentScore;
			}
		}

		newQuestion();
	});


}

function newGame() {

	document.getElementById("startNew").style.display = "none";

	newQuestion();	

}

document.getElementById("startNew").addEventListener("click", newGame);

// ToDo
//
// Add proper gameplay loop
// Add feature to not ask same question twice
// Add score tracking
// 