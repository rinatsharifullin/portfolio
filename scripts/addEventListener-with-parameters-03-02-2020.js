console.log('Script file loaded.');

document.addEventListener('DOMContentLoaded', function(){
	colourMe();
  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
});

/* Keep this function declaration for future projects. Don't need to remove it, 
   even if it doesn't do anything for this exercise.  */
function addMyEventListeners(){
  var kubik = document.getElementsByClassName('divContainers');
  for(var q=0; q<kubik.length; q++){
	  kubik[q].addEventListener('click',function(){
		  divClicked(this);
	  } )
  }

}

function divClicked(divNo) {
	var budy = document.getElementById('a7');
	budy.style.backgroundColor = divNo.style.backgroundColor;
	if(budy.style.borderRadius == '50%'){
		budy.style.borderRadius = '0%';
	}else{budy.style.borderRadius = '50%';}
	
}

function colourMe(){
	var kubik = document.getElementsByClassName('divContainers');
	kubik[0].style.backgroundColor="red";
	kubik[1].style.backgroundColor="blue";
	kubik[2].style.backgroundColor="maroon";
	kubik[3].style.backgroundColor="black";
	kubik[4].style.backgroundColor="aqua";
	kubik[5].style.backgroundColor="yellow";
}