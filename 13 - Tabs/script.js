const title = document.querySelector('.content-title')
const text = document.querySelector('.content-text')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
//const btn1 = document.querySelector('.first')
//const btn2 = document.querySelector('.second')
//const btn3 = document.querySelector('.third')

item1.addEventListener('click', function(){
    item1.style.background = '#605a5a'
    item2.style.background = '#F1F1F1'
    item3.style.background = '#F1F1F1'
    title.innerText = 'London'
    text.innerText = 'London is the capital city of England.'
})

item2.addEventListener('click', function(){
    item1.style.background = '#F1F1F1'
    item2.style.background = '#605a5a'
    item3.style.background = '#F1F1F1'
    title.innerText = 'Paris'
    text.innerText = 'Paris is the capital of France.'
})

item3.addEventListener('click', function(){
    item1.style.background = '#F1F1F1'
    item2.style.background = '#F1F1F1'
    item3.style.background = '#605a5a'
    title.innerText = 'Tokyo'
    text.innerText = 'Tokyo is the capital of Japan.'
})

