console.log('Script file loaded.');

document.addEventListener("DOMContentLoaded", function(){

  console.log('HTML file loaded and parsed.');

  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE OF THE AREA BELOW ONLY! *** */





  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE OF THE AREA ABOVE ONLY! *** */
  
});


// For this exercise, add an extra field to indicate if customer requires cream.


function processOrder() {
	var customer = document.getElementById('customer').value;
	var ball1 = document.getElementById('ball1').value;
	var ball2 = document.getElementById('ball2').value;
	var ball3 = document.getElementById('ball3').value;
	var ball4 = document.getElementById('ball4').value;
	var ball5 = document.getElementById('ball5').value;
	var creamOrNot = document.getElementById('cream').value;
	
	alert(customer + ' ordered ' + ball1 + ', ' + ball2 + ', ' + ball3 + ', ' + ball4 + ', ' + ball5 + ', ' + creamOrNot);
	
}