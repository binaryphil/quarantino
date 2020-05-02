class Actor {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.type;
        this.desc;
        this.useResponse;
        this.talkResponse;
    }
    look() {
        return console.log(`You see ${this.desc}.`);
    }
    use() {
        return console.log(`${this.useResponse}.`);
    }
    talk() {
        return console.log(`${this.talkResponse}.`);
    }
    fight(fightPower) {
        this.health -= fightPower;
        if (this.type == "object") {
            return console.log(`The ${this.name} is an ${this.type} and has ${this.health} health points.`)
        } else if (this.type == "creature") {
            return console.log(`The ${this.name} is a ${this.type} and has ${this.health} health points.`)
        }
    }
}

class Object extends Actor {
    constructor(name, health, desc, useResponse, talkResponse) {
        super(name, health, desc, useResponse, talkResponse);
        this.desc = desc;
        this.useResponse = useResponse;
        this.talkResponse = talkResponse;
        this.type = "object";
    }
}

class Creature extends Actor {
    constructor(name, health, fightPower, desc, useResponse, talkResponse) {
        super(name, health, fightPower, desc, useResponse, talkResponse);
        this.desc = desc;
        this.useResponse = useResponse;
        this.talkResponse = talkResponse;
        this.type = "creature";
        this.fightPower = fightPower;
    }
}

module.exports = {
    Actor: Actor,
    Object: Object,
    Creature: Creature
}
