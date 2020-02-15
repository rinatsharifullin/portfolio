

document.addEventListener('DOMContentLoaded', function(){
	provideHTMLandStyle();
	window.addEventListener('resize', styleOnResize);
	document.getElementById('mobileicon').addEventListener('click', function(){
		if(document.getElementById('myNav').style.display === 'none'){
			document.getElementById('myNav').style.display = 'block';
			document.getElementById('mobileicon').innerHTML='&#88';
		}else{
			document.getElementById('myNav').style.display = 'none';
			document.getElementById('mobileicon').innerHTML='&#9776';
		}
	})
	//document.getElementById('browserSize').innerHTML  = ('width: ' + window.innerWidth + ', height: ' + window.innerHeight);
});


function styleOnResize(){
	//document.getElementById('browserSize').innerHTML  = ('width: ' + window.innerWidth + ', height: ' + window.innerHeight);
	if(window.innerWidth>'985'){
		styleOver985();
	}else{
		styleUnder985();
	}
}

function styleUnder985(){

	/*Styling A tags*/
	var aTags = document.getElementsByClassName("nav");
	for(var position = 0; position<aTags.length; position++){
		aTags[position].style.fontSize = '2em';
		aTags[position].style.display = 'block';
		aTags[position].style.width = '100%';
	}
	/*Show mobile navigation icon elements*/
	var navElement = document.getElementById('mobileicon');
	navElement.style.display='block';
	//navElement.style.position='absolute';
	navElement.style.fontSize='3vw';
	document.getElementById('myNav').style.display = 'none';
	navElement.onmouseover = function(){
		this.style.cursor = 'pointer';

		}
	navElement.onmouseout = function(){
		this.style.cursor = 'auto';
		}

}

function styleOver985(){
	/*Styling A tags*/
	var aTags = document.getElementsByClassName("nav");
	for(var position = 0; position<aTags.length; position++){
		aTags[position].style.display = 'inline-block';
		aTags[position].style.width = '150px';
		aTags[position].style.fontSize = '1em';
	}
	/*Show mobile navigation icon elements*/
	var navElement = document.getElementById('mobileicon');
	navElement.style.display='none';
	
	document.getElementById('myNav').style.display = 'block';
}
function provideHTMLandStyle(){
	var navElement;
	var pElement;
	var aElement;
	/*Create navigation elements*/
	navElement = document.createElement('nav');
	navElement.id = "myNav";
	pElement = document.createElement('p');			//Create P tag
	aElementHome = document.createElement('a');		//Create A tag
	aElementHome.className="nav";
	aElementHome.href = "index.html";		//Assign to A tag href property
	
	aElementWork = document.createElement('a');	
	aElementWork.className="nav";
	aElementWork.href =  "work.html";
	
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
	var textElementWork = document.createTextNode('Work');
	var textElementBlog = document.createTextNode('Blog');
	var textElementAbout = document.createTextNode('About');
	var textElementContact = document.createTextNode('Contact');

	
	aElementHome.appendChild(textElementHome);	//Append text content to A tag
	aElementWork.appendChild(textElementWork);	
	aElementBlog.appendChild(textElementBlog);
	aElementAbout.appendChild(textElementAbout);
	aElementContact.appendChild(textElementContact);
	
	pElement.appendChild(aElementHome);	//Append A tag to P tag
	pElement.appendChild(aElementWork);
	pElement.appendChild(aElementBlog);
	pElement.appendChild(aElementAbout);
	pElement.appendChild(aElementContact);
	
	navElement.appendChild(pElement);
	document.body.insertBefore(navElement, document.body.firstChild);
	
	/*Create mobile navigation icon elements*/
	navElement = document.createElement('nav');
	navElement.id = "mobileicon";
	navElement.innerHTML='&#9776';
	navElement.style.textAlign='center';
	navElement.style.display='none';
	document.body.insertBefore(navElement, document.body.firstChild);
	
	/*Styling Body*/
	var myBody = document.body;
	myBody.style.margin = 'auto';
	myBody.style.padding = '0';
	myBody.style.maxWidth = '1080px';
	myBody.style.fontFamily = 'font-family: "Calibri", sans-serif';
	
	/*Style nav*/
	var myNav = document.getElementById("myNav");
	myNav.style.textAlign = 'center';

	/*Styling A tags*/
	var aTags = document.getElementsByClassName("nav");
	for(var position = 0; position<aTags.length; position++){
		aTags[position].style.border = "1px solid #ccc";
		aTags[position].style.padding = "7px 12px";
		aTags[position].style.borderRadius = "5px";
		aTags[position].style.backgroundColor = 'white';
		aTags[position].style.textDecoration = "none";
		aTags[position].style.color = 'gray';
		aTags[position].style.textAlign = 'center';

		aTags[position].onmouseover = function(){
			this.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
			this.style.textDecoration = "underline";
			this.style.color = "black";
			}
		aTags[position].onmouseout = function(){
			this.style.boxShadow = "none";
			this.style.textDecoration = "none";
			this.style.border = "1px solid #ccc";
			this.style.padding = "7px 12px";
			this.style.borderRadius = "5px";
			this.style.color = "gray";
			}
	}
	
	if(window.innerWidth>'985'){
		styleOver985();
	}else{
		styleUnder985();
	}
}


