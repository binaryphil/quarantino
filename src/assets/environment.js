class Evnironment {
  constructor(entities) {
    this.entities = entities;
  }

  get actor() {
  }

  randomType() {
    const types = Object.keys(this.entities);

    // get random index for types array
    let randomIndex = Math.round(Math.random() * (types.length - 1));

    return types[randomIndex];
  }



    
    
