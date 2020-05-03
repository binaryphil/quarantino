class ActorGenerator{
	constructor (objects, creatures, persons){
		this.objects = objects;
		this.creatures = creatures;
		this.persons = persons;
		this.how_many = 3;
	}

	newActors(){
		var i;
		var actors = [];
		for (i = 0; i < this.how_many; i++) {
			let actor = this.randomActor();
			actors.push(actor);
		};
		return actors;
	}

	randomActor(){
		var type = Math.round(Math.random() * 2)
		switch(type) {
			case 0:
				var actor = this.objects[Math.floor(Math.random() * this.objects.length)];
				return actor;
			case 1:
				var actor = this.creatures[Math.floor(Math.random() * this.creatures.length)];
				return actor;
			case 2:
				var actor = this.persons[Math.floor(Math.random() * this.persons.length)];
				return actor;
		}
	}
}

module.exports = ActorGenerator;
