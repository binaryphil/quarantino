/*-- Import Modules --*/

// Main Actor Superclass
class Actor {
    constructor(name, physicalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.physicalPower = physicalPower;
        this.mentalPower = mentalPower;
        this.desc = desc;
        this.lookedResponse = lookedResponse;
        this.usedResponse = usedResponse;
        this.talkedResponse = talkedResponse;
        this.foughtResponse = foughtResponse;
        this.foughtDestroyedResponse = foughtDestroyedResponse;
        this.lookCount = 0;
        this.useCount = 0;
        this.talkCount = 0;
        this.fightCount = 0;
        this.the = "the ";
        this.actionAgainText1 = "";
        this.actionAgainText2 = "";
        this.seems = "";
    }
    looked(protagonist) {
        this.lookCount++;
        const action = "Look at";
        this.showAction(action, this.lookCount);
        (this.lookCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
    }
    used(protagonist) {
        this.useCount++;
        const action = "Use";
        this.showAction(action, this.useCount);
        (this.useCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
    }
    talked(protagonist) {
        this.talkCount++;
        const action = "Talk to";
        this.showAction(action, this.talkCount);
        (this.talkCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
    }
    fought(protagonist) {
        this.fightCount++;
        const action = "Fight";
        this.showAction(action, this.fightCount);
        (this.fightCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
    }
    passiveLook() {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showLookedResponse();
        }
    }
    positiveLookMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            showLookedResponse();
            protagonist.gainMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    negativeLookMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showLookedResponse();
            protagonist.loseMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    negativelUse(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
            protagonist.loseHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    passiveUse() {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
        }
    }
    positiveUseMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
            protagonist.gainMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    negativeUseMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
            protagonist.loseMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    positiveUsePhysical(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
            protagonist.gainPhysicalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    negativeUsePhysical(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showUsedResponse();
            protagonist.losePhysicalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    passiveTalk() {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showTalkedResponse();
        }
    }
    positiveTalkMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showTalkedResponse();
            protagonist.gainMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    negativeTalkMental(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.showTalkedResponse();
            protagonist.loseMentalHealth(this);
            protagonist.showHealthIfAlive();
        }
    }
    passiveFight() {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.loseHealth(protagonist);
            this.showFoughtResponse();
            if (this.isDead()) {
                // Object Dies
                this.showFoughtDestroyedResponse();
            }
        }
    }
    normalFight(protagonist) {
        if (this.isDead()) {
            this.showAlreadyDead();
        } else {
            this.loseHealth(protagonist);
            protagonist.loseHealth(this);
            if (this.isDead()) {
                // Object Dies
                this.showFoughtDestroyedResponse();
                protagonist.showHealthIfAlive();
            } else {
                // Object Fights Back
                protagonist.fightObjectResponse(this);
                this.showFoughtResponse();
                protagonist.showHealthIfAlive();
            }
        }
    }
    showAction(action, count) {
        console.log(`[${action} ${this.the}${this.name} (${action} ${count})]`);
    }
    showText(response) {
        console.log(response);
    }
    loseHealth(protagonist) {
        this.physicalHealth -= protagonist.physicalPower;
        this.mentalHealth -= protagonist.mentalPower;
    }
    losePhysicalHealth(protagonist) {
        this.physicalHealth -= protagonist.physicalPower;
    }
    loseMentalHealth(protagonist) {
        this.mentalHealth -= protagonist.mentalPower;
    }
    isDead() {
        if ((this.physicalHealth <= 0 || this.mentalHealth <= 0) 
        || (this.physicalHealth <= 0 && this.mentalHealth == undefined) 
        || (this.physicalHealth == undefined && this.mentalHealth <= 0)) {
            return true;
        } else {
            return false;
        }
    }
    showLookIntro() {
        console.log(`You choose to take a closer look at ${this.the}${this.name}${this.actionAgainText1}.`);
    }
    showUseIntro() {
        console.log(`You choose to make use of ${this.the}${this.name}${this.actionAgainText2}, in some peculiar way.`);
    }
    showTalkIntro() {
        console.log(`You choose to engage into conversation with ${this.the}${this.name}${this.actionAgainText1}.`);
    }
    showFightIntro(seems) {
        console.log(`You choose to fight ${this.the}${this.name}${this.actionAgainText1}, even though it seems ${seems}.`);
    }
    showLookedResponse() {
        this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
    }
    showUsedResponse() {
        this.showText(`${this.usedResponse}.`);
    }
    showTalkedResponse() {
        this.showText(`${this.talkedResponse}.`);
    }
    showFoughtResponse() {
        this.showText(`${this.foughtResponse}.`);
    }
    showFoughtDestroyedResponse() {
        this.showText(`${this.foughtDestroyedResponse}.`);
    }
    showAlreadyDead() {
        console.log(`To your deceit, ${this.the}${this.name} is no more.`);
    }
    setActionAgainText() {
        this.actionAgainText1 = " once again";
        this.actionAgainText2 = " once more";
    }
    resetActionAgainText() {
        this.actionAgainText1 = "";
        this.actionAgainText2 = "";
    }
}

// Actror Main Sub Classes
class Object extends Actor {
    looked() {
        super.looked();
        this.showLookIntro();
    }
    used(protagonist) {
        super.used(protagonist);
        this.showUseIntro();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.showTalkIntro();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "pointless";
        this.showFightIntro(this.seems);
    }
}

class Creature extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse);
        this.mentalHealth = mentalHealth;
    }
    looked() {
        super.looked();
        this.showLookIntro();
    }
    used(protagonist) {
        super.used(protagonist);
        this.showUseIntro();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.showTalkIntro();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "inappropriate";
        this.showFightIntro(this.seems);
    }
}

