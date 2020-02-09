
document.addEventListener('DOMContentLoaded', function(){
	/*Create navigation elements*/
	var navElement;
	var pElement;
	var aElement;
	var textElement;
	//var myName=["R","i","n","a","t"," ","S","h","a","r","i","f","u","l","l","i","n"];
	var myName=["H","i",","," ","I","'","m"," ","R","i","n","a","t","."," ","F","r","o","n","t"," ","E","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r","."];
	
	var myTimer;

	pElement = document.createElement('p');			//Create P tag
	pElement.className="rinatsharifullin";
	pElement.style.fontSize = '5em';
	pElement.style.textAlign = 'center';
	document.body.appendChild(pElement);
	var q=0;
	var interval = setInterval(function(){
		
			textElement = document.createTextNode(myName[q]);
			
			//console.log(textElement);
			pElement.appendChild(textElement);
			
			q++;
			if(!myName[q]){clearInterval(interval);}
		
		
		},100);
		
	
	
	
});
