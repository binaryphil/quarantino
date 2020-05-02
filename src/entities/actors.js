class Actor {
    constructor(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.mentalHealth;
        this.desc = desc;
        this.useResponse = useResponse;
        this.talkResponse = talkResponse;
        this.fightResponse = fightResponse;
        this.fightDestroy = fightDestroy;
        this.fightPower = fightPower;
        this.fightCount = 1;
        this.the = "the ";
        this.fightAgainText1 = "";
        this.fightAgainText2 = "";
    }
    look() {
        console.log(`[Look at ${this.the}${this.name}]`);
    }
    use() {
        console.log(`[Use ${this.the}${this.name}]`);
    }
    talk() {
        console.log(`[Talk to ${this.the}${this.name}]`);
    }
    fight(fightPower, protagonist) {
        console.log(`[Fight ${this.the}${this.name} (Fight ${this.fightCount})]`);
        this.fightCount++;
        this.physicalHealth -= fightPower;
        // If Not First Fight Add Text String
        if (this.fightCount > 2) {
            this.fightAgainText1 = " once again";
            this.fightAgainText2 = " once more";
        }
    }
}

class Object extends Actor {
    constructor(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower) {
        super(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower);
    }
    look() {
        super.look();
        console.log(`You see ${this.desc}.`);
    }
    use() {
        super.use();
        console.log(`${this.useResponse}.`);
    }
    talk() {
        super.talk();
        console.log(`${this.talkResponse}.`);
    }
    fight(fightPower, protagonist) {
        super.fight(fightPower, protagonist);
        console.log(`You chose to fight the ${this.name}${this.fightAgainText1}, even though it seems pointless.`);
        if (this.physicalHealth <= 0 && this.fightPower <= 0) {
            // Object Without Fight Power Destroyed
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth > 0 && this.fightPower > 0) {
            // Object With Fight Power Not Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`Your moves are careless${this.fightAgainText2} and you manage to get injured by the ${this.name}.`);
            console.log(`${this.fightResponse}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth <= 0 && this.fightPower > 0) {
            // Object With Fight Power Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`Your moves are careless${this.fightAgainText2} and you manage to get injured by the ${this.name}.`);
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        }
    }
}

class Creature extends Actor {
    constructor(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower, mentalHealth) {
        super(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower, mentalHealth);
    }
    look() {
        super.look();
        console.log(`You see ${this.desc}.`);
    }
    use() {
        super.use();
        console.log(`${this.useResponse}.`);
    }
    talk() {
        super.talk();
        console.log(`${this.talkResponse}.`);
    }
    fight(fightPower, protagonist) {
        super.fight(fightPower, protagonist);
        console.log(`You chose to fight the ${this.name}${this.fightAgainText1}, even though it seems inappropriate.`);
        if (this.physicalHealth <= 0 && this.fightPower <= 0) {
            // Creature Without Fight Power Destroyed
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth > 0 && this.fightPower > 0) {
            // Creature with Fight Power not Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`The ${this.name} fights back${this.fightAgainText2} and injures you.`);
            console.log(`${this.fightResponse}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth <= 0 && this.fightPower > 0) {
            // Creature With Fight Power Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`The ${this.name} fights back one last time and injures you.`);
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        }
    }
}

class Person extends Actor {
    constructor(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower, mentalHealth) {
        super(name, physicalHealth, desc, useResponse, talkResponse, fightResponse, fightDestroy, fightPower, mentalHealth);
        this.the = "";
    }
    look() {
        super.look();
        console.log(`You see ${this.desc}.`);
    }
    use() {
        super.use();
        console.log(`${this.useResponse}.`);
    }
    talk() {
        super.talk();
        console.log(`${this.talkResponse}.`);
    }
    fight(fightPower, protagonist) {
        super.fight(fightPower, protagonist);
        console.log(`You chose to fight ${this.name}${this.fightAgainText1}, even though it seems dangerous.`);
        if (this.physicalHealth <= 0 && this.fightPower <= 0) {
            // Person Without Fight Power Destroyed
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth > 0 && this.fightPower > 0) {
            // Person with Fight Power not Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`${this.name} fights back${this.fightAgainText2} and injures you.`);
            console.log(`${this.fightResponse}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        } else if (this.physicalHealth <= 0 && this.fightPower > 0) {
            // Person With Fight Power Destroyed
            protagonist.physicalHealth -= this.fightPower;
            console.log(`${this.name} fights back one last time and injures you.`);
            console.log(`${this.fightDestroy}.`);
            console.log(`You now have ${protagonist.physicalHealth} Health points left.`);
        }
    }
}

module.exports = {
    Actor: Actor,
    Object: Object,
    Creature: Creature,
    Person: Person
}
