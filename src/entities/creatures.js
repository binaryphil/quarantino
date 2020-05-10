const Actor = require('./actors');


class Creature extends Actor {
	constructor(name, description,responses, 
		          physicalHealth=100, 	physicalPower=10,
              mentalHealth=100, mentalPower=100) {
		super(name, description, responses,
			    physicalHealth, physicalPower,
			    mentalHealth, mentalPower);
		this.texts.seems = ' you see before you this creature';
	
		this.health.physical = physicalHealth;
		this.power.physical = physicalPower;

		this.health.mental = mentalHealth;
		this.power.mental = mentalPower;
	}
}

class Cat extends Creature {
	constructor(name, description, responses, 
							physicalHealth=20, physicalPower=20,
	            mentalHealth=15, mentalPower=10) {
		super(name, description, responses,
			    physicalHealth, physicalPower,
			    mentalHealth, mentalPower);
		this.texts.seems = 'cats are well known for their ferocity';
	}

	fought(protagonist) {
		super.fought(protagonist);

		// Take damage from protagonist 
		this.loseHealth('physical', protagonist.power.physical);
		this.loseHealth('mental', protagonist.power.mental);

		// Deal damage to protagonist
		protagonist.loseHealth(this.power.physical);
		protagonist.loseHealth(this.power.mental);
	}
}
			
module.exports = {
	Cat: Cat
};
