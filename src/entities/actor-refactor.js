class Actor {
	constructor(name, description, lookedResponse, usedResponse, 
		talkedResponse, foughtResponse, foughtDestroyedResponse) {
		this.name = name;
		this.description = description;
		this.responses = {'looked': lookedResponse,
						          'used': usedResponse,
									    'talked': talkedResponse,
				              'fought': foughtResponse,
											'foughtDestroyed': foughtDestroyedResponse};

		this.actCount = {'looked': 0,
										 'used': 0,
									   'talked': 0,
					           'fought': 0};
		
		this.health = {'physical': 100,
									 'mental': 100};

		this.texts = {'the': 'the ',
									'seems': '',
									'actionAgain1': '',
								  'actionAgain2': ''};
		
		this.intro = {'opening': {'looked': 'You choose to take a closer look at ',
			                        'talked': 'You choose to engage into conversation with ',
			                        'used': 'You choose to make use of ',
			                        'fought': 'You choose to fight '},
									'closing': {'looked': '.',
												      'talked': '.',
												      'used': ', in some peculiar way.',
												      'fought': 'even though it seems	'}
								 }			 
																
	}

	looked(protagonist) {
		this.actCount.look++;
			
		this.showIntro('looked');
		console.log(this.responses.looked);

		(this.lookCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	used(protagonist) {
		this.actCount.use++;

		this.showIntro('used');
		console.log(this.responses.used);

		(this.useCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	talked(protagonist) {
		this.actCount.talk++;

		this.showIntro('talked');
		console.log(this.responses.talked);

		(this.talkCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	fought(protagonist) {
		this.actCount.fight++;

		this.showIntro('fought');
		console.log(this.responses.fought);
		
		(this.fightCount > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	loseHealth(type, loss) {
		this.health[type] -= loss;
	}

	showIntro(type) {
		let intro = this.intro.opening[type] + this.texts.the + this.name + this.texts.actionAgain1 +
			      this.intro.closing[type]
		console.log(intro);
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
			
			this.texts.the = '';
	  }

	  looked(physicalDmg, mentalDmg) {
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
			this.health.physical -= loss;
	  }

	  gainPhysicalPower(gain) {
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
