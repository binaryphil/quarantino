class Actor {
	constructor(name, description, responses, attributes) {
		this.name = name;
		this.description = description;
		this.responses = responses;
		this.attributes = attributes;

		this.actCount = {'looked': 0,
										 'used': 0,
									   'talked': 0,
					           'fought': 0};
		

		this.health = {'physical': this.physicalHealth,
									 'mental': this.MentalHealth};

		this.power = {'physical': this.physicalPower,
									'mental': this.MentalPower};

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
												      'used': ', in some peculiar way. ',
												      'fought': ' even though it seems'}
								 }			 
																
	}

	looked(protagonist) {
		this.actCount.look++;
			
		this.showIntro('looked');
		console.log(this.responses.looked);

		(this.actCount.look > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	used(protagonist) {
		this.actCount.use++;

		this.showIntro('used');
		console.log(this.responses.used);

		(this.actCount.use > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	talked(protagonist) {
		this.actCount.talk++;

		this.showIntro('talked');
		console.log(this.responses.talked);

		(this.actCount.talk > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	fought(protagonist) {
		this.actCount.fight++;

		this.showIntro('fought');
		console.log(this.responses.fought);
		
		(this.actCount.fight > 1) ? this.setActionAgainText(): this.resetActionAgainText();
	}

	showIntro(type) {
		let intro = this.intro.opening[type] + this.texts.the + this.name 
			          + this.texts.actionAgain1 + this.intro.closing[type];

		// if type is fight  append seems to intro and print
		if (type == 'fought') {
			console.log(intro + ' ' + this.texts.seems);
			return;
		}

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

	isAlive() {
		if (this.attributes.physical.health < 0 ||
			  this.attributes.mental.health < 0) {
			return false;
		};
		return true;
	}

	loseHealth(type, loss) {
		this.attributes[type].health -= loss;
	}
}

module.exports = Actor;
