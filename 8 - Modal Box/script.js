var botao = document.querySelector('.showup')
var box = document.querySelector('.container')
var closeBtn = document.querySelector('.fa-times')

botao.addEventListener('click', function(){
    box.classList.add('moveBoxDown')
    botao.classList.add('hidebtn')
    box.classList.remove('moveBoxUp')
    botao.classList.remove('showbtn')
})

closeBtn.addEventListener('click', function(){
    box.classList.remove('moveBoxDown')
    box.classList.add('moveBoxUp')
    botao.classList.remove('hidebtn')
    botao.classList.add('showbtn')
})