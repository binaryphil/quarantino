const Game = require('./game');
const Day = require('./day');


class Actor {
	constructor(description) {
		this.description = description;
	}
	
	looked() {
		console.log('I was looked at');
	}
	
	used() { 
		console.log('I was used');
	}

	talked() {
		console.log('I was talked at');
	}

	fought() {
		console.log('I am fightin back');
	}
}

class Protagonist {
	constructor(name) {
		this.name = name;
		this.alive = true;
	}

	use(actor) {
		actor.used();
	}

	look(actor) {
		actor.looked();
	}

	talk(actor) {
		actor.talked();
	}

	fight(actor) {
		actor.fought();
		this.alive = false;
	}
	
	isDead() {
		return this.alive;
	}
}

let chair = new Actor('Chair');
let sofa = new Actor('Sofa');
let table = new Actor('Table');
let pickup = new Actor('Pickup');
let lamp = new Actor('Lamp');

let objects = [chair, table, sofa, pickup, lamp]

let bill = new Actor('Bill');
let john = new Actor('John');
let bob = new Actor('Bob');
let doug = new Actor('Doug');

let persons = [bill, john, bob, doug];

let dog = new Actor('Dog');
let snake = new Actor('Snake');
let spider = new Actor('Spider');
let cat = new Actor('Cat');

let creatures = [dog, snake, spider, cat];
let initial = [dog, bill, chair]

let player = new Protagonist('Jimbo');
let day = new Day(initial);
let game = new Game(day, player, objects, creatures, persons);
game.mainLoop();

