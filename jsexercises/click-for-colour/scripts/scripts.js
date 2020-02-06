console.log('Script file loaded.');

document.addEventListener("DOMContentLoaded", function(){

  console.log('HTML file loaded and parsed.');

  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE OF THE AREA BELOW ONLY! *** */

	//Wait when button will be clicked anr run function 'changeColour'
	
	populateDivs();
	document.getElementById('myButton').addEventListener('click', changeColour);	
	
  /* *** FOR OUR UPCOMING EXERCISES, PLEASE
         MAKE USE OF THE AREA ABOVE ONLY! *** */
  
});

// changeColour function after click event
function changeColour() {
	//Define variable containing array of div elements
	var myDiv = document.getElementsByClassName('square');
	
	//Define variable containing array of numbers in P tag
	var myP = document.getElementsByClassName('numbers');
	
	//Get number of square by ID
	var position = document.getElementById('quantity').value - 1;
	
	//Get colour value by ID
	var myColor = document.getElementById('favcolor').value;

	//Change background colour of our square and numbers.
	myDiv[position].style.backgroundColor = myColor;
	myP[position].style.color = myColor;
	//Clear console log to prevent cluttering
	console.clear();
	
	//Look for colored squres and display console log
	for(var q=0; q<myDiv.length; q++){
		if(myDiv[q].style.backgroundColor == ''){
			console.log('Square number ' + (q+1) + ' have colour rgb(255,255,255)');
		}else{console.log('Square number ' + (q+1) + ' have colour ' + myDiv[q].style.backgroundColor);}
	}
}

function populateDivs() {
		var node;
		var pnode;
		var textnode;
		for (var numb=1; numb<25; numb++){
			node = document.createElement("div");
			pnode = document.createElement('p');
			textnode = document.createTextNode(numb);
			pnode.appendChild(textnode);
			node.appendChild(pnode);
			document.getElementById("MySec").appendChild(node);
			
			node.className="square";
			pnode.className="numbers";
			
			node.style.width="33px";
			node.style.height="33px";
			node.style.border="silver solid 0.5px";
			node.style.textAlign="center";
			node.style.display="inline-block";
			node.style.margin="15px";
			pnode.style.position="relative";
			pnode.style.top="20px";
		}
		
	}

