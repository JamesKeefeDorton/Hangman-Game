$(document).ready(function() {
	var wordBank = ["SADDAM HUSSEIN", "ADOLF EICHMANN", "HIDEKI TOJO", "NED KELLY", "JOHN BROWN", "NATHAN HALE", "CAPTAIN KIDD"];
	var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	var currentAnswer = [];
	var incorrectLetters = [];
	document.onkeyup = function() {keyPress(event)};
	function keyPress(evt) {
		var x = evt.charCode || evt.keyCode;
		var y = String.fromCharCode(x);
		var correct = false;
		for (var i = 0; i < chosenWord.length; i++) {
			if (y === chosenWord[i]) {
				currentAnswer[i] = chosenWord[i];
				correct = true;
			}
		}
		if (correct === false) {
			incorrectLetters.push(y);
		}
		updateBoard();
	}
	function updateBoard() {
		$("#word-box").empty();
		for (var j = 0; j < currentAnswer.length; j++) {
			if (currentAnswer[j] === " ") {
				$("#word-box").append("<br>");
			} else {
				$("#word-box").append(currentAnswer[j] + " ");
			}
		}
		$("#incorrect-box").empty();
		for (var k = 0; k < incorrectLetters.length; k++) {
			$("#incorrect-box").append(incorrectLetters[k] + ", ")
		}
	}
	for (var l = 0; l < chosenWord.length; l++) {
		if (chosenWord[l] === " ") {
			currentAnswer[l] = " ";
		} else {
			currentAnswer[l] = "_";
		}
	}
	updateBoard();
});