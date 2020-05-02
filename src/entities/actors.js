class Actor {
    constructor(name, physicalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy) {
        this.active = true;
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.physicalPower = physicalPower;
        this.mentalPower = mentalPower;
        this.desc = desc;
        this.useResponse = useResponse;
        this.talkResponse = talkResponse;
        this.fightResponse = fightResponse;
        this.fightDestroy = fightDestroy;
        this.fightCount = 1;
        this.the = "the ";
        this.fightAgainText1 = "";
        this.fightAgainText2 = "";
    }
    look() {
        console.log(`[Look at ${this.the}${this.name}]`);
    }
    use(protagonist) {
        console.log(`[Use ${this.the}${this.name}]`);
    }
    talk() {
        console.log(`[Talk to ${this.the}${this.name}]`);
    }
    fight(physicalPower, mentalPower, protagonist) {
        console.log(`[Fight ${this.the}${this.name} (Fight ${this.fightCount})]`);
        this.fightCount++;
        this.physicalHealth -= physicalPower;
        this.mentalHealth -= mentalPower;
        // If Not First Fight Add Text String
        if (this.fightCount > 2) {
            this.fightAgainText1 = " once again";
            this.fightAgainText2 = " once more";
        }
    }
}

class Object extends Actor {
    constructor(name, physicalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy);
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
    fight(physicalPower, mentalPower, protagonist) {
        super.fight(physicalPower, mentalPower, protagonist);
        console.log(`You chose to fight the ${this.name}${this.fightAgainText1}, even though it seems pointless.`);
        if (this.active) {
            // Object is Active
            if (this.physicalHealth <= 0 && this.physicalPower <= 0 && this.mentalPower <= 0) {
                // Object Without Physical and Mental Power is Destroyed
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
            } else if (this.physicalHealth > 0 && this.physicalPower > 0 || this.physicalHealth > 0 && this.mentalPower > 0) {
                // Object With Physical or Mental Power Fights Back
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`Your moves are careless${this.fightAgainText2} and you manage to get injured by the ${this.name}.`);
                console.log(`${this.fightResponse}.`);
                isDead(protagonist);
            } else if (this.physicalHealth <= 0 && this.physicalPower > 0 || this.physicalHealth > 0 && this.mentalPower > 0) {
                // Object With Physical or Mental Power Fights Back and is Destroyed
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`Your moves are careless${this.fightAgainText2} and you manage to get injured by the ${this.name}.`);
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                isDead(protagonist);
            }
        } else  {
            // Object is Inactive
            console.log(`To your deceit, the ${this.name} is no more.`);
            console.log(`You still have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
        }
    }
}

class Creature extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy);
        this.mentalHealth = mentalHealth;
    }
    look() {
        super.look();
        console.log(`You see ${this.desc}.`);
    }
    use(protagonist) {
        super.use(protagonist);
        protagonist.mentalHealth += this.mentalPower;
        console.log(`${this.useResponse}.`);
        console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
    }
    talk() {
        super.talk();
        console.log(`${this.talkResponse}.`);
    }
    fight(physicalPower, mentalPower, protagonist) {
        super.fight(physicalPower, mentalPower, protagonist);
        console.log(`You chose to fight the ${this.name}${this.fightAgainText1}, even though it seems inappropriate.`);
        if (this.active) {
            // Creature is Active
            if (this.physicalHealth <= 0 && this.physicalPower <= 0 && this.mentalPower <= 0 || this.mentalHealth <= 0 && this.physicalPower <= 0 && this.mentalPower <= 0) {
                // Creature Without Physical and Mental Power is Destroyed
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
            } else if (this.physicalHealth > 0 && this.mentalHealth > 0 && this.physicalPower > 0 || this.physicalHealth > 0 && this.mentalHealth > 0 && this.mentalPower > 0) {
                // Creature With Physical or Mental Power Fights Back
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`The ${this.name} fights back${this.fightAgainText2} and injures you.`);
                console.log(`${this.fightResponse}.`);
                isDead(protagonist);
            } else if ((this.physicalHealth <= 0 || this.mentalHealth <= 0 && this.physicalPower > 0) || this.physicalHealth <= 0 || this.mentalHealth <= 0 && this.mentalPower > 0) {
                // Creature With Physical or Mental Power Fights Back and is Destroyed
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`The ${this.name} fights back one last time and injures you.`);
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                isDead(protagonist);
            }
        } else {
            // Creature is Inactive
            console.log(`To your deceit, the ${this.name} is no more.`);
            console.log(`You still have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
        }
    }
}

class Person extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, useResponse, talkResponse, fightResponse, fightDestroy);
        this.mentalHealth = mentalHealth;
        this.the = "";
    }
    look() {
        super.look();
        console.log(`You see ${this.desc}.`);
    }
    use(protagonist) {
        super.use(protagonist);
        protagonist.mentalHealth += this.mentalPower;
        console.log(`${this.useResponse}.`);
        console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
    }
    talk() {
        super.talk();
        console.log(`${this.talkResponse}.`);
    }
    fight(physicalPower, mentalPower, protagonist) {
        super.fight(physicalPower, mentalPower, protagonist);
        console.log(`You chose to fight ${this.name}${this.fightAgainText1}, even though it seems dangerous.`);
        if (this.active) {
            // Person is Active
            if (this.physicalHealth <= 0 && this.physicalPower <= 0 && this.mentalPower <= 0 || this.mentalHealth <= 0 && this.physicalPower <= 0 && this.mentalPower <= 0) {
                // Person Without Physical or Mental Power is Destroyed
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
            } else if (this.physicalHealth > 0 && this.mentalHealth > 0 && this.physicalPower > 0 || this.physicalHealth > 0 && this.mentalHealth > 0 && this.mentalPower > 0) {
                // Person With Physical or Mental Power Fights Back
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`${this.name} fights back${this.fightAgainText2} and injures you.`);
                console.log(`${this.fightResponse}.`);
                isDead(protagonist);
            } else if ((this.physicalHealth <= 0 || this.mentalHealth <= 0 && this.physicalPower > 0) || this.physicalHealth <= 0 || this.mentalHealth <= 0 && this.mentalPower > 0) {
                // Person With Physical or Mental Power Fights Back and is Destroyed
                protagonist.physicalHealth -= this.physicalPower;
                protagonist.mentalHealth -= this.mentalPower;
                console.log(`${this.name} fights back one last time and injures you.`);
                console.log(`${this.fightDestroy}.`);
                this.active = false;
                isDead(protagonist);
            }
        } else {
            // Person is inactive
            console.log(`To your deceit, ${this.name} is no more.`);
            console.log(`You still have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
        }
    }
}

function isDead(protagonist) {
    if (protagonist.physicalHealth <= 0 || protagonist.mentalHealth <= 0) {
        protagonist.dead();
    } else {
        console.log(`You now have ${protagonist.physicalHealth} Health points and ${protagonist.mentalHealth} Mental points left.`);
    }
}

module.exports = {
    Actor: Actor,
    Object: Object,
    Creature: Creature,
    Person: Person
}
