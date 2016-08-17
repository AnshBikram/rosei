//var x=document.getElementById('t1');
//var y=document.getElementById('t2');
var flag=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function check(){
	var j=0,id1,id2,id3;
	for(j=1;j<=7;j++)
	{
		id1=document.getElementById('mess1b'+j);
		if(id1.childNodes[0].innerHTML.charAt(0)=='R')
		{
			id1.style.background="rgba(1,84,105,0.8)";
			id1.style.cursor="not-allowed";
			id1.childNodes[0].style.cursor="not-allowed";
		}
		id2=document.getElementById('mess1l'+j);
		if(id2.childNodes[0].innerHTML.charAt(0)=='R')
		{
			id2.style.background="rgba(1,84,105,0.8)";
			id2.style.cursor="not-allowed";
			id2.childNodes[0].style.cursor="not-allowed";
		}
		id3=document.getElementById('mess1d'+j);
		if(id3.childNodes[0].innerHTML.charAt(0)=='R')
		{
			id3.style.background="rgba(1,84,105,0.8)";
			id3.style.cursor="not-allowed";
			id3.childNodes[0].style.cursor="not-allowed";
		}
		
	}

}




var flg=0;
var anime;
function move(id1){
	if(flg==1)
	{	
		document.body.removeChild(anime);
		document.getElementById('move').style.webkitAnimation="";
	}
	var str=id1.innerHTML;	
	var id2=document.getElementById(str);
	var id3=document.getElementById('move');
	var y=id3.offsetLeft;
	var x=-parseInt((parseInt(id2.offsetLeft)-80));
	id3.style.left=x
	keyFrame(y,x);
	
}

function keyFrame(from,to)
{
	anime=document.createElement('style');
	anime.type='text/css';
	anime.id='x';
	var x='@-webkit-keyframes move{from{left:' + parseInt(from) + 'px;} to{left:'+ parseInt(to) +'px;} }';
	var key=document.createTextNode(x);
	anime.appendChild(key);
	document.body.appendChild(anime);
	document.getElementById('move').style.webkitAnimation="move 1s ease-out";
	flg=1;
}


var frame;
var time;
function change2(id1){
	if(id1.childNodes[0].innerHTML.charAt(0)!='R')
	{
		flagIndex=index(id1);
		if(flag[parseInt(flagIndex)]==0)
		{
			modify(id1,1);
		}
		else if(flag[parseInt(flagIndex)]==1)
		{ 
			modify(id1,2);
		}
		else
		{
			modify(id1,0);
		}
	}
}


function submit(){
	document.myForm.submit();
	location.reload(forceGet);
}



var colorVeg="rgba(0,100,0,0.8)";
var colorNonVeg="rgba(237,28,36,0.5)";
var colorInit="rgba(2,96,119,0.5)";


function modify(id1,choice){
	var str=new String(id1.id);
	flagIndex=parseInt(index(id1));
	if(choice==1)
	{
		id1.style.background=colorNonVeg;
		id1.firstChild.innerHTML='Non-Veg';
		flag[parseInt(flagIndex)]=1;
		var pop=document.getElementById('nonveg');
		id1.appendChild(pop);
		pop.style.webkitAnimation="pop2 0.5s ease-out";
		pop.style.webkitAnimation="pop1 0.5s ease-out";
		update(id1,0);
	}
	else if(choice==2)
	{
		id1.style.background=colorVeg;
		id1.firstChild.innerHTML='Veg';
		flag[parseInt(flagIndex)]=2;
		var pop=document.getElementById('veg');
		id1.appendChild(pop);
		pop.style.webkitAnimation="pop1 0.5s ease-out";
		pop.style.webkitAnimation="pop2 0.5s ease-out";
		update(id1,1);
	}
	else
	{
		id1.style.background=colorInit;
		id1.firstChild.innerHTML='Not-Issued';
		flag[parseInt(flagIndex)]=0;
		update(id1,2);
	}
}




