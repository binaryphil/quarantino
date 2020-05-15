/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist');
const Actors = require('./entities/actors');
const Game = require('./assets/game');
const Day = require('./assets/day');

/*-- Set Actor Variables --*/

// Protagonist
const protagonistName = "Joe";
const protagonistPhysicalHealth = 100;
const protagonistMentalHealth = 100;
const protagonistPhysicalPower = 10;
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
const catPhysicalHealth = 10;
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
const flatmateTalkedResponse = `Your flatmate does not seem to respond.\nYou think maybe because he was born without ears, but you're not sure`;
const flatmateFoughtResponse = `Your flatmate looks baffled by your aggressive move`;
const flatmateFoughtDestroyedResponse = `Not able to confront your inexplicable furry, ${flatmateName} suffers a stroke and finally succumbs to his injuries`;

/*-- Set Actor Instances --*/
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

/*-- Set Day Variables --*/
// const day1Description = "This is your first day. You wake up sleepy."
// const day2Description = "This is your second day. You wake up even sleepier."

/*-- Set Actors Arrays --*/
const objects = [coloredPaper, chair]
const persons = [flatmate];
const creatures = [cat];

const initialActors = [cat, flatmate, chair];

/*-- Set Day Instance --*/
// const day1 = new Day(day1Description);
// const day2 = new Day(day2Description);

const day = new Day(initialActors, objects, creatures, persons);

/*-- Set Days Array --*/
// const days = [day1, day2];

/*-- Set Game Instance --*/
const game = new Game(day, protagonist, initialActors);

game.gameStart();