
const askQuestion = require('./interface');

class Game {
	constructor(day, protagonist, initialActors) {
		this.day = day;
		this.protagonist = protagonist;
		this.initialActors = initialActors; // Οι initial actors δε θα έπρεπει να περνάνε στο game;
		this.title = "Quarantino v1.0"
		this.gameDescription = "An in-house survival game in times of confinement."; // Generic Description
		this.gameIntroduction = "A description of the time and place. One/Two small paragraphs on the dystopic situation in order for the player enter the game's ambience." // Game Introduction
		this.gameWonText = "Congratulations, you managed to survive through this madness!"
		this.gameLostText = "Your body was never to be found. Your story was never to be told.\nThis world... was never ment to make any sense."
		this.daysPerGame = 40 // The number of days per game
		this.turnsPerDay = 1; // The number of turns per day
		this.dayIndex = 0; // Δε πρέπει να μπει για να ξέρει σε ποιά μέρα είναι;
	}
	gameStart() {
		console.clear();
		this.gameIntro();
		this.newTurn();
		this.endTurn();
		this.day.newDay();
		this.gameLoop();
	}
	gameLoop() {
		console.clear();
		console.log('Entered Loop');
		while (true) {
			//normal turn
			this.newTurn();
			if (this.protagonist.isDead()) {
				console.clear();
				this.gameLost();
				return false;
			}
			// check if player won the game
			if (this.isDaysOver()) {
				console.clear();
				this.gameWon();
				return false;
			}
			this.endTurn();
			this.day.newDay();

			// check if protagonist is dead
			
		}
	}
	gameIntro() {
		console.log(`${this.title}\n`);
		console.log(`${this.gameDescription}`);
		this.enterToContinue();
	}
	enterToContinue() {
		let enterText = "\nPress Enter to continue...";
		askQuestion(enterText);
	}
	chooseActor() {
		let question = "\nWho do you want to interact with?\n\n";
		let actorIndex = askQuestion(question);
		actorIndex--;
		let actor = this.day.actors[actorIndex];
		return actor;
	}
	chooseAction() {
		let question = "How will you choose to act?\n\n1. Look\n2. Use\n3. Talk\n4. Fight\n\n";
		let action = askQuestion(question);
		return action;
	}
	newTurn() {
		for (let i = 0; i < this.turnsPerDay; i++) {
			console.clear();
			this.playerTurn();
		}
	}
	playerTurn() {
		this.day.showTitle();
		this.day.showDescription();
		this.day.showActors();
		let actor = this.chooseActor(); // Να έχουμε ένα είδος validation τουλάχιστον για νούμερα.

		console.clear();
		this.day.showTitle();
		console.log(`You chose to interact with ${actor.the}${actor.name}`);
		let action = this.chooseAction();

		switch (action) {
			case "1":
				console.clear();
				this.day.showTitle();
				this.protagonist.look(actor);
				break;
			case "2":
				console.clear();
				this.day.showTitle();
				this.protagonist.use(actor);
				break;
			case "3":
				console.clear();
				this.day.showTitle();
				this.protagonist.talk(actor);
				break;
			case "4":
				console.clear();
				this.day.showTitle();
				this.protagonist.fight(actor);
				break;
			default:
				console.log("You picked a wrong choice, fool... How hard can it be?");
		}
		
		this.enterToContinue();
	}
	isDaysOver() {
		(this.day.counter > this.daysPerGame) ? true: false;
	}
	gameWon() {
		console.log(`${this.gameWonText}\n`);
	}
	gameLost() {
		console.log(`${this.gameLostText}\n`);
	}
	endTurn() {
		console.clear();
		console.log(`End of day ${this.day.dayCount}`);
		this.enterToContinue();
		// checks if any actor is dead, and removes them
		// for (let [index, actor] of this.day.actors.entries()) {
		//	if (actor.isDead()){
		//		this.actors.splice(index, 1);
		//	};
		//};
	}
	

	// newTurn() {
	// 	let new_actors = this.actorGenerator.newActors();
	// 	this.day.nextDay(new_actors);
	// 	this.day.describe();
	// }
	// endTurn() {
	// 	console.log(`End of day ${day.dayCount}`);
	// 	// checks if any actor is dead, and removes them
	// 	// for (let [index, actor] of this.day.actors.entries()) {
	// 	//	if (actor.isDead()){
	// 	//		this.actors.splice(index, 1);
	// 	//	};
	// 	//};
	// }
	// isPlayerDead() {
	// 	if (this.protagonist.isDead()) {
	// 		console.log("Game over dude!\n");
	// 		return true;
	// 	};
	// 	return false;
	// }
	// isGameWon() {
	// 	if (this.day.dayCount > this.daysPerGame) {
	// 		console.log("You did it, you son of a bitch!\n");
	// 		return true;
	// 	}
	// 	return false;
	// }
}

module.exports = Game
