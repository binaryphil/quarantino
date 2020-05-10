const Actor = require('./actors');


class Creature extends Actor {
	constructor(name, description,responses, attributes) {
		super(name, description, responses, attributes);
		this.texts.seems = ' you see before you this creature';

		this.attributes = attributes;
	}
}

class Cat extends Creature {
	constructor(name, description, responses, 
			        attributes = {'physical': {'health': 20,
			                                   'power': 20},
			  	                 'mental': {'health': 15,
													          'power': 10}}) {
		super(name, description, responses, attributes)

		this.texts.seems = 'cats are well known for their ferocity';
	}

	fought(protagonist) {
		super.fought(protagonist);

		// Take damage from protagonist 
		this.loseHealth('physical', protagonist.power.physical);
		this.loseHealth('mental', protagonist.power.mental);

		// Deal damage to protagonist
		protagonist.loseHealth('physical', this.attributes.physical.power);
		protagonist.loseHealth('mental', this.attributes.mental.power);

		protagonist.showHealthIfAlive();
	}
}
			
class Dog extends Creature {
	constructor(name, description, responses, 
			        attributes = {'physical': {'health': 40,
			                                   'power': 25},
			  	                 'mental': {'health': 10,
													          'power': 5}}) {
		super(name, description, responses, attributes)

		this.texts.the = '';
		this.texts.seems = 'that you should\'nt mess with this dog.'
	}

	fought(protagonist) {
		super.fought(protagonist);

		// Take damage from protagonist 
		this.loseHealth('physical', protagonist.power.physical);
		this.loseHealth('mental', protagonist.power.mental);

		// Deal damage to protagonist
		protagonist.loseHealth('physical', this.attributes.physical.power);
		protagonist.loseHealth('mental', this.attributes.mental.power);

		protagonist.showHealthIfAlive();
	}
}
module.exports = {
	Cat: Cat,
	Dog: Dog
};
