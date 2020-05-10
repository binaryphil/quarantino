const Actor = require('./actor-refactor');


class Creature extends Actor {
	constructor(name, description, lookedResponse, usedResponse, talkedResponse, 
							foughtResponse, foughtDestroyedResponse, physicalHealth=100, 
							physicalPower=10) {
		super(name, description, lookedResponse, usedResponse, talkedResponse, 
					foughtResponse, foughtDestroyedResponse);
		
		this.texts.the = 'the';
		this.texts.seems = ' you see before you this creature';
	}

	fought(protagonist) {
		super.fought(protagonist);

		// Take damage from protagonist 
		this.loseHealth(physical, protagonist.power.physical);
		this.loseHealth(mental. protagonist.power.mental);

		// Deal damage to protagonist
		protagonist.loseHealth(this.power.physical);
		protagonist.loseHealth(this.power.mental);
	}

}

class Cat extends Creature {
	constructor(name, description, lookedResponse, usedResponse, talkedResponse, 
							foughtResponse, foughtDestroyedResponse, physicalHealth=20, 
							physicalPower=20, mentalHealth=15, mentalPower=10) {
		super(name, description, lookedResponse, usedResponse, talkedResponse, 
					foughtResponse, foughtDestroyedResponse);

		this.health.physical = physicalHealth;
		this.power.physical = physicalPower;

		this.health.mental = mentalHealth;
		this.power.mental = mentalPower;
	}
}
			

