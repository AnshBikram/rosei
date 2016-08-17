<html>
<head>
<script src="Files/StudentIssueCoupon.js"></script>
<script></script>
<link rel="stylesheet" type="text/css" href="Files/StudentIssueCoupon.css"/>
<style>
@font-face{font-family: 'Nova Square'; src: url('Files/NovaSquare.ttf');}
body{font-family:'Nova Square';color:white;font-size:80%;}
</style>
<SCRIPT type="text/javascript">
    window.history.forward();
    function noBack() { window.history.forward(); }
</SCRIPT>
</head>
<body onload="check()">
<!-- <body onload="javascript:parent.location.reload();">-->
 







<div id="veg">VEG</div>
<div id="nonveg">NON-VEG</div>
	
	
	
	
	<form style="position:absolute;top:0px;z-index:1;" name="myForm"  action="Servlet/ControllerIssueCoupon" method="POST" enctype="application/x-www-form-urlencoded">
			
			
			<table id="Coupon" ><!--table contains our selection for meal-->
						<tr><!--first row-->
							<th>Date</th>
							<th>Breakfast<!--/Mess2--></th>
							<th>Lunch<!--/Mess2--></th>
							<th>Dinner<!--/Mess2--></th>
						</tr>
						<tr><!--second row-->
							<th>2013-05-27-Mon
</th><!--Naming od ids is <mess1 or mess2><breakfast or lunch or dinner><date column sl no>-->
							<td>
								<div id="mess1b1" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2b1" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l1"onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2l1" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d1" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2d1" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr><!--third row-->	
							<th>2013-05-28-Tue
</th>
							<td>
								<div id="mess1b2" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2b2" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l2" onclick="change2(this)"><p>Roseighara-2(V)
</p></div>
								<!--<div id="mess2l2" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d2" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2d2" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<th>2013-05-29-Wed
</th>
							<td>
								<div id="mess1b3" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2b3" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l3" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2l3" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d3" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2d3" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<th>2013-05-30-Thu
</th>
							<td>
								<div id="mess1b4" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2b4" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l4" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2l4" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d4" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2d4" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<th>2013-05-31-Fri
</th>
							<td>
								<div id="mess1b5" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2b5" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l5" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2l5" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d5" onclick="change2(this)"><p>Not Issued
</p></div>
								<!--<div id="mess2d5" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<th>2013-06-01-Sat
</th>
							<td>
								<div id="mess1b6" onclick="change2(this)"><p>Roseighara-2(V)
</p></div>
								<!--<div id="mess2b6" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l6" onclick="change2(this)"><p>Roseighara-2(V)
</p></div>
								<!--<div id="mess2l6" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d6" onclick="change2(this)"><p>Roseighara-2(N)
</p></div>
								<!--<div id="mess2d6" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<th>2013-06-02-Sun
</th>
							<td>
								<div id="mess1b7" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2b7" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1l7" onclick="change2(this)"><p>Roseighara-2(N)
</p></div>
								<!--<div id="mess2l7" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
							<td align="center">
								<div id="mess1d7" onclick="change2(this)"><p>Roseighara-1(V)
</p></div>
								<!--<div id="mess2d7" style="left:25px;" onclick="change2(this)">Mess 2</div>-->
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<input id="submit" type="submit" value="Roseighara-1" onclick="javascript:document.body.style.cursor='wait';document.getElementById('process').style.visibility='visible';this.style.display='none';submit()"/>
							</td>
							<td>
								<input type="submit" id="submit" value="Cancel" />
							</td>
							<td></td>
						</tr>
					</table>
							

			
			</form>

	<div id="process" style="visibility:hidden;height:100%;z-index:80;width:100%;background:white;color:black;position:absolute;top:0px;left:0px;"><div style="position:absolute;left:230px;top:120px;font-family:'Nova Square';"><center><h1>Processing </h1></center><center><img src="Files/loading.gif" alt="Process"/> </center><center><h3>Please wait</h3></center></div></div>





   	






	
</body>
</html>