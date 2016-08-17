<html>
<head>
<style>
@font-face{font-family: 'Nova Square'; src: url('Files/NovaSquare.ttf');}
body{font-family:'Nova Square';color:white;}
#screen{position:fixed; left:0px; top:0px; height:100%; width:100%; background:rgba(41,41,41,0.4); z-index:50;}
form{margin:10%;margin-top:20%;}
table{min-height:420px; height:100%;}
table td{background:rgba(3,107,129,1);border-radius:5px;padding:5px;cursor:pointer;font-size:50%;}
table th{background:rgba(3,107,129,1);border-radius:5px;padding:5px;cursor:default;font-size:80%;}
table input{border:none;box-shadow:1px 1px 2px black,-1px -1px 2px black;background:rgba(3,107,129,1);color:white;border-radius:5px;padding:8px;cursor:text;font-size:110%;width:300px;}
#screen table{min-height:200px; height:30%;}
#screen table td{background:rgba(3,107,129,1);border-radius:5px;padding:5px;cursor:pointer;font-size:80%;height:20px;}
#screen table th{background:rgba(3,107,129,1);border-radius:5px;padding:10px;cursor:default;font-size:90%;}
#screen table input{font-family: 'Nova Square';border:none;box-shadow:1px 1px 2px black,-1px -1px 2px black;background:rgba(3,107,129,1);color:white;border-radius:5px;padding:10px;cursor:text;font-size:90%;width:220px;}
#submit:hover{box-shadow:inset 1px 1px 2px black,inset -1px -1px 2px black;}
#cancel:hover{box-shadow:inset 1px 1px 2px black,inset -1px -1px 2px black;}


</style>
<script>

function show(id1)
{
	document.getElementById('screen').style.display='block';
	var y=id1.innerHTML.split('/');
	if(y.length>1)
		y.length--;
	var id2=document.getElementById('veg');
	id2.value=y;
	var x=id1.innerHTML.split('/');
	var id3=document.getElementById('nonveg');
	if(x.length>1)
		id3.value=x[x.length-1];
	var id4=document.getElementById('day');
	id4.value=id1.id;
	
}


function hide1()
{
	document.getElementById('screen').style.display='none';
}
</script>
</head>
<body>	
	<center>
		<div id="screen" style="display:none;">
			<div>
				<form action="#" method="post">
					<table>
						<tr>
							<th>VEG :</th>
							<td><input id="veg" name="veg" type="text" /></td>
							
						</tr>
						<tr>
							<th>NON-VEG :</th>
							<td><input id="nonveg" name="nonveg" type="text" /></td>
							
						</tr>
						<tr>
							<td><input id="submit" style="cursor:pointer" type="button" value="Cancel" onclick="hide1()" /></td>
							<td><input id="cancel" style="cursor:pointer" type="submit" value="Submit"/></td>
							
						</tr>
					</table>
					<input style="display:none;" id="day" name="day" type="text" />
				</form>
			</div>
		</div>
	</center>
	
	<table id="menu">
		<tr>
			<th>Day/Meal</th>
			<th>Breakfast</th>
			<th>Lunch</th>
			<th>Dinner</th>
		</tr>
		<tr>
			<th>Mon</th>
			<td id="monbf" onclick="show(this)">Puri[5pcs],matar aloo curry</td>
			<td id="monlun" onclick="show(this)">Rice,Dalma,Bhaja,Papad</td>
			<td id="mondin" onclick="show(this)">Rice,Roti,Dal,Cauliflower curry,Aloo bharta</td>
		</tr>				
		<tr>
			<th>Tue</th>
			<td id="tuebf" onclick="show(this)">Bara(4 pcs),Matar aloo curry</td>
			<td id="tuelun" onclick="show(this)">Rice,Dal,Cabbage curry,Bhaja</td>
			<td id="tuedin" onclick="show(this)">Rice,Roti,Dal,Chana masala,Aloo dum fry</td>
		</tr>
		<tr>
			<th>Wed</th>
			<td id="wedbf" onclick="show(this)">Aloo poha,Sauce,Tea(1 cup)</td>
			<td id="wedlun" onclick="show(this)">Rice,dal,pampad/salad,paneer curry/chicken curry</td>
			<td id="weddin" onclick="show(this)">Rice,Roti,Dal,Pakudi aloo curry,Bhaja/</td>
		</tr>
		<tr>
			<th>Thu</th>
			<td id="thubf" onclick="show(this)">Idli(5pcs),Sambar,Chutney,</td>
			<td id="thulun" onclick="show(this)">Zeera rice,Aloo curry,Dahi boondi</td>
			<td id="thudin" onclick="show(this)">Rice,Roti,Dal,Matar aloo paneer</td>
		</tr>
		<tr>
			<th>Fri</th>
			<td id="fribf" onclick="show(this)">Upma,Matar aloo curry/</td>
			<td id="frilun" onclick="show(this)">Rice,Dal,Paneer/Chicken,Salad/Papad</td>
			<td id="fridin" onclick="show(this)">Rice,Roti,Dal,Soyabean aloo curry,Bhaja</td>
		</tr>
		<tr>
			<th>Sat</th>
			<td id="satbf" onclick="show(this)">Chowmin</td>
			<td id="satlun" onclick="show(this)">Rice,Palak dal,Rasam,Cabbage 65</td>
			<td id="satdin" onclick="show(this)">Rice,Roti,Dal,Manchurian/Egg(2),Achar</td>
		</tr>
		<tr>
			<th>Sun</th>
			<td id="sunbf" onclick="show(this)">Aloo chop,Samosa,Matar  aloo curry/</td>
			<td id="sunlun" onclick="show(this)">Rice,dal,1/2 lemon,mix veg chilly/fish curry</td>
			<td id="sundin" onclick="show(this)">Rice,Roti,Dal,Paneer aloo curry,Achar/Chilly chicken</td>
		</tr>
	</table>




</body>
</html>