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
		this.lookIntro = `You choose to take a closer look at ${this.the}${this.name}${this.actionAgainText1}.`
		this.talkIntro = `You choose to engage into conversation with ${this.the}${this.name}${this.actionAgainText1}.`
		this.useIntro = `You choose to make use of ${this.the}${this.name}${this.actionAgainText1}.`
		this.fightIntro = `You choose to fight ${this.the}${this.name}${this.actionAgainText1}.`
	}

	looked(protagonist) {
		this.lookCount++;
		const action = "Look at";

		this.showAction(action, this.lookCount);

		console.log(this.lookedResponse);

		(this.lookCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	used(protagonist) {
		this.useCount++;
		const action = "Use";

		this.showAction(action, this.useCount);

		console.log(this.usedResponse);

		(this.useCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	talked(protagonist) {
		this.talkCount++;
		const action = "Talk to";

		this.showAction(action, this.talkCount);

		console.log(this.talkedResponse);

		(this.talkCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	fought(protagonist) {
		this.fightCount++;
		const action = "Fight";

		this.showAction(action, this.fightCount);

		console.log(this.foughtResponse);
		
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
			this.the = '';
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

// class MentalBeing extends Actor {
// 	constructor(name, description, lookedresponse, usedresponse, talkedresponse, 
// 				foughtresponse, foughtdestroyedresponse, mentalHealth=100, 
// 				mentalPower=10) {
// 		super(name, description, lookedResponse, usedResponse, talkedResponse, 
// 			  foughtResponse, foughtDestroyerdResponse, mentalHealth, mentalPower);
// 		this.mentalHealth = mentalHealth;
// 		this.mentalPower = physicalPower;
// 	}
// 	
// 	looked() {
// 		super.looked();
// 	}
// 
// 	used() {
// 		super.used();
// 	}
// 
// 	talked() {
// 		super.talked();
// 	}
// 
// 	fought() {
// 		super.fought();
// 	}
// 
// 	loseMentalPower(loss) {
// 		this.mentalPower -= damage;
// 	}
// 
// 	gainMentalPower(gain) {
// 		this.mentalPower += gain;
// 	}
// 	
// 	isAlive() {
// 		return ((this.mentalHealth > 0) ? true: false);
// 	}	
// }
// 
module.exports = PhysicalBeing
