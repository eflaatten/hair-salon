navigateTo = (url) => {
  window.location.href = url
}

var btnContainer = document.getElementById('navbar')
var btns = document.getElementsByClassName('btn')

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active')
    this.className += ' active'
  })
}
