class Protagonist {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.fightPower = 5;
    }
    use(actor) {
        actor.use();
    }
    fight(actor) {
        actor.fight();
    }
    talk(actor) {
        actor.talk();
    }
}

module.exports = Protagonist;
