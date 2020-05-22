/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist');
const Game = require('./assets/game');
const Day = require('./assets/day');
const Creatures = require('./entities/creatures');
const Environment = require('./assets/environment');
// Protagonist
const protagonistName = 'Joe';
const protagonistPhysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistPhysicalPower = 50;
const protagonistMentalPower = 0;


const protagonist = new Protagonist(
    protagonistName, 
    protagonistPhysicalHealth, 
    protagonistMentalHealth, 
    protagonistPhysicalPower,
    protagonistMentalPower);

/*-- Creatures --*/
// Grumpy Cat
const gcName = 'grumpy cat';
const gcDescription = 'a grumpy cat with a judgmental look';
let gcResponses = {
	used: 'You caress the grumpy cat and your existence ' + 
					'fills with serenity',
	looked: 'You see a grumpy cat',
	talked: 'The grumpy cat seems to agree with what you imply',
	fought: 'The grumpy cat looks even grumpier now',
	foughtDestroyed: 'Powerless against your raging blows and ' +
										 'unearthly screams, the grumpy cat has a ' +
										 'nervous breakdown and finally succumbs to ' +
										 'its injuries',
}
const gcAttributes = {
		physical: {
			health: 20,
			power: 25
		},
		mental: {
			health: 10,
			power: 15
		}
};

const grumpyCat = new Creatures.Cat(gcName, gcDescription, gcResponses, gcAttributes);

// Neighbour's Cat
const ncName = 'neighbour\'s cat';
const ncDescription = `the neighbout's chubby cat who has nothing to lose`;
const ncResponses = {
	used: 'You try to pet her despite her lousy attitude. ' +
				'The results are to be expected, she scratches ' +
	      'with all her might',
	looked: 'You gaze at her, and she lazily looks back.',
	talked: 'You can tell that she has other, more sinister ' +
	        'things in her mind.',
	fought: 'You already knew this was a bad idea. the fat cat ' +
	        'leaps at you and shows no mercy.',
	foughtDestroyed: 'Despite her size and evil nature  ' +
									 'you manage to subdue the foul creature. ' +
									 'The vicious battle has taken its toll. '
}
const ncAttributes = {
	physical: {
		health: 25,
		power: 25
	},
	mental: {
		health: 10,
		power: 15
	}
};

const neighboursCat = new Creatures.Cat(ncName, ncDescription, ncResponses, ncAttributes);

//Rolf
const fdName = 'Rolf';
const fdDescription = 'Rolf, your faithful poodle. A proud and stubborn little dog.' 
let fdResponses = {
	used: 'Rolfie quietly accepts your petting, as he is ' +
				'mostly cofderned with his never-ending appetite.',
	looked: 'You look at Rolf, wishfully thinking he was a german sheperd',
	talked: 'Your voice always seems to excite Rolf, but you are ' +
	        'quite certain that it is not out of pure love',
	fought: 'Poodles are famous for their sharp teeth. You get to know why. ',
	foughtDestroyed: 'The battle was short but vicious. ' +
	                 'Rolfie\'s sharp teeth have left their mark.'
};
const fdAttributes = {
	physical: {
		health: 20,
		power: 25
	},
	mental: {
		health: 10,
		power: 15
	}
};


const faithfulDog = new Creatures.Dog(fdName, fdDescription, fdResponses, fdAttributes);

const creatures = [grumpyCat, neighboursCat, faithfulDog];

const day = new Day(creatures, creatures, creatures, creatures);

const entitiesPool = {creatures: creatures,
                      objects: creatures,
                      spirits: creatures};
const environment = new Environment(entitiesPool);

const game = new Game(day, protagonist, environment);

game.gameStart();
