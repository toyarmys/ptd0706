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

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});

var page = 1;

function showPage(page) {
    $('.pagination .post:not(#page'+page+')').hide();
    $('.pagination .post#page'+page).show();
}

function prevPage() {
    if (page == 1) {
        page = $('.pagination .post').length;
    } else {
        page--;
    }
    showPage(page);
}

function nextPage() {
    if (page == $('.pagination .post').length) {
        page = 1;
    } else {
        page++;
    }
    showPage(page);
}

$(document).ready(function() {
    showPage(page);
    $('#prev').click(prevPage);
    $('#next').click(nextPage);
});

var a = document.getElementsByClassName("prev-next");
var b = document.getElementsByClassName("prev-next-btn");
$(function(){
for (var i = 0; i < b.length; i++) {
  b[i].addEventListener("click", function() {
  var currents = document.getElementsByClassName("activate");
  currents[0].className = currents[0].className.replace(" activate", "");
  this.className += " activate";
    });
  }
}); 

function saveFile(){
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Mail").value;
  var title = document.getElementById("Title").value;
  var comment = document.getElementById("Comment").value;
  if(name == ""){
    alert("Bạn chưa nhập tên");
    return false;
  }
  else if(email == ""){
    alert("bạn chưa nhập email");
    return false;
  }
  else{
    let data = 
            '\r Name: ' + name + ' \r\n ' +  
            'Email: ' + email + ' \r\n ' + 
            'Title: ' + title + ' \r\n ' + 
            'Comment: ' + comment;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';    // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
      }
}
