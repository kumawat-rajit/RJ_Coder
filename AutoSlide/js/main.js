var slideIndex =0;

showSlides();



function showSlides()
{
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName("dot");
	//console.log(slides.length);
	
	
	slideIndex++;
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
if (slideIndex > slides.length) {slideIndex = 1}  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

	//slides[slideIndex-1].style.display="block";
	slides[slideIndex-1].style.display = "block";  
	 dots[slideIndex-1].className += " active";
	 setTimeout(showSlides,2000);
}