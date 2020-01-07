function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
  document.getElementById("openSpan").style.visibility = "hidden";
  document.getElementById("close").style.visibility = "visible";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("openSpan").style.visibility = "visible";
  document.getElementById("close").style.visibility = "hidden";
}

var header = document.getElementsByClassName("sidenav");
var btns = document.getElementsByClassName("btn");
$(function(){
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("current-page");
  current[0].className = current[0].className.replace(" current-page", "");
  this.className += " current-page";
  });
}
});

$(document).ready(function () {
    $('.project-img1 .gallery li:lt(4)').show();
    $('.less').hide();
    var items =  12;
    var shown =  4;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.project-img1 .gallery li:visible').length+4;
        if(shown< items) {
          $('.project-img1 .gallery li:lt('+shown+')').show(300);
        } else {
          $('.project-img1 .gallery li:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.project-img1 .gallery li').not(':lt(4)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});