var fg=0;
function update(id1,a){
	var str=id1.id;
	var id3='chk'+str.charAt(5)+str.charAt(6);
	var id2='sub'+str.charAt(5)+str.charAt(6);
	var id4=document.getElementById(id3);
	if(a==0){
		id4.checked=true;
		
		if(id2=='subb1')document.myForm.subb1.options[1].selected=true;
		else if(id2=='subb2')document.myForm.subb2.options[1].selected=true;
		else if(id2=='subb3')document.myForm.subb3.options[1].selected=true;
		else if(id2=='subb4')document.myForm.subb4.options[1].selected=true;
		else if(id2=='subb5')document.myForm.subb5.options[1].selected=true;
		else if(id2=='subb6')document.myForm.subb6.options[1].selected=true;
		else if(id2=='subb7')document.myForm.subb7.options[1].selected=true;
		 
		else if(id2=='subl1')document.myForm.subl1.options[1].selected=true;
		else if(id2=='subl2')document.myForm.subl2.options[1].selected=true;
		else if(id2=='subl3')document.myForm.subl3.options[1].selected=true;
		else if(id2=='subl4')document.myForm.subl4.options[1].selected=true;
		else if(id2=='subl5')document.myForm.subl5.options[1].selected=true;
		else if(id2=='subl6')document.myForm.subl6.options[1].selected=true;
		else if(id2=='subl7')document.myForm.subl7.options[1].selected=true;
		
		else if(id2=='subd1')document.myForm.subd1.options[1].selected=true;
		else if(id2=='subd2')document.myForm.subd2.options[1].selected=true;
		else if(id2=='subd3')document.myForm.subd3.options[1].selected=true;
		else if(id2=='subd4')document.myForm.subd4.options[1].selected=true;
		else if(id2=='subd5')document.myForm.subd5.options[1].selected=true;
		else if(id2=='subd6')document.myForm.subd6.options[1].selected=true;
		else if(id2=='subd7')document.myForm.subd7.options[1].selected=true;
		
		}
	else if(a==1)
	{
		id4.checked=true;

		if(id2=='subb1')document.myForm.subb1.options[0].selected=true;
		else if(id2=='subb2')document.myForm.subb2.options[0].selected=true;
		else if(id2=='subb3')document.myForm.subb3.options[0].selected=true;
		else if(id2=='subb4')document.myForm.subb4.options[0].selected=true;
		else if(id2=='subb5')document.myForm.subb5.options[0].selected=true;
		else if(id2=='subb6')document.myForm.subb6.options[0].selected=true;
		else if(id2=='subb7')document.myForm.subb7.options[0].selected=true;
		 
		else if(id2=='subl1')document.myForm.subl1.options[0].selected=true;
		else if(id2=='subl2')document.myForm.subl2.options[0].selected=true;
		else if(id2=='subl3')document.myForm.subl3.options[0].selected=true;
		else if(id2=='subl4')document.myForm.subl4.options[0].selected=true;
		else if(id2=='subl5')document.myForm.subl5.options[0].selected=true;
		else if(id2=='subl6')document.myForm.subl6.options[0].selected=true;
		else if(id2=='subl7')document.myForm.subl7.options[0].selected=true;
		
		else if(id2=='subd1')document.myForm.subd1.options[0].selected=true;
		else if(id2=='subd2')document.myForm.subd2.options[0].selected=true;
		else if(id2=='subd3')document.myForm.subd3.options[0].selected=true;
		else if(id2=='subd4')document.myForm.subd4.options[0].selected=true;
		else if(id2=='subd5')document.myForm.subd5.options[0].selected=true;
		else if(id2=='subd6')document.myForm.subd6.options[0].selected=true;
		else if(id2=='subd7')document.myForm.subd7.options[0].selected=true;
	}
	else {
		id4.checked=false;
		
	}
}


function index(id1){//alert("index in" + id1.id);
	str=id1.id;
	var flagIndex=0;//the flag index corresponding to the id = 6*(d-1)+2*(a-1)+(b-1);
	var a=0;//represents the meal type	
	
		if(str.charAt(5)=='b')
			a=1;
		else if(str.charAt(5)=='l')
			a=2;
		else if(str.charAt(5)=='d')
			a=3;
	var b=parseInt(str.charAt(4));//represents the mess no.
	var d=parseInt(str.charAt(6));//reprents the date serial no.
	flagIndex=6*(parseInt(d)-1)+2*(parseInt(a)-1)+(parseInt(b)-1);
	return flagIndex;
}








