const askQuestion = require('./interface');

class Game {
	constructor(day, protagonist, initialActors) {
		this.day = day;
		this.protagonist = protagonist;
		this.initialActors = initialActors; // Οι initial actors δε θα έπρεπει να περνάνε στο game;
		this.title = 'Quarantino v1.0'
		this.gameDescription = 'An in-house survival game in times of confinement.'; // Generic Description
		this.gameIntroduction = 'A description of the time and place. One/Two small paragraphs on the dystopic situation in order for the player enter the game\'s ambience.' // Game Introduction
		this.gameWonText = 'Congratulations, you managed to survive through this madness!'
		this.gameLostText = 'Your body was never to be found. Your story was never to be told.\nThis world... was never ment to make any sense.'
		this.daysPerGame = 3 // The number of days per game
		this.turnsPerDay = 1; // The number of turns per day
		this.dayIndex = 0; // Δε πρέπει να μπει για να ξέρει σε ποιά μέρα είναι;
	}

	gameStart() {
		this.gameIntro();
		this.gameLoop();
	}

	gameLoop() {
		while (true) {
			this.newTurn();
			// Protagonist Dies
			if (!this.protagonist.isAlive()) {
				this.gameLost();
				return false;
			}
			this.endTurn();
			// Days End
			if (this.isDaysOver()) {
				this.gameWon();
				return false;
			}
			this.day.newDay();
		}
	}

	gameIntro() {
		// console.clear();
		console.log(`${this.title}\n`);
		console.log(`${this.gameDescription}`);
		this.enterToContinue();
	}

	enterToContinue() {
		const enterText = '\nPress Enter to continue...';
		askQuestion(enterText);
	}

	chooseActor() {
		const question = '\nWho do you want to interact with?\n\n';
    const validation = '\nYou have picked a wrong choice... Try again.\n\n';
    const upperLimit = this.day.actors.length;
    
    let actorIndex = askQuestion(question);

    let condition = (actorIndex >= 1) && (actorIndex <= upperLimit);
    
    while (!condition) { 
      actorIndex = askQuestion(validation);
      condition = ((actorIndex >= 1) && (actorIndex <= upperLimit));
    }

    actorIndex--;
    return this.day.actors[actorIndex];
	}

	chooseAction() {
		const question = 'How will you choose to act?\n\n1. Look\n2. Use\n3. Talk\n4. Fight\n\n';
		const action = askQuestion(question);
		return action;
	}

	newTurn() {
		for (let i = 0; i < this.turnsPerDay; i++) {
			// console.clear();
			this.playerTurn();
		}
	}

	playerTurn() {
    this.day.showTitle();
		this.day.showDescription();
		this.day.showActors();

		let actor = this.chooseActor(); // Να έχουμε ένα είδος validation τουλάχιστον για νούμερα.

		// console.clear();
		this.day.showTitle();
		console.log(`You chose to interact with ${actor.texts.the}${actor.name}`);
		
		let action = this.chooseAction();

		switch (action) {
			case '1':
				// console.clear();
				this.day.showTitle();
				this.protagonist.look(actor);
				break;
			case '2':
				// console.clear();
				this.day.showTitle();
				this.protagonist.use(actor);
				break;
			case '3':
				// console.clear();
				this.day.showTitle();
				this.protagonist.talk(actor);
				break;
			case '4':
				// console.clear();
				this.day.showTitle();
				this.protagonist.fight(actor);
				break;
			default:
				console.log('You picked a wrong choice, fool... How hard can it be?');
		}

		this.enterToContinue();
	}

	isDaysOver() {
		return (this.day.dayCount >= this.daysPerGame) ? true : false;
	}

	gameWon() {
		// console.clear();
		console.log(`${this.gameWonText}\n`);
	}

	gameLost() {
		// console.clear();
		console.log(`${this.gameLostText}\n`);
	}

	endTurn() {
		// console.clear();
		console.log(`End of day ${this.day.dayCount}`);
		// Remove Dead Actors
		for (let actor of this.day.actors) {
			if (!actor.isAlive()) {
				this.day.actors.splice(actor, 1);
				console.log('\nRemoved ' + actor.name);
			};
		};

		this.enterToContinue();
	}
}

module.exports = Game
