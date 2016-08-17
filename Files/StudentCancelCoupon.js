var flag=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var mealType=new Array();
var arrayList=new Array();

var mess='1';
var colorCan="rgba(0,100,0,0.8)";
var colorIss="rgba(1,84,105,0.8)";
var colorInit="rgba(128,175,186,1)";

function check(){
	var j=0,id1,id2,id3;
	for(j=1;j<=7;j++)
	{
		id1=document.getElementById('mess1b'+j);
		if(id1.childNodes[0].innerHTML.charAt(11)!=mess)
		{
			id1.style.background=colorIss;
			id1.style.cursor="not-allowed";
			id1.childNodes[0].style.cursor="not-allowed";
		}
		id2=document.getElementById('mess1l'+j);
		if(id2.childNodes[0].innerHTML.charAt(11)!=mess)
		{
			id2.style.background=colorIss;
			id2.style.cursor="not-allowed";
			id2.childNodes[0].style.cursor="not-allowed";
		}
		id3=document.getElementById('mess1d'+j);
		if(id3.childNodes[0].innerHTML.charAt(11)!=mess)
		{
			id3.style.background=colorIss;
			id3.style.cursor="not-allowed";
			id3.childNodes[0].style.cursor="not-allowed";
		}
		
	}
	setMealType();
}


function setMealType(){
	var j=0;
	for(var i=1;i<=7;i++)
	{
		mealType[j]=document.getElementById('mess'+mess+'b'+i).childNodes[0].innerHTML.charAt(13);
		j++;//alert("mealtype"+(j-1)+"="+mealType[j-1]);
		mealType[j]=document.getElementById('mess'+mess+'l'+i).childNodes[0].innerHTML.charAt(13);
		j++;//alert("mealtype"+(j-1)+"="+mealType[j-1]);
		mealType[j]=document.getElementById('mess'+mess+'d'+i).childNodes[0].innerHTML.charAt(13);
		j++;//alert("mealtype"+(j-1)+"="+mealType[j-1]);
	}
}


function change2(id1){//alert();
	//var str=new String(id1.id);//alert("change 2 in" + id1.id);
	if(id1.childNodes[0].innerHTML.charAt(11)==mess||id1.childNodes[0].innerHTML.charAt(0)=='C')
	{
		flagIndex=index(id1);
		if(flag[parseInt(flagIndex)]==0)
		{
			//complement(id1);
			modify(id1,1);
			//addFrame(id1);
		}
		else
		{ 
			//complement(id1);
			modify(id1,0);
			//addFrame(id1);
		}
	}
}


function modify(id1,choice){//alert("modify in" + id1.id);
	var str=new String(id1.id);
	//var DisplayId=str.substring(5,7)+str.charAt(4);//corresponding id in the matrix 
	//var id2=document.getElementById(DisplayId);
	//var InnerText='M'+' '+str.charAt(4);//mmatrix division values
	flagIndex=parseInt(index(id1));
	if(choice==1)
	{
		id1.style.background=colorCan;
		id1.firstChild.innerHTML='Cancelled';
		flag[parseInt(flagIndex)]=1;
		//update(id1,0);
	}
	else
	{
		id1.style.background=colorInit;//alert(index(id1));alert(mealType[index(id1)]);
		id1.firstChild.innerHTML='Roseighara-'+mess+'('+mealType[index(id1)/2]+')';
		flag[parseInt(flagIndex)]=0;
		// update(id1,2);
	}//alert("modify out" + id1.id);
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
	flagIndex=6*(parseInt(d)-1)+2*(parseInt(a)-1)+(parseInt(b)-1);//alert("index out" + id1.id);
	return flagIndex;
}


function createArray(){
	var j=0;
	for(var i=1;i<=7;i++)
	{
		var meal1=document.getElementById('mess1b'+i);
		var meal2=document.getElementById('mess1l'+i);
		var meal3=document.getElementById('mess1d'+i);
		if(meal1.childNodes[0].innerHTML=='Cancelled')
		{
			arrayList[j]='date['+i+']b'+mess+mealType[parseInt(index(meal1)/2)];
			j++;
		}
		if(meal2.childNodes[0].innerHTML=='Cancelled')
		{
			arrayList[j]='date['+i+']l'+mess+mealType[parseInt(index(meal2)/2)];
			j++;//alert(arrayList[j-1]);
		}
		if(meal3.childNodes[0].innerHTML=='Cancelled')
		{
			arrayList[j]='date['+i+']d'+mess+mealType[parseInt(index(meal1)/2)];
			j++;
		}
	}		
}