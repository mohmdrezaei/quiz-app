const buttons = document.querySelectorAll("button")

const selectHanldler = (event) =>{
    const level = event.target.innerText.toLowerCase()
    localStorage.setItem("level", level)
}
buttons.forEach(button=>{
    button.addEventListener("click" , selectHanldler)
})