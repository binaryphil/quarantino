class Actor {
    constructor(name, description, lookedResponse, usedResponse, 
				talkedResponse, foughtResponse, foughtDestroyedResponse) {
        this.name = name;
        this.description = description;
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

    resetActionAgainText() {
        this.actionAgainText1 = "";
        this.actionAgainText2 = "";
    }

    setActionAgainText() {
        this.actionAgainText1 = " once again";
        this.actionAgainText2 = " once more";
    }
}


class PhysicalBeing extends Actor {
    constructor(name, description, lookedResponse, usedResponse, talkedResponse, 
				foughtResponse, foughtDestroyedResponse, physicalHealth=100, 
				physicalPower=10) {
		super(name, description, lookedResponse, usedResponse, talkedResponse, 
			  foughtResponse, foughtDestroyedResponse);

		this.physicalHealth = physicalHealth;
		this.physicalPower = physicalPower;
	}

	looked() {
		super.looked();
	}

	used() {
		super.used();
	}

	talked() {
		super.talked();
	}

	fought() {
		super.fought();
	}

    showAction(action, count) {
		super.showAction();
    }

    resetActionAgainText() {
		super.resetActionAgainText();
    }

    setActionAgainText() {
		super.setActionAgainText();
	}

	losePhysicalPower(loss) {
		this.physicalPower -= loss;
	}

	gainPhysicalPower(gain) {
		this.physicalPower += gain;
	}
	
	isAlive() {
		return ((this.physicalHealth > 0) ? true: false);
	  
	}
}

class MentalBeing extends Actor {
	constructor(name, description, lookedresponse, usedresponse, talkedresponse, 
				foughtresponse, foughtdestroyedresponse, mentalHealth=100, 
				mentalPower=10) {
		super(name, description, lookedResponse, usedResponse, talkedResponse, 
			  foughtResponse, foughtDestroyerdResponse, mentalHealth, mentalPower);
		this.mentalHealth = mentalHealth;
		this.mentalPower = physicalPower;
	}
	
	looked() {
		super.looked();
	}

	used() {
		super.used();
	}

	talked() {
		super.talked();
	}

	fought() {
		super.fought();
	}

	loseMentalPower(loss) {
		this.mentalPower -= damage;
	}

	gainMentalPower(gain) {
		this.mentalPower += gain;
	}
	
	isAlive() {
		return ((this.mentalHealth > 0) ? true: false);
	}	
}

module.exports = PhysicalBeing
