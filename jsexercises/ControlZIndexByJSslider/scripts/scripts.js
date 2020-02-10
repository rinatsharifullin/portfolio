document.addEventListener('DOMContentLoaded', function(){

    var pic1 = document.getElementById('a1');
	var pic2 = document.getElementById('a2');
	var pic3 = document.getElementById('a3');
	var pic4 = document.getElementById('a4');
	var q=0;
	var interval = setInterval(function(){
		
		if(q==0){
			pic1.style.zIndex='888';
			pic2.style.zIndex='0';
			pic3.style.zIndex='0';
			pic4.style.zIndex='0';
		}else if(q==1){
			  pic2.style.zIndex='888';
			  pic1.style.zIndex='0';
			pic3.style.zIndex='0';
			pic4.style.zIndex='0';
		}else if(q==2){
			  pic3.style.zIndex='888';
			  pic1.style.zIndex='0';
			pic2.style.zIndex='0';
			pic4.style.zIndex='0';
		}else if(q==3){
			  pic4.style.zIndex='888';
			  pic1.style.zIndex='0';
			pic2.style.zIndex='0';
			pic3.style.zIndex='0';
			  q=-1;
		};
		
		q++;
		},1000);
  
});






