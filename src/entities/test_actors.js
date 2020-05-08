const PhysicalBeing = require('./actor-refactor')

const name = 'John';
const description = 'A handosome man';
const lookResponse = 'You see a handsome man';
const usedResponse = 'A handsome man like him cannot be used';
const talkResponse = 'You dont have the guts to talk to such a handsome man';
const fightResponse = 'Dont even think about it';

var human = new PhysicalBeing(description, lookResponse, usedResponse, talkResponse, fightResponse);
console.log(human.isAlive());
console.log(human.looked());
console.log(human.fought('protagonist'));
