const keyboard = document.querySelector('.keyboard__block')
localStorage.setItem('lang', 'ru');
localStorage.setItem('size', 'small')


    document.addEventListener('keydown', function(event){
        if(event.code === 'ShiftRight'  && localStorage.getItem('lang') === 'ru'){
                localStorage.setItem('lang', 'en')
        }else if (event.code === 'ShiftRight' && localStorage.getItem('lang') === 'en'){
                localStorage.setItem('lang', 'ru')
        }
        addActiveBtn()
    })
  
    
    document.addEventListener('keydown', function(event){
        if(event.code === 'CapsLock' && localStorage.getItem('size') === 'small'){
            localStorage.setItem('size', 'big')
        }else if(event.code === 'CapsLock' && localStorage.getItem('size') === 'big'){
            localStorage.setItem('size', 'small')
        }
        addActiveBtn()
    })
    document.addEventListener('keydown', function(event){
        if(event.code === 'ShiftLeft' && localStorage.getItem('size') === 'small'){
            localStorage.setItem('size', 'big')
        }
        addActiveBtn()
    })

    document.addEventListener('keyup', function(event){
        if(event.code === 'ShiftLeft' && localStorage.getItem('size') === 'big'){
            localStorage.setItem('size', 'small')
        }
        addActiveBtn()
    })
    
document.addEventListener('keydown', function(event){
    console.log(event)
    const keyLight = document.querySelector(`.${event.code}`)
    keyLight?.classList.add('active')
});

document.addEventListener('keyup', function(event){
    const keyLight = document.querySelector(`.${event.code}`)
    if(event.code === 'CapsLock' && localStorage.getItem('size') === 'big'){
        return 
    }
        keyLight?.classList.remove('active')
});


function addActiveBtn(){
    const size = localStorage.getItem('size')
    const lang = localStorage.getItem('lang')
    const collection = document.querySelectorAll(`[${size}-key-${lang}]`)
    const allItems = document.querySelectorAll('.hidden')
    for(let i = 0; i<allItems.length;i++){
        allItems[i].classList.remove('active_btn')
    }
    for(let i = 0; i<collection.length;i++){
        collection[i].classList.add('active_btn')
    }
}
    
