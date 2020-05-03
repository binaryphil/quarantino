class Day {
	constructor(actors) {
		this.actors = actors;

		this.counter = 1;
	}	

	nextDay(new_actors) {
		for (const actor of new_actors) {
			this.actors.push(actor);
		}

		this.counter += 1;
	}

	describe() {
		console.log(`Day ${this.counter} has begun.\n`);

		console.log('This is what you see inside the room:\n');
		
		this.actors.forEach(function(actor, index, array) {
			console.log(`${index}. ${actor}\n`);
		});
	}
}

module.exports = Day;
