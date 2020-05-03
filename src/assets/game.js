const actor_generator = require('./generator');
const ask_question = require('./interface');

class Game {
	constructor (day, protagonist, actors) {
		this.day = day;
		this.protagonist = protagonist;
		this.actors = actors;
		this.generator = actor_generator();
		this.description = "This a game of balance...";
	}

	gameLoop() {
		// while (!this.protagonist.isDead() && (this.day.counter < 40) {
	}

	newTurn() {
		this.day.nextDay();
		this.day.describe();
		this.actors = this.generator.newActors();
	}
	
	playerAction() {
		var actor = this.chooseActor();		
		var action = this.chooseAction();

		switch(action) {
			case 1:
				this.protagonist.look(actor);
				break;
			case 2:
				this.protagonist.use(actor);
				break;
			case 3:
				this.protagonist.fight(actor);
				break;
			case 4:
				this.protagonist.talk(actor);
				break;
			default:
				console.log("You picked a wrong choice, fool... How hard can it be?")
		}
	}

	chooseActor() {
		var index;
		var question = "Who do you want to interact with?";
		var answer_text = "So this is your choice!";

		ask_question(question, answer_text).then(answer => {
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
