const PhysicalBeing = require('./actor-refactor')

const name = 'John';
const description = 'A handosome man';
const lookResponse = 'You see a handsome man';
const usedResponse = 'A handsome man like him cannot be used';
const talkResponse = 'You dont have the guts to talk to such a handsome man';
const foughtResponse = 'Dont even think about it';
const foughtDestroyedResponse = 'You destroyed a handsome man. Or not?';

var human = new PhysicalBeing(name, description, lookResponse, usedResponse, talkResponse, foughtResponse,
				                      foughtDestroyedResponse);
console.log(human.isAlive());
console.log(human.looked());
console.log(human.used());
console.log(human.talked());
console.log(human.fought('protagonist'));
