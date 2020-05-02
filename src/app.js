/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

/*-- Set Scene Variables --*/

// Protagonist
const protagonistName = "Joe";
const protagonisHealth = 100;
const protagonistFightPower = 5;

// Object Chair
const chairName = "uncomfortable chair";
const chairHealth = 2;
const chairDesc = "an uncomfortable chair standing next to the desk";
const chairUseResponse = "You sit unconfortably for the rest of the day";
const chairTalkResponse = "The uncomfortable chair does not respond to your desperate socialization attempt";

// Creature Cat
const catName = "grumpy cat";
const catHealth = 10;
const catfightPower = 20;
const catDesc = "a grumpy cat with a judgmental look";
const catUseResponse = "You caress the grumpy cat and your existance fills with serenity";
const catTalkResponse = "The cat seems to agree with what you imply";

/*-- Set Scene Instances --*/
const protagonist = new Protagonist(protagonistName, protagonisHealth, protagonistFightPower);
const chair = new Actors.Object(chairName, chairHealth, chairDesc, chairUseResponse, chairTalkResponse);
const cat = new Actors.Creature(catName, catHealth, catfightPower, catDesc, catUseResponse, catTalkResponse);

/*-- Actions --*/
protagonist.look(chair);
protagonist.use(chair);
protagonist.talk(chair);
protagonist.fight(chair);

console.log('');

protagonist.look(cat);
protagonist.use(cat);
protagonist.talk(cat);
protagonist.fight(cat);