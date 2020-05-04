class Protagonist {
    constructor(name, physicalHealth, mentalHealth, physicalPower, mentalPower) {
        this.name = name;
        this.physicalHealth = physicalHealth;
        this.mentalHealth = mentalHealth;
        this.physicalPower = physicalPower;
        this.mentalPower = mentalPower;
    }
    look(actor) {
        actor.looked();
    }
    use(actor) {
        actor.used(this);
    }
    talk(actor) {
        actor.talked(this);
    }
    fight(actor) {
        actor.fought(this);
    }
    fightObjectResponse(object) {
        console.log(`Your moves are careless${object.actionAgainText2} and you manage to get injured by the ${object.name}.`);
    }
    gainHealth(actor) {
        this.physicalHealth += actor.physicalPower;
    }
    gainMentalHealth(actor) {
        this.mentalHealth += actor.mentalPower;
    }
    gainPhysicalHealth(actor) {
        this.physicalHealth += actor.physicalPower;
    }
    loseHealth(actor) {
        this.physicalHealth -= actor.physicalPower;
        this.mentalHealth -= actor.mentalPower;
    }
    losePhysicalHealth(actor) {
        this.physicalHealth -= actor.physicalPower;
    }
    loseMentalHealth(actor) {
        this.mentalHealth -= actor.mentalPower;
    }
    isDead() {
        if (this.physicalHealth <= 0 || this.mentalHealth <= 0) {
            return true;
        } else {
            return false;
        }
    }
    isDeadText() {
        console.log('This is too much... You suffer a mental and physical breakdown and you die a pointless death.');
    }
    afterDeathText() {
        console.log('Your soul seems no longer present. It has probably taken its eternal course to the cosmos.');
    }
    showHealth() {
        console.log(`You now have ${this.physicalHealth} Health points and ${this.mentalHealth} Mental points left.`);
    }
    showSameHealth() {
        console.log(`You still have ${this.physicalHealth} Health points and ${this.mentalHealth} Mental points left.`);
    }
}

module.exports = Protagonist