const array = [
    1, 2, 10, 16
]

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
// 0 depois da função == accumulator
// utilizamos () por que passamos mais de um parametro
// então não tem como fazer a arrow function em forma reduzida
console.log(reduceArray)