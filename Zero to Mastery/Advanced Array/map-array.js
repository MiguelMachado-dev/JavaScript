const array = [
    1, 2, 10, 16
]

// const mapArray = array.map((num) => {
//     return num * 2
// })
// Tanto a versão de baixo quanto a de cima comentada
// estão certas! Porém, como temos apenas um paramentro
// e retornando apenas um valor, podemos usar a de baixo
const mapArray = array.map(num => num * 2)
console.log(mapArray)