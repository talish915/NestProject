$(function() {
    $(".news").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        arrows: false
    });
});
$(document).ready(function(){
  $('.carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  });
});

$(document).ready(function(){
  $('.carousel-product').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });
});

let mapOp = {
  center: [38.752, 48.850],
  zoom: 10,
}

let map = new L.map('map' , mapOp);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);

openInfo()
function openInfo(evt, contentID) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentID).style.display = "block";
  evt.currentTarget.className += " active";
}
  document.getElementById("defaultOpen").click();