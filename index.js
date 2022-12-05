var readlineSync = require('readline-sync');
var score = 0;

var highScores = [
	{
		name: "Deepak Choudhary",
		score: 5,
	}
]


var questions = [
	{
		question: "1. Who is the villain in Guardians of the Galaxy: Vol 1?",
		options: [
			"a. Thanos",
			"b. Ronan The Accuser",
			"c. Obidiah Stane",
			"d. Yondu Udonta"
		],
		answer: "b",
	},
	{
		question: "2. What type of scientist is Jane Foster in Thor? ",
		options: [
			"a. Astronomer",
			"b. Biologist",
			"c. Chemist",
			"d. Dioptrics"
		],
		answer: "a",
	},
	{
		question: "3. What does S.H.I.E.L.D stand for? ",
		options: [
			"a. Space Human Investigation on Energy, Light and Deities.",
			"b. Strategic Hero Intervention, Enforcement and Logistics Division",
			"c. Strategic Homeland Intervention, Enforcement and Logistics Division",
			"d. Stones Hidden In Extraterrestrial Lands and Demographics"
		],
		answer: "c",
	},
	{
		question: "4. What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series? ",
		options: [
			"a. A tank with “Infinity” written on it",
			"b. A helicopter with “Thanos” written on the side",
			"c. A car with “perfectly balanced” on the side",
			"d. A motorbike with “Titan” on the side"
		],
		answer: "b",
	},
	{
		question: "5. Ryan Reynolds acted in two Marvel movie series, one was the Deadpool movie series, the other was: ",
		options: [
			"a. Daredevil",
			"b. Captain America: Winter Soldier",
			"c. Blade",
			"d. Guardians of the galaxy"
		],
		answer: "c",
	},
  {
		question: "6. In which order are the Infinity Stones revealed in the Marvel Cinematic Universe? ",
		options: [
			"a. Time Stone, Space Stone, Power Stone, Soul Stone, Reality Stone and Mind Stone",
			"b. Power Stone, Reality Stone, Time Stone, Space Stone, Mind Stone and Soul Stone",
			"c. Reality Stone, Time Stone, Mind Stone, Soul Stone, Power Stone and Space Stone",
			"d. Space Stone, Mind Stone, Reality Stone, Power Stone, Time Stone and Soul Stone"
		],
		answer: "d",
	},
  {
		question: "7. During which war did Captain America get his superhuman abilities? ",
		options: [
			"a. Civil War",
			"b. World War I",
			"c. Worlds War II",
			"d. The Cold War"
		],
		answer: "c",
	},
]


function welcome() {
	var user = readlineSync.question("What is your name ? \n");

	console.log(`Welcome to MARVEL quiz ${user}.`);
}


function play(question,options, answer) {
	console.log(question);

	console.log("\nOptions:\n");
	for(let i =0; i< options.length; i++){
		console.log(options[i]);
	}

	var userAns = readlineSync.question("\nEnter your answer ");
	console.log(`you entered ${userAns}`);

	if (userAns.toUpperCase() == answer.toUpperCase()) {
		console.log("You're right");
		score = score + 1;
	} else {
		console.log("You're wrong");
	}
	console.log(`SCORE: ${score}`);
}



function game() {
	for (let i = 0; i < questions.length; i++) {
		let currentQuestion = questions[i];
		console.log(`\nQuestion ${i + 1}:\n----`)
		play(currentQuestion.question,currentQuestion.options, currentQuestion.answer)
	}
}



function checkHighScore() {
	if (score > 0) {
		console.log(`\nYou scored ${score}`);
	} else if (score === 0) {
		console.log(`\nYou scored ${score}. Its ok that you don't know.`);
	}
	else {
		console.log(`\nYou scored ${score}`);
	}
	for (let i = 0; i < highScores.length; i++) {
		let currentScore = highScores[i];
		if (score > currentScore.score) {
			console.log(`Congratulations You made a highscore. You have beaten ${currentScore.name} by ${score - currentScore.score} `)
			console.log('You can send me a screenshot to get your score to be added to the highscore list.')
		}
	}
}

welcome();
game();
checkHighScore();
