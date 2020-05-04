/*-- Import Modules --*/
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
    showFightIntro(seems) {
        console.log(`You choose to fight ${this.the}${this.name}${this.actionAgainText1}, even though it seems ${seems}.`);
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

class PassiveObject extends Actor {
    looked() {
        super.looked();
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
        }
    }
    used(protagonist) {
        super.used(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.usedResponse}.`);
        }
    }
    talked(protagonist) {
        super.talked(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.talkedResponse}.`);
        }
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "pointless";
        this.showFightIntro(this.seems);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            // Object is Alive
            this.loseHealth(protagonist);
            if (this.isDead()) {
                // Object Dies
                this.showText(`${this.foughtDestroyedResponse}.`);
            } 
        }
    }
}

class PositiveObject extends Actor {
    looked() {
        super.looked();
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
        }
    }
    used(protagonist) {
        super.used(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.usedResponse}.`);
            protagonist.gainMentalHealth(this);
            (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
        }
    }
    talked(protagonist) {
        super.talked(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.talkedResponse}.`);
        }
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "pointless";
        this.showFightIntro(this.seems);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            // Object is Alive
            this.loseHealth(protagonist);
            protagonist.loseHealth(this);
            if (this.isDead()) {
                // Object Dies
                this.showText(`${this.foughtDestroyedResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            } else {
                // Object Fights Back
                protagonist.fightObjectResponse(this);
                this.showText(`${this.foughtResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            }
        }
    }
}

class NegativeObject extends Actor {
    looked() {
        super.looked();
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
        }
    }
    used(protagonist) {
        super.used(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.usedResponse}.`);
            protagonist.loseHealth(this);
            (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
        }
    }
    talked(protagonist) {
        super.talked(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.talkedResponse}.`);
        }
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "pointless";
        this.showFightIntro(this.seems);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            // Object is Alive
            this.loseHealth(protagonist);
            protagonist.loseHealth(this);
            if (this.isDead()) {
                // Object Dies
                this.showText(`${this.foughtDestroyedResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            } else {
                // Object Fights Back
                protagonist.fightObjectResponse(this);
                this.showText(`${this.foughtResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            }
        }
    }
}

class PositiveCreature extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse);
        this.mentalHealth = mentalHealth;
    }
    looked() {
        super.looked();
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
        }
    }
    used(protagonist) {
        super.used(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.usedResponse}.`);
            protagonist.gainMentalHealth(this);
            (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
        }
    }
    talked(protagonist) {
        super.talked(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.talkedResponse}.`);
        }
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "pointless";
        this.showFightIntro(this.seems);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            // Object is Alive
            this.loseHealth(protagonist);
            protagonist.loseHealth(this);
            if (this.isDead()) {
                // Object Dies
                this.showText(`${this.foughtDestroyedResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            } else {
                // Object Fights Back
                protagonist.fightObjectResponse(this);
                this.showText(`${this.foughtResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            }
        }
    }
}

class NegativePerson extends Actor {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        super(name, physicalHealth, physicalPower, mentalPower, desc, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse);
        this.mentalHealth = mentalHealth;
        this.the = "";
    }
    looked() {
        super.looked();
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.lookedResponse}${this.actionAgainText2}.`);
        }
    }
    used(protagonist) {
        super.used(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.usedResponse}.`);
            protagonist.loseMentalHealth(this);
            (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
        }
    }
    talked(protagonist) {
        super.talked(protagonist);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            this.showText(`${this.talkedResponse}.`);
        }
    }
    fought(protagonist) {
        super.fought(protagonist);
        this.seems = "dangerous";
        this.showFightIntro(this.seems);
        if (this.isDead()) {
            // Object is Already Dead
            this.showAlreadyDead();
        } else {
            // Object is Alive
            this.loseHealth(protagonist);
            protagonist.loseHealth(this);
            if (this.isDead()) {
                // Object Dies
                this.showText(`${this.foughtDestroyedResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            } else {
                // Object Fights Back
                protagonist.fightObjectResponse(this);
                this.showText(`${this.foughtResponse}.`);
                (protagonist.isDead()) ? protagonist.isDeadText(): protagonist.showHealth();
            }
        }
    }
}

module.exports = {
    Actor: Actor,
    PassiveObject: PassiveObject,
    PositiveObject: PositiveObject,
    NegativeObject: NegativeObject,
    PositiveCreature: PositiveCreature,
    NegativePerson: NegativePerson
}
