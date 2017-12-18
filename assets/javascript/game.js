$(document).ready(function() {
	var wordBank = ["SADDAM HUSSEIN", "ADOLF EICHMANN", "HIDEKI TOJO", "NED KELLY", "JOHN BROWN", "NATHAN HALE", "CAPTAIN KIDD"];
	var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	var currentAnswer = [];
	document.onkeyup = function() {keyPress(event)};
	function keyPress(evt) {
		var x = evt.charCode || evt.keyCode;
		console.log(x);
		var y = String.fromCharCode(x);
		console.log(y);
		var correct = false;
		for (var i = 0; i < chosenWord.length; i++) {
			if (y === chosenWord[i]) {
				currentAnswer[i] = chosenWord[i];
				updateBoard();
				correct = true;
			}
		}
		if (correct = false) {
			//
		}
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
	}
	for (var k = 0; k < chosenWord.length; k++) {
		if (chosenWord[k] === " ") {
			currentAnswer[k] = " ";
		} else {
			currentAnswer[k] = "_";
		}
	}
	updateBoard();
});