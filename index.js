const keyboard = document.querySelector('.keyboard__block')

document.addEventListener('keydown', function(event){
    console.log(event)
    if(event.code == 'Space'){
        const space = document.querySelector('.Space')
        space.classList.add('active')
    }
})

document.addEventListener('keyup', function(event){
    console.log(event)
    if(event.code == 'Space'){
        const space = document.querySelector('.Space')
        space.classList.remove('active')
    }
})




