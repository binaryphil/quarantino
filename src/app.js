const Protagonist = require('./entities/protagonist.js');
const Actors = require('./entities/actors.js');

const protagonist = new Protagonist("Joe");
const chair = new Actors("Chair", 2);

protagonist.use(chair);
protagonist.talk(chair);
protagonist.fight(chair);