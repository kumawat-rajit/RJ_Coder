var slideIndex =1;

showSlides(slideIndex);

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName('mySlides');
	//console.log(slides.length);
	if(n>slides.length)
	{
		
		slideIndex=1;
	}
	if(n < slides.length)
	{ 
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
	//slides[slideIndex-1].style.display="block";
	slides[slideIndex-1].style.display = "block";  
}