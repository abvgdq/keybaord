const keyboard = document.querySelector('.keyboard__block')

document.addEventListener('keydown', function(event){
    console.log(event.code)
        const space = document.querySelector(event.code)
        space?.classList.add('active')
})

document.addEventListener('keyup', function(event){
    console.log(event)
    const keyLight = document.querySelector(event.code)
    keyLight?.classList.remove('active')
})




