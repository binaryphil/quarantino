const question = require('./interface');

class Game {
	constructor (day, protagonist, actors) {
		this.day = day;
		this.protagonist = protagonist;
		this.actors = actors;
		this.dialogue = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})
	}

	newTurn() {
		this.day.next_day();
		this.describe_day();
		this.describe_room();
	}

	describeDay() {
		console.log(day.description());
	}
	
	descibeRoom() {
		console.log('This is what you see inside the room:\n');
		this.actors.forEach(function(actor, index, array) {
			console.log("{index}. {actor.description}\n");
		});
	}
	
	playerAction() {
	}

	chooseActor() {
		var index;
		var question = "Who do you want to interact with?"
		var answer_text = "So this is your choice!"

		question(question, answer_text).then(answer => {
			index = answer;
		});

		return index;
	}

	chooseAction() {
		var index;
		var question = "How will you choose to act?"
		var answer_text = "So this is your choice!"

		question(question, answer_text).then(answer => {
			index = answer;
		});

		return index;
	}

}

module.exports = Game
