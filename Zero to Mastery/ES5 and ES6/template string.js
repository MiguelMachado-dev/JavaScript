const name = "Sally"
const age = 34
const pet = "horse"

// OLD WAY

const greeting = "Hello " + name + " you seem to be doing !"

// NEW WAY

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a nice ${pet} do you have!`

// Default arguments

function greet(name='Jason', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`
}

greet()