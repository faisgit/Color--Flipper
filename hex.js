let btn = document.querySelector('#changing-color')
let printColor = document.querySelector('.printing-color')
btn.addEventListener('click' , () => {
    let red = (Math.random() * 16).toString(16).slice(3,5)
    let blue =(Math.random() * 16).toString(16).slice(3,5)
    let green = (Math.random() * 16).toString(16).slice(3,5)
    document.body.style.backgroundColor = `#${red}${green}${blue}`
    printColor.innerHTML = `#${red}${green}${blue}`
    console.log(red)
})
