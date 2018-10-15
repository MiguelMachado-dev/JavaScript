const css = document.querySelector("h3")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.getElementById("gradient")
const button = document.querySelector(".button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

    css.textContent = body.style.background + ";"
}

function randomHex(){
    /*This function returns a random hex color code in the form #XXXXXX
        It starts with a color code of all zeroes and then replaces each with a randomized hex digit,
        this avoids the issue I kept running into of codes less than 6 digits long
    */
    return "#000000".replace(/0/g,function(){
        return (Math.floor(Math.random()*16)).toString(16);
    });
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

button.addEventListener("click", function(){
    color1.value = randomHex();
    color2.value = randomHex();

    setGradient();
});

body.onload = setGradient;