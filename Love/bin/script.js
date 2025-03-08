let bar = document.querySelector(".bar")
let btn = document.querySelector("button")
let indication = document.querySelector("p#index")
let link = document.querySelector("#link")

var width = 20
function progressBar(){
    width++
    bar.style.width = width + '%'
    var timerId = setTimeout(progressBar, 20);
    if(width >= 100)
    {
        clearTimeout(timerId);
        indication.innerHTML = 'End'
        bar.style.backgroundColor = 'gray'
        link.style.display = 'block'
    }}
    // document.onmouseover = function changeBackground(e){
    //     var X = e.clientX
    //     var Y = e.clientY
    //     document.body.style.backgroundColor = `rgb(${X}, ${Y}, ${(X+Y)/10})`
    //     setInterval(changeBackground, 10)
    // }
btn.addEventListener("click", progressBar)