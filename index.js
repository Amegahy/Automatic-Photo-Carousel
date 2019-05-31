/* Must be global in order to keep slide counter constant */
var slideIndex = 0;

function startSlides() {

  var i;
  var slides = document.getElementsByClassName("slides");//Array of slides
  var dots = document.getElementsByClassName("dot");//Array of dots

  /* Hide all of the images */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  /* Reset counter if it goes beyond amount of slides */
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }   

  /* Remove the active class from each button */
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  /* Add the active class to the correct dot */
  dots[slideIndex-1].className += " active";

  /* Change image every 4 seconds */
  setTimeout(startSlides, 4000); 
}