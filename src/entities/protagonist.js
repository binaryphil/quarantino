class Protagonist {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower) {
        this.alive = true;
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.mentalHealth = mentalHealth;
        this.physicalPower = physicalPower;
        this.mentalPower = mentalPower;
    }
    look(actor) {
        if (this.alive) {
            actor.look();
        } else {
            console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
        }
    }
    use(actor) {
        if (this.alive) {
            actor.use(this);
        } else {
            console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
        }
    }
    fight(actor) {
        if (this.alive) {
            let physicalPower = this.physicalPower;
            let mentalPower = this.mentalPower;
            actor.fight(physicalPower, mentalPower, this);
        } else {
            console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
        }
    }
    talk(actor) {
        if (this.alive) {
            const name = this.name
            actor.talk(name);
        } else {
            console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
        }
    }
    isDead() {
        if (this.physicalHealth <= 0 || this.mentalHealth <= 0) {
            this.alive = false;
            console.log('This is too much... You suffer a mental and physical breakdown and you die a pointless death.');
        } else {
            console.log(`You now have ${this.physicalHealth} Health points and ${this.mentalHealth} Mental points left.`);
        }
    }
}

module.exports = Protagonist