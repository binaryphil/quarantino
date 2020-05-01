
class Actors {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    use() {
        return console.log(`${this.name} has been used...`);
    }
    talk() {
        return console.log(`What do you want to know ${protagonist.name}?`);
    }
    fight() {
        this.health -= protagonist.fightPower;
        if (this.health <= 0) {
            return console.log(`${this.name} has been destroyed`)
        } else {
            return console.log(`${this.name} has ${this.health} health points`)
        }
    }
}

module.exports = Actors;
