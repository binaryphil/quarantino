const Actor = require('./actors');


class Creature extends Actor {
	constructor(name, description, responses, attributes) {
		super(name, description, responses, attributes);
		this.texts.seems = ' you see before you this creature';
	}
}

class Cat extends Creature {
	constructor(name, description, responses, attributes) {
			super(name, description, responses, attributes);
			this.texts.seems = 'cats are well known for their ferocity';
		}

	fought(protagonist) {
		super.fought(protagonist);

		// Deal damage to protagonist
		protagonist.loseHealth('physical', this.attributes.physical.power);
		protagonist.loseHealth('mental', this.attributes.mental.power);

		protagonist.showHealthIfAlive();
	}
}
			
class Dog extends Creature {
	constructor(name, description, responses, attributes) {
		super(name, description, responses, attributes)

		this.texts.the = '';
		this.texts.seems = 'that you should\'nt mess with this dog.'
	}

	fought(protagonist) {
		super.fought(protagonist);

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
