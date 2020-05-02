/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

/*-- Set Scene Variables --*/

// Protagonist
const protagonistName = `Joe`;
const protagonistPsysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistPhysicalPower = 5;
const protagonistMentalPower = 0;

// Object Chair
const chairName = "uncomfortable chair";
const chairPhysicalHealth = 15;
const chairPhysicalPower = 5;
const chairMentalPower = 1;
const chairDesc = "an uncomfortable chair standing next to the desk";
const chairUseResponse = "You sit unconfortably for the rest of the day";
const chairTalkResponse = "The uncomfortable chair does not respond to your desperate socializing attempt";
const chairFightResponse = "The uncomfortable chair resists your vicious attack and keeps its integrity";
const chairFightDestroy = "The uncomfortable chair loses the battle and lays broken into pieces";

// Creature Cat
const catName = "grumpy cat";
const catPhysicalHealth = 20;
const catMentalHealth = 15;
const catPhysicalPower = 20;
const catMentalPower = 5;
const catDesc = "a grumpy cat with a judgmental look";
const catUseResponse = "You caress the grumpy cat and your existance fills with serenity";
const catTalkResponse = "The cat seems to agree with what you imply";
const catFightResponse = "The grumpy cat looks even grumpier now";
const catFightDestroy = "Powerless against your raging blows and unearthy screams, the grumpy cat has a nervous breakdown and finally succumbs to its injuries";

// Creature Flatmate
const flatmateName = "your flat mate";
const flatmatePhysicalHealth = 15;
const flatmateMentallHealth = 15;
const flatmatePhysicalPower = 20;
const flatmateMentalPower = 20;
const flatmateDesc = "your flat mate sitting idle on the couch";
const flatmateUseResponse = "You try to fist bump your flatmate but he high fives you instead and then the whole scene becomes weird. At least you tried";
const flatmateTalkResponse = "Your flatmate does not seem to respond. You think maybe because he was born without ears, but you're not sure";
const flatmateFightResponse = "Your flatmate looks buffled by your aggressive move";
const flatmateFightDestroy = "Not able to confront your inexplicable furry, your flatmate suffers a stroke and finally succumbs to his injuries";

/*-- Set Scene Instances --*/
const protagonist = new Protagonist(
    protagonistName, 
    protagonistPsysicalHealth, 
    protagonistMentalHealth, 
    protagonistPhysicalPower,
    protagonistMentalPower);

const chair = new Actors.Object(
    chairName, 
    chairPhysicalHealth, 
    chairPhysicalPower,
    chairMentalPower,
    chairDesc, 
    chairUseResponse, 
    chairTalkResponse, 
    chairFightResponse, 
    chairFightDestroy);

const cat = new Actors.Creature(
    catName, 
    catPhysicalHealth,
    catMentalHealth,
    catPhysicalPower,
    catMentalPower,
    catDesc, 
    catUseResponse, 
    catTalkResponse, 
    catFightResponse, 
    catFightDestroy);

const flatmate = new Actors.Person(
    flatmateName, 
    flatmatePhysicalHealth, 
    flatmateMentallHealth,
    flatmatePhysicalPower,
    flatmateMentalPower,
    flatmateDesc, 
    flatmateUseResponse, 
    flatmateTalkResponse, 
    flatmateFightResponse, 
    flatmateFightDestroy);

/*-- Actions --*/

// console.log(chair.mentalHealth);
// console.log(cat.mentalHealth);
// console.log(flatmate.mentalHealth);
// console.log(protagonist.mentalHealth);

// Chair
protagonist.look(chair);
console.log('');

protagonist.talk(chair);
console.log('');

protagonist.use(chair);
console.log('');

protagonist.fight(chair);
console.log('');

protagonist.fight(chair);
console.log('');

protagonist.fight(chair);
console.log('');

protagonist.fight(chair);
console.log('');

// Cat
protagonist.look(cat);
console.log('');

protagonist.talk(cat);
console.log('');

protagonist.use(cat);
console.log('');

protagonist.fight(cat);
console.log('');

protagonist.fight(cat);
console.log('');

protagonist.fight(cat);
console.log('');

protagonist.fight(cat);
console.log('');

protagonist.fight(cat);
console.log('');

// Flatmate
protagonist.look(flatmate);
console.log('');

protagonist.talk(flatmate);
console.log('');

protagonist.use(flatmate);
console.log('');

protagonist.fight(flatmate);
console.log('');

protagonist.fight(flatmate);
console.log('');

protagonist.fight(flatmate);
console.log('');

protagonist.fight(flatmate);
console.log('');

protagonist.look(flatmate);
console.log('');