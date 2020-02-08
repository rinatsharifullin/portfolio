

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
	/*var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	var prefix="";
	var prefix2 = "html/";
	if(page != "index.html"){prefix = "../"; prefix2 = "";}*/
	
	/*Create navigation elements*/
	var navElement;
	var pElement;
	var aElement;
	navElement = document.createElement('nav');
	navElement.id = "myNav";
	pElement = document.createElement('p');			//Create P tag
	aElementHome = document.createElement('a');		//Create A tag
	aElementHome.className="nav";
	aElementHome.href = "index.html";		//Assign to A tag href property
	
	aElementJavaScript = document.createElement('a');	
	aElementJavaScript.className="nav";
	aElementJavaScript.href =  "javascript.html";
	
	aElementCSS = document.createElement('a');	
	aElementCSS.className="nav";
	aElementCSS.href =  "css.html";
	
	aElementBlog = document.createElement('a');	
	aElementBlog.className="nav";
	aElementBlog.href =  "blog.html";
	
	aElementAbout = document.createElement('a');	
	aElementAbout.className="nav";
	aElementAbout.href =  "about.html";
	
	aElementContact = document.createElement('a');	
	aElementContact.className="nav";
	aElementContact.href =  "contact.html";
	
	var textElementHome = document.createTextNode('Home');	//Give to A tag text content
	var textElementJavaScript = document.createTextNode('Java Script Exercises');
	var textElementCSS = document.createTextNode('CSS Exercises');
	var textElementBlog = document.createTextNode('Blog');
	var textElementAbout = document.createTextNode('About');
	var textElementContact = document.createTextNode('Contact');

	
	aElementHome.appendChild(textElementHome);	//Append text content to A tag
	aElementJavaScript.appendChild(textElementJavaScript);	
	aElementCSS.appendChild(textElementCSS);
	aElementBlog.appendChild(textElementBlog);
	aElementAbout.appendChild(textElementAbout);
	aElementContact.appendChild(textElementContact);
	
	pElement.appendChild(aElementHome);	//Append A tag to P tag
	pElement.appendChild(aElementJavaScript);
	pElement.appendChild(aElementCSS);
	pElement.appendChild(aElementBlog);
	pElement.appendChild(aElementAbout);
	pElement.appendChild(aElementContact);
	
	navElement.appendChild(pElement);
	document.body.insertBefore(navElement, document.body.firstChild);
	//document.getElementById("myNav").appendChild(pElement);	//Append P tag to our HTML nav tag.
	
	/*Styling Body*/
	var myBody = document.body;
	myBody.style.margin = 'auto';
	myBody.style.padding = '0';
	myBody.style.maxWidth = '1080px';
	myBody.style.fontFamily = 'font-family: Tahoma, Verdana, Geneva, sans-serif;';
	
	
	/*Style nav*/
	var myNav = document.getElementById("myNav");
	myNav.style.textAlign = 'right';

	/*Styling A tags*/
	var aTags = document.getElementsByClassName("nav");
	for(var position = 0; position<aTags.length; position++){
		aTags[position].style.border = "thin solid #dfe1e5";
		aTags[position].style.padding = "7px 12px";
		aTags[position].style.borderRadius = "5px";
		aTags[position].style.backgroundColor = 'white';
		aTags[position].style.textDecoration = "none";
		aTags[position].style.color = 'gray';
		aTags[position].style.display = 'inline-block';
		aTags[position].style.width = '150px';
		aTags[position].style.textAlign = 'center';
		
		aTags[position].onmouseover = function(){
			this.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
			this.style.textDecoration = "underline";
			this.style.color = "black";
			}
		aTags[position].onmouseout = function(){
			this.style.boxShadow = "none";
			this.style.textDecoration = "none";
			this.style.border = "thin solid #dfe1e5";
			this.style.padding = "7px 12px";
			this.style.borderRadius = "5px";
			this.style.color = "gray";
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