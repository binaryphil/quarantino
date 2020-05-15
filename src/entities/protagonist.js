class Protagonist {
	constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower) {
		this.name = name;
		this.health = {
			physical: physicalHealth,
			mental: mentalHealth
		};
		this.power = {
			physical: physicalPower,
			mental: mentalPower
		};
	}

	look(actor) {
		actor.looked(this);
	}

	use(actor) {
		actor.used(this);
	}
	talk(actor) {
		actor.talked(this);
	}

	fight(actor) {
		actor.fought(this);
	}

	fightObjectResponse(object) {
		console.log(`Your moves are careless${object.actionAgainText2} and you manage to get injured by the ${object.name}.`);
	}

	gainHealth(type, gain) {
		this.health[type] += gain;
	}

	loseHealth(type, loss) {
		this.health[type] -= loss;
	}

	isAlive() {
		if (this.health.physical <= 0 || this.health.mental <= 0) {
			return false;
		}

		return true;
	}

	isDeadText() {
		console.log('This is too much... You suffer a mental and physical breakdown and you die a pointless death.');
	}

	afterDeathText() {
		console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
	}

	showHealthIfAlive() {
		(this.isAlive()) ? this.showHealth() : this.isDeadText();
	}

	showHealth() {
		console.log(`You now have ${this.health.physical} Health points and ${this.health.mental} Mental points left.`);
	}

	showSameHealth() {
		console.log(`You still have ${this.physical.health} Health points and ${this.health.mental} Mental points left.`);
	}
}

module.exports = Protagonist
