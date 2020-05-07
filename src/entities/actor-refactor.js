
class Actor {
    constructor(name, description, lookedresponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse) {
        this.name = name;
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
}


class PhysicalBeing(
    constructor(name, description, lookedresponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyedResponse, physicalHealth=100, physicalPower=10) {
		super(name, description, lookedresponse, usedResponse, talkedresponse, foughtresponse, foughtDestroyerdResponse);
		this.physicalHealth = physicalHealth;
		this.physicalPower = physicalPower;

	losePhysicalPower(loss) {
		this.physicalPower -= loss;
	}

	gainPhysicalPower(gain) {
		this.physicalPower += gain;
	}
	
	isAlive() {
		(this.physicalHealth > 0) ? return true; return false;
	}
}

class AetherialBeing(
	constructor(name, description, lookedresponse, usedresponse, talkedresponse, foughtresponse, foughtdestroyedresponse, mentalHealth=100, mentalPower=10) {
		super(name, description, lookedResponse, usedResponse, talkedResponse, foughtResponse, foughtDestroyerdResponse, mentalHealth, mentalPower);
		this.mentalHealth = mentalHealth;
		this.mentalPower = physicalPower;
	
	loseMentalPower(loss) {
		this.mentalPower -= damage;
	}

	gainMentalPower(gain) {
		this.mentalPower += gain;
	}
	
}

module.exports = PhysicalBeing
