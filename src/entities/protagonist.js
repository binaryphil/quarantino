class Protagonist {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.fightPower = 5;
    }
    look(actor) {
        actor.look();
    }
    use(actor) {
        actor.use();
    }
    fight(actor) {
        let fightPower = this.fightPower
        actor.fight(fightPower);
    }
    talk(actor) {
        const name = this.name
        actor.talk(name);
    }
}

module.exports = Protagonist;
