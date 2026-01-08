var display = document.getElementById('gallery-display');
var icons = document.getElementsByClassName('gallery-icon');

for(var icon of icons){
  icon.addEventListener('click', function(e){
    display.setAttribute('src', e.target.getAttribute('src'));
    display.classList.add('fade');
    setTimeout(function(){
      display.classList.remove('fade');
    }, 500);

  })
}
