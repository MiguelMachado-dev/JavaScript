// Caching the tags we need
const button = document.getElementById("enter")
const input = document.getElementById("userinput")
const ul = document.querySelector("ul")

// function to verify the characters in the input
function inputLength() {
    return input.value.length
}

// function to create a LI with the value in the input, adding it to the UL and then clearing the input value
function createListElement() {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterEnter(event) {

    if (inputLength() > 0 && event.which === 13) {
        createListElement()
    }
}

// Se houver um click no botão, execute a função  addListAfterClick
button.addEventListener("click", addListAfterClick)

// Se houver um pressionamento no Enter, execute a função  addListAfterEnter
input.addEventListener("keypress", addListAfterEnter)