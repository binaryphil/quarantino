const PhysicalBeing = require('./actors')

const name = 'John';
const description = 'A handosome man';
const lookResponse = 'You see a handsome man';
const useResponse = 'A handsome man like him cannot be used';
const talkResponse = 'You dont have the guts to talk to such a handsome man';
const fightResponse = 'Dont even think about it';

human = PhysicalBeing(description, lookResponse, usedResponse, talkResponse, fightResponse);