class Person extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse);
        this.mentalHealth = mentalHealth;
        this.the = "";
    }
    looked() {
        super.looked();
        this.showLookIntro();
    }
    used(protagonist) {
        super.used(protagonist);
        this.showUseIntro();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.showTalkIntro();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "dangerous";
        this.showFightIntro(this.seems);
    }
}

// Object Sub Classes
class PassiveObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.passiveUse();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.passiveFight();
    }
}

class PositiveUsePhysicalObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUsePhysical(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class PositiveUseMentalObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUsePhysicalObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativeUsePhysical(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUseMentalObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativeUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUseObject extends Object {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativelUse(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

// Creature Sub Classes
class PassiveCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.passiveUse();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.passiveFight();
    }
}

class PositiveUsePhysicalCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUsePhysical(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class PositiveUseMentalCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUsePhysicalCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativeUsePhysical(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUseMentalCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativeUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUseCreature extends Creature {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativelUse(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

// People Sub Classes
class PassivePerson extends Person {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.passiveUse();
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.passiveFight();
    }
}

class PositiveUsePhysicalPerson extends Person {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUsePhysical(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class PositiveUseMentalPerson extends Person {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.positiveUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUseMentalPerson extends Person {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativeUseMental(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

class NegativeUsePerson extends Person {
    looked() {
        super.looked();
        this.passiveLook();
    }
    used(protagonist) {
        super.used(protagonist);
        this.negativelUse(protagonist);
    }
    talked(protagonist) {
        super.talked(protagonist);
        this.passiveTalk();
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.normalFight(protagonist);
    }
}

module.exports = {
    Actor: Actor,
    Object: Object,
    Creature: Creature,
    Person: Person,
    PassiveObject: PassiveObject,
    PositiveUseMentalObject: PositiveUseMentalObject,
    NegativeUseMentalObject: NegativeUseMentalObject,
    PositiveUsePhysicalObject: PositiveUsePhysicalObject,
    NegativeUsePhysicalObject: NegativeUsePhysicalObject,
    NegativeUseObject: NegativeUseObject,
    PassiveCreature: PassiveCreature,
    PositiveUsePhysicalCreature: PositiveUsePhysicalCreature,
    PositiveUseMentalCreature: PositiveUseMentalCreature,
    NegativeUsePhysicalCreature: NegativeUsePhysicalCreature,
    NegativeUseMentalCreature: NegativeUseMentalCreature,
    NegativeUseCreature: NegativeUseCreature,
    PassivePerson: PassivePerson,
    PositiveUsePhysicalPerson: PositiveUsePhysicalPerson,
    PositiveUseMentalPerson: PositiveUseMentalPerson,
    NegativeUseMentalPerson: NegativeUseMentalPerson,
    NegativeUsePerson: NegativeUsePerson
}
