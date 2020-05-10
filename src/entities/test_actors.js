const Creatures = require('./actor-refactor')

const name = 'John';
const description = 'A handosome man';
const lookResponse = 'You see a handsome man';
const usedResponse = 'A handsome man like him cannot be used';
const talkResponse = 'You dont have the guts to talk to such a handsome man';
const foughtResponse = 'Dont even think about it';
const foughtDestroyedResponse = 'You destroyed a handsome man. Or not?';

var human = new PhysicalBeing(name, description, lookResponse, usedResponse, talkResponse, foughtResponse, foughtDestroyedResponse);
console.log(human.actCount);
console.log(human.isAlive());
console.log(human.looked());
console.log(human.used());
console.log(human.talked());
console.log(human.fought('protagonist'));
console.log(human.loseHealth('physical', 10))
console.log(human.health.physical);


const gcName = "grumpy cat";
const gcDescriprion = `a grumpy cat with a judgmental look`;
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
 

 let grumpyCat = new Creatures.Cat(gcName, gcDescription, gcResponses);
