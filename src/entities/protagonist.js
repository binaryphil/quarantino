class Protagonist {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower) {
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.mentalHealth = mentalHealth;
        this.physicalPower = physicalPower;
        this.mentalPower = mentalPower;
    }
    look(actor) {
        actor.look();
        console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
    }
    use(actor) {
        actor.use(this);
        console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
    }
    fight(actor) {
        let physicalPower = this.physicalPower;
        let mentalPower = this.mentalPower;
        actor.fight(physicalPower, mentalPower, this);
        console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
    }
    talk(actor) {
        const name = this.name
        actor.talk(name);
        console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
    }
    isDead() {
        if (this.physicalHealth <= 0 || this.mentalHealth <= 0) {
            console.log('This is too much... You suffer a mental and physical breakdown and you die a pointless death.');
            return true;
        } else {
            console.log(`You now have ${this.physicalHealth} Health points and ${this.mentalHealth} Mental points left.`);
            return false;
        }
    }
}

module.exports = Protagonist