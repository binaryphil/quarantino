const ActorGenerator = require('./generator');
const askQuestion = require('./interface');

class Game {
	constructor (day, protagonist, objects, creatures, persons) {
		this.day = day;
		this.protagonist = protagonist;
		this.generator = new ActorGenerator(objects, creatures, persons);
		this.description = "This is a game of balance...";

		// How many actions a player has each day
		this.no_of_actions = 3;
	}

	mainLoop() {
		// First day
		console.clear();
		console.log(this.description);
		this.day.describe();
		this.playerTurn();

		// main loop
		while (true) {
			console.log(this.protagonist.alive);
			// check if protagonist is dead
			if (!this.protagonist.alive) {
				return;
			}
			
			// check if player won the game
			if (this.isGameWon()) {
				return
			}

			//normal turn
			console.clear();
			this.newTurn();
			this.playerTurn();
			this.endTurn();
		}
	}

	newTurn() {
		let new_actors = this.generator.newActors();
		this.day.nextDay(new_actors);
		this.day.describe();
	}
	
	endTurn() {
		// checks if any actor is dead, and removes them
		// for (let [index, actor] of this.day.actors.entries()) {
		//	if (actor.isDead()){
		//		this.actors.splice(index, 1);
		//	};
		};
	}

	playerTurn() {
		let max = this.no_of_actions + 1;
		for (let i=1; i < max; i++) {
			console.log(`Action no${i} of the day`)
			this.playerAction();
		}
	}

	playerAction() {
		let actor = this.chooseActor();		
		console.log(`So you chose ${actor.description} to interact with`);
		let action = this.chooseAction();

		switch(action) {
			case 'look':
				console.log('So you choose to look');
				this.protagonist.look(actor);
				break;
			case 'use':
				console.log('So you choose to use');
				this.protagonist.use(actor);
				break;
			case 'fight':
				console.log('So you choose to fight');
				this.protagonist.fight(actor);
				break;
			case 'talk':
				console.log('So you choose to talk');
				this.protagonist.talk(actor);
				break;
			default:
				console.log("You picked a wrong choice, fool... How hard can it be?");
		}
	}

	chooseActor() {
		var index;
		var question = "Who do you want to interact with?\n";

		let actor_index = askQuestion(question);

		let actor = this.day.actors[actor_index];

		return actor;
	}

	chooseAction() {
		var index;
		var question = "How will you choose to act?\n"

		let action = askQuestion(question);

		return action;
	}

	isPlayerDead() {
		if (this.protagonist.isDead()) {
			console.log("Game over dude!\n");
			return true;
		};
		return false;
	}

	isGameWon() {
		if (this.day.counter > 40) {
			console.log("You did it, you son of a bitch!\n");
			return true;
		}
		return false;
	}
}

module.exports = Game
