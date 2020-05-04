const readlineSync = require('readline-sync');

function askQuestion(question) {
	let	answer = readlineSync.question(question);
  return answer;
}

module.exports = askQuestion;
