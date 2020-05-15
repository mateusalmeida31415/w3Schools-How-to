const $btn = document.getElementsByClassName('accordion')
const $txt = document.getElementsByClassName('painel')

var a, b, c
$btn[0].addEventListener('click', function(){
    a = 0
    if(a == 0){
        $txt[0].classList.add('openAccordion')
        a += 1
    }else{
        $txt[0].classList.remove('openAccordion')
        a -= 1
    }
})

$btn[1].addEventListener('click', function(){
    b = 0
    if(b == 0){
        $txt[1].classList.add('openAccordion')
        b += 1
    }else{
        $txt[1].classList.remove('openAccordion')
        b -= 1
    }
})

$btn[2].addEventListener('click', function(){
    c = 0
    if(c == 0){
        $txt[2].classList.add('openAccordion')
        c += 1
    }else{
        $txt[2].classList.remove('openAccordion')
        c -= 1
    }
})