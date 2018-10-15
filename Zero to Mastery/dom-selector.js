// Seleciona elementos no documento (DOM) por tags
document.getElementsByTagName("h1")

// Seleciona elementos no documento (DOM) por classes
document.getElementsByClassName("second")
document.getElementsByClassName("second")[0]  //to select the first

// Seleciona elementos do documento (DOM) por ID
document.getElementById("first")

// Seleciona o primeiro item encontrado
document.querySelector("li")

// Seleciona o todos os itens escolhido
document.querySelectorAll("li, h1")
// Utiliza o querySelectorAll quando queremos pegar uma determinada tag
// e dentro do array a posição do item
document.querySelectorAll("li")[1]

/**
* QuerySelector são melhores de usar do que os três primeiros apresentados
*/

// Pegar QUALQUER atributo
document.querySelector("li").getAttribute("random")

// Alterar QUALQUER atributo
document.querySelector("li").setAttribute("random", "1000")

/**
 * CHANGING STYLES
 */

// style.{property} = ""
document.querySelector("h1").style.background = "yellow"

// Best way to change css using js
// className adds a class to the html tag
document.querySelector("h1").className = "coolTitle";

// classList mostra as classes utilizadas na tag e nos dá algumas opções
// classList.add
// classList.remove
// classList.toggle
document.querySelector("li").classList
document.querySelector("li").classList.add("coolTitle")
document.querySelector("li").classList.remove("coolTitle")
document.querySelector("li").classList.toggle("done")

// Bonus
document.querySelector("h1").innerHTML = "<strong>!!!</strong>"

// parent element
// [1] vai selecionar o Jello, que em Array é o 1
document.querySelectorAll("li")[1].parentElement

/**
 * IT'S IMPORTANT TO CACHE SELECTORS IN VARIABLES
 */