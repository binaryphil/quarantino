/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

/*-- Set Scene Variables --*/

// Protagonist
const protagonistName = "Joe";
const protagonistPhysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistPhysicalPower = 5;
const protagonistMentalPower = 0;

// Negative Object Chair
const chairName = "uncomfortable chair";
const chairPhysicalHealth = 15;
const chairPhysicalPower = 2;
const chairMentalPower = 5;
const chairDesc = `an ${chairName} standing next to the desk`;
const chairLookedResponse = `You see ${chairDesc}`;
const chairUsedResponse = `You sit uncomfortably for the rest of the day and suffer a back pain. \nYou also feel utterly useless`;
const chairTalkedResponse = `The ${chairName} does not respond to your desperate socializing attempt`;
const chairFoughtResponse = `The ${chairName} resists your vicious attack and keeps its integrity`;
const chairFoughtDestroyedResponse = `The ${chairName} loses the battle and lays broken into pieces`;

// Positive Object Colored Paper
const coloredPaperName = "colored paper";
const coloredPaperPhysicalHealth = 1;
const coloredPaperPhysicalPower = 1;
const coloredPaperMentalPower = 10;
const coloredPaperDesc = `a yellow ${coloredPaperName} laying on the floor`;
const coloredPaperLookedResponse = `You see ${coloredPaperDesc}`;
const coloredPaperUsedResponse = `You pick up the ${coloredPaperName} and start folding it in strange ways. \nTo your surprise it kind of looks like a deformed origami. \nYou feel a euphoric wave of accomplishment`;
const coloredPaperTalkedResponse = `The ${coloredPaperName} will not answer to any calls from this particular dimension. \nThat makes you wonder... about physics... and stuff..`;
const coloredPaperFoughtResponse = `The ${coloredPaperName} resists your irrational attack and keeps its integrity`;
const coloredPaperFoughtDestroyedResponse = `The ${coloredPaperName} loses the battle and lays torn into pieces`;

// Positive Creature Cat
const catName = "grumpy cat";
const catPhysicalHealth = 20;
const catMentalHealth = 15;
const catPhysicalPower = 20;
const catMentalPower = 10;
const catDesc = `a ${catName} with a judgmental look`;
const catLookedResponse = `You see ${catDesc}`;
const catUsedResponse = `You caress the ${catName} and your existence fills with serenity`;
const catTalkedResponse = `The ${catName} seems to agree with what you imply`;
const catFoughtResponse = `The ${catName} looks even grumpier now`;
const catFoughtDestroyedResponse = `Powerless against your raging blows and unearthly screams, the ${catName} has a nervous breakdown and finally succumbs to its injuries`;

// Negative Person Flatmate
const flatmateName = "your flat mate";
const flatmatePhysicalHealth = 15;
const flatmateMentallHealth = 15;
const flatmatePhysicalPower = 10;
const flatmateMentalPower = 10;
const flatmateDesc = `${flatmateName} sitting idle on the couch`;
const flatmateLookedResponse = `You see ${flatmateDesc}.`;
const flatmateUsedResponse = `You try to fist bump ${flatmateName} but he high fives you instead and then the whole scene becomes weird. \nYou feel weird`;
const flatmateTalkedResponse = `Your flatmate does not seem to respond. You think maybe because he was born without ears, but you're not sure`;
const flatmateFoughtResponse = `Your flatmate looks baffled by your aggressive move`;
const flatmateFoughtDestroyedResponse = `Not able to confront your inexplicable furry, ${flatmateName} suffers a stroke and finally succumbs to his injuries`;

/*-- Set Scene Instances --*/
const protagonist = new Protagonist(
    protagonistName, 
    protagonistPhysicalHealth, 
    protagonistMentalHealth, 
    protagonistPhysicalPower,
    protagonistMentalPower);

const coloredPaper = new Actors.PositiveUseMentalObject(
    coloredPaperName,
    coloredPaperPhysicalHealth, 
    coloredPaperPhysicalPower,
    coloredPaperMentalPower,
    coloredPaperDesc,
    coloredPaperLookedResponse,
    coloredPaperUsedResponse, 
    coloredPaperTalkedResponse, 
    coloredPaperFoughtResponse, 
    coloredPaperFoughtDestroyedResponse);

const chair = new Actors.NegativeUseObject(
    chairName, 
    chairPhysicalHealth, 
    chairPhysicalPower,
    chairMentalPower,
    chairDesc,
    chairLookedResponse,
    chairUsedResponse, 
    chairTalkedResponse, 
    chairFoughtResponse, 
    chairFoughtDestroyedResponse);

const cat = new Actors.PositiveUseMentalCreature(
    catName, 
    catPhysicalHealth,
    catMentalHealth,
    catPhysicalPower,
    catMentalPower,
    catDesc,
    catLookedResponse,
    catUsedResponse, 
    catTalkedResponse, 
    catFoughtResponse, 
    catFoughtDestroyedResponse);

const flatmate = new Actors.NegativeUseMentalPerson(
    flatmateName, 
    flatmatePhysicalHealth, 
    flatmateMentallHealth,
    flatmatePhysicalPower,
    flatmateMentalPower,
    flatmateDesc,
    flatmateLookedResponse,
    flatmateUsedResponse, 
    flatmateTalkedResponse, 
    flatmateFoughtResponse, 
    flatmateFoughtDestroyedResponse);

/*-- Actions --*/

// Colored Paper
protagonist.look(coloredPaper);
console.log("");

protagonist.talk(coloredPaper);
console.log("");

protagonist.use(coloredPaper);
console.log("");

protagonist.fight(coloredPaper);
console.log("");

protagonist.fight(coloredPaper);
console.log("");

// Chair
protagonist.look(chair);
console.log("");

protagonist.look(chair);
console.log("");

protagonist.talk(chair);
console.log("");

protagonist.use(chair);
console.log("");

protagonist.fight(chair);
console.log("");

protagonist.fight(chair);
console.log("");

protagonist.fight(chair);
console.log("");

// Cat
protagonist.look(cat);
console.log("");

protagonist.talk(cat);
console.log("");

protagonist.use(cat);
console.log("");

protagonist.fight(cat);
console.log("");

protagonist.fight(cat);
console.log("");

protagonist.fight(cat);
console.log("");

protagonist.use(cat);
console.log("");

// // Flatmate
protagonist.look(flatmate);
console.log("");

protagonist.talk(flatmate);
console.log("");

protagonist.use(flatmate);
console.log("");

protagonist.fight(flatmate);
console.log("");

protagonist.fight(flatmate);
console.log("");

protagonist.fight(flatmate);
console.log("");

protagonist.look(chair);
console.log("");

protagonist.look(coloredPaper);
console.log("");

protagonist.fight(cat);
console.log("");

