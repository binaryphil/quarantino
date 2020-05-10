const Creatures = require('./creature');
const Protagonist = require('./protagonist');

const gcName = "grumpy cat";
const gcDescription = `a grumpy cat with a judgmental look`;
let gcResponses = {'used': 'You caress the grumpy cat and your existence ' +
													 'fills with serenity',
	                 'looked': 'You see a grumpy cat',
	                 'talked': 'The grumpy cat seems to agree with what you imply',
	                 'fought': 'The grumpy cat looks even grumpier now',
	                 'foughtDestroyed': 'Powerless against your raging blows and ' +
																			'unearthly screams, the grumpy cat has a ' +
	                                    'nervous breakdown and finally succumbs to ' +
	                                    'its injuries',
}
 
// Protagonist
const protagonistName = "Joe";
const protagonistPhysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistPhysicalPower = 5;
const protagonistMentalPower = 0;


const protagonist = new Protagonist(
    protagonistName, 
    protagonistPhysicalHealth, 
    protagonistMentalHealth, 
    protagonistPhysicalPower,
    protagonistMentalPower);

let grumpyCat = new Creatures.Cat(gcName, gcDescription, gcResponses);

grumpyCat.used(protagonist);
grumpyCat.looked(protagonist);
grumpyCat.talked(protagonist);
grumpyCat.fought(protagonist)

