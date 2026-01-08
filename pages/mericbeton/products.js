var image = document.getElementById('product-img');
var details = document.getElementById('product-details');

var kilitParke = document.getElementById('kilit-parke');
var kareTas = document.getElementById('kare-tas');
var prizmaTas = document.getElementById('prizma-tas');
var ucgenTas = document.getElementById('ucgen-tas');
var sekizgenTas = document.getElementById('sekizgen-tas');
var bordur = document.getElementById('bordur');
var yagmurOlugu = document.getElementById('yagmur-olugu');
var izTasi = document.getElementById('iz-tasi');

details.innerHTML = "<ul>" +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/kilit-parke.jpg\')">6cm NATUREL KİLİT TAŞI</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/kilit-parke-renkli.jpg\')">6cm RENKLİ KİLİT TAŞI</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">8cm NATUREL KİLİT TAŞI</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">8cm RENKLİ KİLİT TAŞI</li></a>' +
"</ul>";


kilitParke.addEventListener("click", function(e){
  details.classList.add('fade');
  image.setAttribute('src', 'img/kilit-parke.jpg');
  setTimeout(function(){
  details.innerHTML = "<ul>" +
    '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/kilit-parke.jpg\')">6cm NATUREL KİLİT TAŞI</li></a>' +
    '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/kilit-parke-renkli.jpg\')">6cm RENKLİ KİLİT TAŞI</li></a>' +
    '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">8cm NATUREL KİLİT TAŞI</li></a>' +
    '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">8cm RENKLİ KİLİT TAŞI</li></a>' +
  "</ul>"; details.classList.remove('fade');}, 50);
});

kareTas.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">20x20 6cm NATUREL KARE TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">20x20 6cm RENKLİ KARE TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">10x10 6cm NATUREL KARE TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">10x10 6cm RENKLİ KARE TAŞ</li></a>' +
  "</ul>";
});

prizmaTas.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">10x20 6cm NATUREL PRİZMA TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">10x20 6cm RENKLİ PRİZMA TAŞ</li></a>' +
  "</ul>";
});

ucgenTas.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">6cm NATUREL ÜÇGEN TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">6cm RENKLİ ÜÇGEN TAŞ</li></a>' +
  "</ul>";
});

sekizgenTas.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">6cm NATUREL SEKİZGEN TAŞ</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">6cm RENKLİ SEKİZGEN TAŞ</li></a>' +
  "</ul>";
});

bordur.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">15x50 NATUREL BORDÜR</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">15x50 RENKLİ BORDÜR</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">20x50 NATUREL BORDÜR</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">20x50 RENKLİ BORDÜR</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">30x75 NATUREL BORDÜR</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">30x75 RENKLİ BORDÜR</li></a>' +
  "</ul>";
});

yagmurOlugu.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">25x30x12 NATUREL YAĞMUR OLUĞU</li></a>' +
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">25x30x12 RENKLİ YAĞMUR OLUĞU</li></a>' +
  "</ul>";
});

izTasi.addEventListener("click", function(e){
  details.innerHTML = "<ul>"+
  '<a href="#"><li onclick="image.setAttribute(\'src\', \'img/banner.jpg\')">40x40 SARI İZ TAŞI</li></a>' +
  "</ul>";
});
