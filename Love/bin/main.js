
let display = document.querySelector(".heart")
const words = ["Love", "Like", "Prefert", "Want", "Need your Presence"]
let wordsIndex = 0
let charsIndex = 0
function updateChars()
{
    charsIndex++
    display.innerHTML = `<p id="text">I ${words[wordsIndex].slice(0, charsIndex)} You Frechnelle</p>`
    if(charsIndex >= words[wordsIndex].length){wordsIndex++; charsIndex = 0}
    else if(wordsIndex >= words.length){charsIndex++}
    setTimeout(updateChars, 800);
}

const password = prompt("Enter Password: ")
if(password !== "yossa" && password !== "frechnelle") document.body.innerHTML = ''
else updateChars()