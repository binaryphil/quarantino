class Actor {
    constructor(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        this.name = name;
        this.health = health;
        this.desc = desc;
        this.useResponse = useResponse;
        this.talkResponse = talkResponse;
        this.fightResponse = fightResponse;
        this.fightDestroy = fightDestroy;
        this.fightPower = fightPower;
        this.type;
        this.fightCount = 1;
        this.the = "the ";
        
    }
    look() {
        if (this.type == "person") this.the = "";
        console.log(`[Look at ${this.the}${this.name}]`);
        console.log(`You see ${this.desc}.`);
    }
    use() {
        if (this.type == "person") this.the = "";
        console.log(`[Use ${this.the}${this.name}]`);
        console.log(`${this.useResponse}.`);
    }
    talk() {
        if (this.type == "person") this.the = "";
        console.log(`[Talk to ${this.the}${this.name}]`);
        console.log(`${this.talkResponse}.`);
    }
    fight(fightPower, protagonist) {
        if (this.type == "person") this.the = "";
        console.log(`[Fight ${this.the}${this.name} (Fight ${this.fightCount})]`);
        let fightAgainText1 = "";
        let fightAgainText2 = "";
        this.fightCount++;
        this.health -= fightPower;
        // If Not First Fight Add Text String
        if (this.fightCount > 2) {
            fightAgainText1 = " once again";
            fightAgainText2 = " once more";
        }
        // Objects
        if (this.type == "object") {
            console.log(`You chose to fight the ${this.name}${fightAgainText1}, even though it seems pointless.`);
            if (this.health <= 0 && this.fightPower <= 0) {
                // Object Without Fight Power Destroyed
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            } 
            else if (this.health > 0 && this.fightPower > 0) {
                // Object With Fight Power Not Destroyed
                protagonist.health -= this.fightPower;
                console.log(`Your moves are careless${fightAgainText2} and you manage to get injured by the ${this.name}.`);
                console.log(`${this.fightResponse}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            }
            else if (this.health <= 0 && this.fightPower > 0) {
                // Object With Fight Power Destroyed
                protagonist.health -= this.fightPower;
                console.log(`Your moves are careless${fightAgainText2} and you manage to get injured by the ${this.name}.`);
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            }
        }

        // Creatures
        else if (this.type == "creature") {
            console.log(`You chose to fight the ${this.name}${fightAgainText1}, even though it seems inappropriate.`);
            if (this.health <= 0 && this.fightPower <= 0) {
                // Creature Without Fight Power Destroyed
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            } else if (this.health > 0 && this.fightPower > 0) {
                // Creature with Fight Power not Destroyed
                protagonist.health -= this.fightPower;
                console.log(`The ${this.name} fights back${fightAgainText2} and injures you.`);
                console.log(`${this.fightResponse}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            }
            else if (this.health <= 0 && this.fightPower > 0) {
                // Creature With Fight Power Destroyed
                protagonist.health -= this.fightPower;
                console.log(`The ${this.name} fights back one last time and injures you.`);
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            }
        }

        // Persons
        else if (this.type == "person") {
            console.log(`You chose to fight ${this.name}${fightAgainText1}, even though it seems dangerous.`);
            if (this.health <= 0 && this.fightPower <= 0) {
                // Person Without Fight Power Destroyed
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            } else if (this.health > 0 && this.fightPower > 0) {
                // Person with Fight Power not Destroyed
                protagonist.health -= this.fightPower;
                console.log(`${this.name} fights back${fightAgainText2} and injures you.`);
                console.log(`${this.fightResponse}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            } else if (this.health <= 0 && this.fightPower > 0) {
                // Person With Fight Power Destroyed
                protagonist.health -= this.fightPower;
                console.log(`${this.name} fights back one last time and injures you.`);
                console.log(`${this.fightDestroy}.`);
                console.log(`You now have ${protagonist.health} Health points left.`);
            }
        }
    }
}

class Object extends Actor {
    constructor(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        super(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower);
        this.type = "object";
    }
}

class Creature extends Actor {
    constructor(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        super(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy);
        this.fightPower = fightPower;
        this.type = "creature";
    }
}

class Person extends Actor {
    constructor(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        super(name, health, desc, useResponse, talkResponse, fightResponse, fightDestroy);
        this.fightPower = fightPower;
        this.type = "person";
    }
}

module.exports = {
    Actor: Actor,
    Object: Object,
    Creature: Creature,
    Person: Person
}
