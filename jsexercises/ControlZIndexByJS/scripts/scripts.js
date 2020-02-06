document.addEventListener('DOMContentLoaded', function(){

	
  addMyEventListeners();
  
});






/* Keep this function declaration for future projects. Don't need to remove it, 
   even if it doesn't do anything for this exercise.  */
function addMyEventListeners(){
  var pic1 = document.getElementById('a1');
  var pic2 = document.getElementById('a2');
  var pic3 = document.getElementById('a3');
  var pic4 = document.getElementById('a4');

  document.getElementById('p1').addEventListener('click', function(){
	  pic1.style.zIndex='888';
	  pic2.style.zIndex='3';
	  pic3.style.zIndex='2';
	  pic4.style.zIndex='1';
	  })
	document.getElementById('p2').addEventListener('click', function(){
	  pic1.style.zIndex='3';
	  pic2.style.zIndex='888';
	  pic3.style.zIndex='2';
	  pic4.style.zIndex='1';
	  })
	document.getElementById('p3').addEventListener('click', function(){
	  pic1.style.zIndex='3';
	  pic2.style.zIndex='2';
	  pic3.style.zIndex='888';
	  pic4.style.zIndex='1';
	  })
	document.getElementById('p4').addEventListener('click', function(){
	  pic1.style.zIndex='3';
	  pic2.style.zIndex='2';
	  pic3.style.zIndex='1';
	  pic4.style.zIndex='888';
	  })
	

}



