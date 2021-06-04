//const Monster = require("./p5-monster-game.js")
 module.exports = class Monster {
    constructor(
    monsterName = "Unknown",
    minimumLife = 0,
    currentLife = 100
      //isAlive = currentLife >= minimumLife
    ) {
      this.monsterName = monsterName,
      this.minimumLife = minimumLife,
      this.currentLife = currentLife
      //this.isAlive = isAlive,
    }
}

function updateLife(lifeChangeAmount) {
    /*let minimumLife = */this.currentLife = (this.currentLife - lifeChangeAmount) < 0 ? 0: this.currentLife - lifeChangeAmount
    /*let currentLife =*/ this.isAlive = this.currentLife < this.minimumLife ? true : false;
    //return minimumLife, currentLife
    console.log(updateLife)
}

function randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    let minimum = Math.floor(math.random * min)
    let maximum = Math.floor(math.random * max)
}
