const question = require('./interface');

class Game {
	constructor (room, protagonist, actors) {
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
		this.dialogue.question('Choose actor')
	}

	chooseAction() {
	}

}

module.exports = Game
