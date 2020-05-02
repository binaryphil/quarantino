class Protagonist {
    constructor(name, health, fightPower) {
        this.name = name;
        this.health = health;
        this.fightPower = fightPower;
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
