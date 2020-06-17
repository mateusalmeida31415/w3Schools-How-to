const foto = document.querySelector('.foto')
const box = document.querySelector('.container')
const closeBtn = document.querySelector('.fa-times')

foto.addEventListener('click', function(){
    box.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    box.style.display = 'none'
})