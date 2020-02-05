

document.addEventListener('DOMContentLoaded', function(){

  populateContent();
});






/* Keep this function declaration for future projects. Don't need to remove it, 
   even if it doesn't do anything for this exercise.  */

/*
const p = document.createElement("p");
p.textContent = "test1";
document.body.insertBefore(p, document.body.firstChild);

*/




function populateContent() {
	/*Manage navigation paths depends of from what page*/
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	var prefix="";
	var prefix2 = "html/";
	if(page != "index.html"){prefix = "../"; prefix2 = "";}
	
	/*Create navigation elements*/
	var navElement;
	var pElement;
	var aElement;
	navElement = document.createElement('nav');
	navElement.id = "myNav";
	pElement = document.createElement('p');			//Create P tag
	aElementHome = document.createElement('a');		//Create A tag
	aElementHome.className="nav";
	aElementHome.href = prefix + "index.html";		//Assign to A tag href property
	
	aElementJavaScript = document.createElement('a');	
	aElementJavaScript.className="nav";
	aElementJavaScript.href = prefix2 + "javascript.html";
	
	aElementCSS = document.createElement('a');	
	aElementCSS.className="nav";
	aElementCSS.href = prefix2 + "css.html";
	
	var textElementHome = document.createTextNode('Home');	//Give to A tag text content
	var textElementJavaScript = document.createTextNode('Java Script');
	var textElementCSS = document.createTextNode('CSS');

	
	aElementHome.appendChild(textElementHome);	//Append text content to A tag
	aElementJavaScript.appendChild(textElementJavaScript);	
	aElementCSS.appendChild(textElementCSS);
	
	pElement.appendChild(aElementHome);	//Append A tag to P tag
	pElement.appendChild(aElementJavaScript);
	pElement.appendChild(aElementCSS);
	
	navElement.appendChild(pElement);
	document.body.insertBefore(navElement, document.body.firstChild);
	//document.getElementById("myNav").appendChild(pElement);	//Append P tag to our HTML nav tag.
	
	/*Styling Body*/
	var myBody = document.body;
	myBody.style.margin = 'auto';
	myBody.style.padding = '0';
	myBody.style.width = '1080px';
	
	/*Style nav*/
	var myNav = document.getElementById("myNav");
	myNav.style.textAlign = 'right';

	/*Styling A tags*/
	var aTags = document.getElementsByClassName("nav");
	for(var position = 0; position<aTags.length; position++){
		aTags[position].style.border = "thin solid #dfe1e5";
		aTags[position].style.padding = "7px 12px";
		aTags[position].style.borderRadius = "15px";
		aTags[position].style.textDecoration = "none";
		
		aTags[position].onmouseover = function(){
			this.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
			this.style.textDecoration = "underline";
			}
		aTags[position].onmouseout = function(){
			this.style.boxShadow = "none";
			this.style.textDecoration = "none";
			this.style.border = "thin solid #dfe1e5";
			this.style.padding = "7px 12px";
			this.style.borderRadius = "15px";
			}
	}

	
	
	/*
	border:solid #dfe1e5 1px;
	padding:7px 12px;
	border-radius:15px;
	text-decoration:none;*/

	
	/*
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
	}*/
		
}