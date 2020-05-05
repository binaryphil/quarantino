class Day {
	constructor(actors) {
		this.actors = actors;
        this.dayCount = 1;
        this.no_of_actions = 3; // numberOfActions έλεος
	}	

	nextDay(new_actors) {
		for (const actor of new_actors) {
			this.actors.push(actor);
		}

		this.dayCount += 1;
	}

	describe() {
		console.log(`Day ${this.dayCount} has begun.\n`);

		console.log('This is what you see inside the room:\n');
		
		this.actors.forEach(function(actor, index) {
			console.log(`${index}. ${actor.desc}\n`);
		});
	}
}

module.exports = Day;
