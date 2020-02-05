
document.addEventListener('DOMContentLoaded', function(){
	/*Create navigation elements*/
	var navElement;
	var pElement;
	var aElement;
	var textElement;
	var myName=["R","i","n","a","t"," ","S","h","a","r","i","f","u","l","l","i","n"];
	var myTimer;

	pElement = document.createElement('p');			//Create P tag
	pElement.className="rinatsharifullin";
	document.body.appendChild(pElement);
	var q=0;
	var interval = setInterval(function(){
		
			textElement = document.createTextNode(myName[q]);
			
			console.log(textElement);
			pElement.appendChild(textElement);
			
			q++;
			if(!myName[q]){clearInterval(interval);}
		
		
		},100);
	
	
	
	
});
