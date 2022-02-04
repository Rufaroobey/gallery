var slideIndex = 1; //set the slideIndex to 1 (first picture)
showDivs(slideIndex); // calls to display the first image

function plusDivs(n) { //menthod is called when  user clicks the buttons
  showDivs(slideIndex += n);
} // function adds or subtracts onne to the slideIndex

function showDivs(n) { //function displays and hides elements with the class name "slide" 
   var i;
   var x = document.getElementsByClassName("slide");

   if (n > x.length) {slideIndex = 1}
   if (n < 1) {slideIndex = x.length};

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // hides elemment
  }
  x[slideIndex-1].style.display = "block"; // displays element


  /*
  if the slide index is higher than the number of elements (x.length),
  the slideIndex is set to zero.

  if the slideIndex is less than one it is set to number of elements(x.element).
  */
}