class Environment {
  constructor(entitiesPool) {
    this.entitiesPool = entitiesPool;
    this.entityTypes = Object.keys(this.entitiesPool);
    this.actors = [];
    this.initialActorsLimit = 3;
    this.cemetary = []
    this.initialise();
  }

  initialise() {
    let limit = this.initialActorsLimit - 1;
    for (let i=0; i<= limit; i++) {
      this.addNewActor();
    }
  }

  addNewActor() {
    let actor = this.randomActor();
    this.actors.push(actor);
  }

  removeDead() {
    for (let actor of this.actors) {
      if (!actor.isAlive) {
        let index = this.actors.indexOf(actor);

        dead = this.actors.splice(index, 0);

        this.cemetary.push(dead);
      }
    }
  }

  randomType() {
    let index = this.randomIndex(this.entityTypes.length);

    return this.entityTypes[index];
  }

  randomActor() {
    let type = this.randomType();
    let array = this.entitiesPool[type];
    let index = this.randomIndex(array.length);

    return array[index];
  }

  randomIndex(limit) {
    // get random index from 0 to limit-1
    return Math.round(Math.random() * (limit - 1));
  }

  showActors() {
		console.log('Inside the room you see:\n');

    this.actors.forEach(function (actor, index) {
        console.log(`${index + 1}. ${actor.description}`);
    });
  }
}

module.exports = Environment;
    
