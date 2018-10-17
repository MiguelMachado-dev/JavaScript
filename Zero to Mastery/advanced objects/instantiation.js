class Player {
    constructor(name, type) {
        console.log('player', this)
        this.name = name
        this.type = type
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Weeeeeeee! I'm a ${this.type}`)
    }
}

class Warrior extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`ARRRRRRGH! I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shawn', 'Healer')
const warrior1 = new Warrior('Jason', 'Dual Sword Warrior')