class Environment {
  constructor(entitiesPool) {
    this.entitiesPool = entitiesPool;
    this.entityTypes = Object.keys(this.entitiesPool);
    this.actors = [];
  }

  initialise() {
  }

  addNewActor() {
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
}

entitiesPool = {test1: [1, 2, 3, 4, 6],
                test2: [12, 43, 32, 54],
                test3: [321, 432, 543, 365]}

e = new Environment(entitiesPool);
console.log(e.randomActor())
console.log(e.randomActor())
console.log(e.randomActor())
console.log(e.randomActor())

    
    
