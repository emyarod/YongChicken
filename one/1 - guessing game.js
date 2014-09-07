var states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
var answer = states[Math.floor(Math.random() * states.length)];
var guess = prompt("I'm thinking of a state in the USA. Can you guess what it is?");
for(i = 0; i < 6; i++) {
	if(guess.toUpperCase() === answer.toUpperCase()) {
		alert("gj");
	} else if(i < 5) {
		guess = prompt("Incorrect. You have " + (5 - i) + " tries remaining. I'm thinking of a state in the USA. Can you guess what it is?");
	} else if(i === 5) {
		alert("gg. The correct answer is " + answer);
	}
}