class Game {
	constructor (room, protagonist, actors) {
		this.day = day;
		this.protagonist = protagonist;
		this.actors = actors;
	}

	new_turn() {
		day.next_day()
		let actors = day.actors;

	describe_day() {
		console.log(day.description());
	}
	
	describe_room() {
		console.log('This is what you see inside the room:\n')
		this.actors.forEach(function(actor, index, array) {
			console.log(actor.description);
		}
	}
}
