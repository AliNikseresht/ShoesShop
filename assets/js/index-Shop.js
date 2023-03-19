let _li = document.querySelectorAll('#imgg>li')

function shop(self) {
    let shoes = self.innerText

    for (i = 0; i < _li.length; i++) {
        temp = _li[i].getAttribute('data-shoess')

        if (shoes == 'All') {
            _li[i].classList.add('show')
            _li[i].classList.remove('hide')

        } else {
            if (
                shoes == temp
            ) {
                _li[i].classList.add('show')
                _li[i].classList.remove('hide')
            } else {
                _li[i].classList.add('hide')
                _li[i].classList.remove('show')
            }
        }
    }
}

let _lii = document.querySelectorAll('ul>li')
document.getElementById('ser').addEventListener('input', function(){
    let val = this.value

    for(i=0; i<_lii.length; i++){
        _lii[i].classList.add('d-none')

        temp = _lii[i].innerText
        if(
            (temp.indexOf(val)) >= 0
        ){
            _lii[i].classList.remove('d-none')
        }
    }
})

function _change(self){
    self.style.color = 'yellow'
}