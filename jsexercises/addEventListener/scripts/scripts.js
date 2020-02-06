console.log('Script file loaded.');

document.addEventListener('DOMContentLoaded', function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();  
    
});


function addMyEventListeners() {
  // select HTML element that requires an event
  var htmlObj = document.getElementById('colorDot');
  // add event to HTML object
  htmlObj.addEventListener('mouseover', changeColor);	
}


function changeColor() {
  // INPUT the HTML object to be manipulated and assign to htmlObj
  var htmlObj = document.getElementById('colorDot');

  if (htmlObj.style.backgroundColor == 'pink') {
    // change the colour of the HTML element
    htmlObj.style.backgroundColor = 'red';
	}
  else {
    // change the colour of the HTML element
    htmlObj.style.backgroundColor = 'pink';
	}
  return true;	
}