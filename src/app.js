/*-- Import Modules --*/
const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

/*-- Set Scene --*/
const protagonist = new Protagonist("Joe");
const chair = new Actors.Object("uncomfortable chair", 2, "an uncomfortable chair standing next to the desk", "You sit unconfortably for the rest of the day", "The uncomfortable chair does not respond to your desperate socialization attempt");
const cat = new Actors.Creature("grumpy cat", 10, 20, "a grumpy cat with a judgmental look", "You caress the grumpy cat and your existance fills with serenity", "The cat seems to agree with what you imply")

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