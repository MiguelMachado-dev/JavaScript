const obg = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// OLD WAY
const player = obj.player
const experience = obj.experience
let wizardLevel = obj.wizardLevel

// NEW WAY ES - DESTRUCTURING
const { player, experience } = obj
let { wizardLevel } = obj