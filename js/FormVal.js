var re = /\S+@\S+\.\S+/;

function validate()
{
    let x = document.forms["form"]["name"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["form"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;}
    else{
        if (re.test(y) == false){
            alert("Email must be valid")
            return false;}
        }
}





/*gallery*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);  /*button controls*/
}

function currentSlide(n)
{    
  showSlides(slideIndex = n);   /*thumbnail controls*/
}

function showSlides(n)
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) 
    {slideIndex = 1}
  if (n < 1) 
    {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
    {slides[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) 
    {dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}