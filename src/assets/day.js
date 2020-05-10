
const ActorGenerator = require('./actorGenerator');

class Day {
	constructor(actors, objects, creatures, persons) {
        this.actors = actors;
        this.actorGenerator = new ActorGenerator(objects, creatures, persons);
        // this.dayDescription = dayDescription;
        this.dayCount = 1;
    }    
    newDay() {
        let newActors = this.actorGenerator.newActors();
        this.addNewActors(newActors);
        this.dayCount += 1;
    }
    addNewActors(newActors) {
        for (const actor of newActors) {
            this.actors.push(actor);
        }
    }
    showTitle() {
        console.log(`-- Day ${this.dayCount} --\n`);
    }
    showActors() {
        this.actors.forEach(function (actor, index) {
            console.log(`${index + 1}. ${actor.description}`);
        });
    }
	showDescription() {
		console.log('Inside the room you see:\n');
	}
}

module.exports = Day;
