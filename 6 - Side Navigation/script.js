var a = document.querySelector('.fa-times').addEventListener('click', function(){
    document.querySelector('.container').classList.remove('close-side-nav')
    document.querySelector('.showup-btn').classList.remove('hide-btn')
})

var b = document.querySelector('.showup-btn').addEventListener('click', function(){
    document.querySelector('.container').classList.add('close-side-nav')
    document.querySelector('.showup-btn').classList.add('hide-btn')
}) 
