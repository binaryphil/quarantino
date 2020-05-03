class Day {
	constructor(actors) {
		this.actors = actors;

		this.counter = 1;
	}	

	nextDay(actors) {
		this.actors = actors;

		this.counter += 1;
	}

	describe() {
		console.log('Day ${this.counter} has begun.');

		console.log('This is what you see inside the room:\n');
		
		this.actors.forEach(function(actor, index, array) {
			console.log("{index}. {actor.description}\n");
		});
	}
}
