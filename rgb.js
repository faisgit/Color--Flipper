

let btn = document.querySelector('#changing-color')
let printColor = document.querySelector('.printing-color')
btn.addEventListener('click' , () => {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    printColor.innerHTML = `rgb(${red},${green},${blue})`
    
})