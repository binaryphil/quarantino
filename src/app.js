/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

/*-- Set Scene Variables --*/

// Protagonist
const protagonistName = `Joe`;
const protagonistPsysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistFightPower = 5;

// Object Chair
const chairName = "uncomfortable chair";
const chairPhysicalHealth = 15;
const chairfightPower = 5;
const chairDesc = "an uncomfortable chair standing next to the desk";
const chairUseResponse = "You sit unconfortably for the rest of the day";
const chairTalkResponse = "The uncomfortable chair does not respond to your desperate socializing attempt";
const chairFightResponse = "The uncomfortable chair resists your vicious attack and keeps its integrity";
const chairFightDestroy = "The uncomfortable chair loses the battle and lays broken into pieces";

// Creature Cat
const catName = "grumpy cat";
const catPhysicalHealth = 15;
const catMentalHealth = 15;
const catfightPower = 10;
const catDesc = "a grumpy cat with a judgmental look";
const catUseResponse = "You caress the grumpy cat and your existance fills with serenity";
const catTalkResponse = "The cat seems to agree with what you imply";
const catFightResponse = "The grumpy cat looks now even grumpier";
const catFightDestroy = "Powerless against your raging blows, the grumpy cat finally succumbs to its injuries";

// Creature Flatmate
const flatmateName = "your flat mate";
const flatmatePhysicalHealth = 15;
const flatmateMentalHealth = 15;
const flatmatefightPower = 15;
const flatmateDesc = "your flat mate sitting idle on the couch";
const flatmateUseResponse = "You try to fist bump your flatmate but he high fives you instead and then the whole scene becomes weird";
const flatmateTalkResponse = "Your flatmate does not seem to respond. You think maybe because he was born without ears, but you're not sure";
const flatmateFightResponse = "Your flatmate looks buffled by your aggressive move";
const flatmateFightDestroy = "Not able to confront your inexplicable furry, your flatmate finally succumbs to his injuries";

/*-- Set Scene Instances --*/
const protagonist = new Protagonist(protagonistName, protagonistPsysicalHealth, protagonistMentalHealth, protagonistFightPower);
const chair = new Actors.Object(chairName, chairPhysicalHealth, chairDesc, chairUseResponse, chairTalkResponse, chairFightResponse, chairFightDestroy, chairfightPower);
const cat = new Actors.Creature(catName, catPhysicalHealth, catDesc, catUseResponse, catTalkResponse, catFightResponse, catFightDestroy, catfightPower, catMentalHealth);
const flatmate = new Actors.Person(flatmateName, flatmatePhysicalHealth, flatmateDesc, flatmateUseResponse, flatmateTalkResponse, flatmateFightResponse, flatmateFightDestroy, flatmatefightPower, flatmateMentalHealth);

/*-- Actions --*/

console.log(chair.mentalHealth);
console.log(cat.mentalHealth);
console.log(flatmate.mentalHealth);
console.log(protagonist.mentalHealth);

// Chair
// protagonist.look(chair);
// console.log('');

// protagonist.talk(chair);
// console.log('');

// protagonist.use(chair);
// console.log('');

// protagonist.fight(chair);
// console.log('');

// protagonist.fight(chair);
// console.log('');

// protagonist.fight(chair);
// console.log('');

// // Cat
// protagonist.look(cat);
// console.log('');

// protagonist.talk(cat);
// console.log('');

// protagonist.use(cat);
// console.log('');

// protagonist.fight(cat);
// console.log('');

// protagonist.fight(cat);
// console.log('');

// protagonist.fight(cat);
// console.log('');

// // Flatmate
// protagonist.look(flatmate);
// console.log('');

// protagonist.talk(flatmate);
// console.log('');

// protagonist.use(flatmate);
// console.log('');

// protagonist.fight(flatmate);
// console.log('');

// protagonist.fight(flatmate);
// console.log('');

// protagonist.fight(flatmate);
// console.log('');