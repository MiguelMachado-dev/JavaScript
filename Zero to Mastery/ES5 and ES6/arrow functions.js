// OLD WAY

function add(a, b) {
    return a + b
}

// NEW WAY
const add = (a, b) => a + b

// poderia usar assim, mas possuindo apenas
// um retorno, pode ser usado o exemplo de cima
// por que ele assume que vc retornaria o a+b
const add = (a, b) => {
    return a + b
}