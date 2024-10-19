let head = document.querySelector("h3")
let text = document.querySelector("p");
let button = document.querySelector(".button")
window.onload = function () {
    fetch("	https://api.adviceslip.com/advice").then((res) => res.json()).then((data) => {
        head.innerText = `Advice #${data.slip.id}`
        text.innerText = `"${data.slip.advice}"`
    })
}

button.addEventListener("click", () => {
    fetch("	https://api.adviceslip.com/advice").then((res) => res.json()).then((data) => {
        head.innerText = `Advice #${data.slip.id}`
        text.innerText = `"${data.slip.advice}"`
    })
})


