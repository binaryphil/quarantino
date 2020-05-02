class Protagonist {
    constructor(name, physicalHealth, mentalHealth, fightPower) {
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.mentalHealth = mentalHealth;
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
        actor.fight(fightPower, this);
    }
    talk(actor) {
        const name = this.name
        actor.talk(name);
    }

}

module.exports = Protagonist;
