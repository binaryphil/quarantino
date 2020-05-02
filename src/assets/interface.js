const readline = require('readline');

function askQuestion(question, answer_text) {
	return new Promise(function(resolve, reject) {    
		const rl = readline.createInterface({
			input:  process.stdin,
			output: process.stdout
		});
		rl.question(question, (answer) => {
			resolve(answer);
			console.log(answer_text, answer);
			rl.close();
		});
	});   
}

module.exports = askQuestion;
