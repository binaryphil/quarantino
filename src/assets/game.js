const actor_generator = require('./generator');
const ask_question = require('./interface');

class Game {
	constructor (day, protagonist, actors) {
		this.day = day;
		this.protagonist = protagonist;
		this.actors = actors;
		this.generator = actor_generator();
		this.description = "This a game of balance...";

		// How many actions a player has each day
		this.no_of_actions = 3;
	}

	gameLoop() {
		console.log(this.dscripion);
		while (!this.protagonist.isDead() && (this.day.counter < 40)) {
			// check if protagonist is dead
			if (isPlayerDead()){
				return;
			}
		}

	}

	newTurn() {
		this.actor = this.genrator.newActors();
		this.day.nextDay(actor);
		this.day.describe();
	}
	
	endTurn() {
		
		if (this.day.counter > 40) {
			console.log("You son of a bitch, you made it!");
			return;
		};

		for (let [index, actor] of this.actors.entries()) {
			if (actor.isDead()){
				this.actors.splice(index, 1);
			};
		};
	}

	playerAction() {
		let actor = this.chooseActor();		
		let action = this.chooseAction();

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

	isPlayerDead() {
		if (this.protagonist.isDead()) {
			console.log("Game over dude!");
			return True;
		};
		return False;
	}

}

module.exports = Game
