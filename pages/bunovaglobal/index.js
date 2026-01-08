const main = document.getElementById('main')
const section1 = document.getElementById('s1')
const section2 = document.getElementById('s2')
const section3 = document.getElementById('s3')
const section5 = document.getElementById('s5')
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;
let s1done = false;
let s2done = false;
let s3done = false;
let s5done = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  if(!s1done){
    if(scroll_pos > section1.offsetTop - section1.offsetHeight/3) {
      s1done = true;
      const s1color = document.getElementById('s1-color')
      s1color.style.color = 'rgb(197, 81, 14)'
    } 
  }
  
  if(!s2done){
    if(scroll_pos > section2.offsetTop - section2.offsetHeight/3) {
      s2done = true;
      const s2color = document.getElementById('s2-color')
      s2color.style.color = 'rgb(197, 81, 14)'
    } 
  }
  
  if(!s3done){
    if(scroll_pos > section3.offsetTop - section3.offsetHeight/3) {
      s3done = true;
      const s3color = document.getElementById('s3-color')
      s3color.style.color = 'rgb(197, 81, 14)'
    }
  }

  if(!s5done){
    if(scroll_pos > section5.offsetTop - section5.offsetHeight) {
      s5done = true;
      const s5color = document.getElementById('s5-color')
      s5color.style.color = 'rgb(197, 81, 14)'
    }
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});