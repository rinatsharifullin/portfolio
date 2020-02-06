console.log('Script file loaded.');

document.addEventListener("DOMContentLoaded", function(){

  console.log('HTML file loaded and parsed.');

  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE THE AREA BELOW ONLY! *** */




  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE THE AREA ABOVE ONLY! *** */
  
});



   
   


 function restore(){
	var myColor = document.getElementById('circle');
	myColor.style.backgroundColor = 'red';
	var text = document.getElementById('myText');
	text.innerText = 'Red Zone';
	text.style.color = 'red';
	var text2 = document.getElementById('myText2');
	text2.style.visibility = 'hidden';
 } 
function changeColor(){
	var myColor = document.getElementById('circle');
	myColor.style.backgroundColor = 'Black';
	var text = document.getElementById('myText');
	text.innerText = 'Black Zone.';
	text.style.color = 'black';
	var text2 = document.getElementById('myText2');
	text2.style.visibility = 'visible';
}










