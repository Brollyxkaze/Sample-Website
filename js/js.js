

function automated1(){

	displayDownload();
	addButtons ();
}

function displayDownload(){

	var parent = document.getElementById("btn-c");
	var child = document.getElementById("download");
	parent.removeChild(child);
}

function changeButton(id) {
    id.innerHTML = "Windows Download";
    showButton ();
}

function showButton () {
	document.getElementById("hidden").style.display = "inline";
	// changeBack();
}


function transform () {
		
		document.getElementById("k").style.transitionDuration = "1.5s" ;
		document.getElementById("k").innerHTML = 
		"It Fits just everything you own , Different screen \
		Sizes while preserving all the features without you even \
		noticing that something was changed " ;
		changeImage1();
}


function changeImage1() {
	document.getElementById("image1").src = "img/iphone-rep.png";
	document.getElementById("image1").style.height = "350px" ;
	document.getElementById("image1").style.float = "left" ;
	document.getElementById("image1").style.marginLeft = "4%" ;
	document.getElementById("image1").style.marginTop = "3px" ;
	document.getElementById("image1").style.borderRadius = "87px 87px 87px 87px";
	// document.getElementById("imag1").style.transition = "2s" ;
	// document.getElementById("image1").style.transitionDuration = "1s" ;

}

// function changeBack () {
// 	var x = document.getElementsByClassName("s-section");
//     x[0].style.backgroundImage = "url('../img/home.jpg	')" ;
//     x[0].style.backgroundSize = "cover" ;	
// }

function feature(f) {
	f.style.backgroundColor = "#e74c3c";
	f.style.color = "#252525" ;
	f.style.transition = "1s";
	var feature = f.firstElementChild ;
	feature.style.color = "#252525" ;
}

function featureOut(f) {
	f.style.backgroundColor = "#212224";
	var feature = f.firstElementChild ;
	feature.style.color = "#e74c3c" ;
	feature.style.transition = "1s" ;
}


function section4() {
	var s = document.getElementById("sec4");
	s.style.height = "750px" ;
	s.style.transition = "2s" ;
	var b = document.getElementById("btnSec4");
	var img  = document.getElementById("imgSec4");
	b.style.marginTop = "17%" ;
	b.style.transition = "1.5s" ;
	b.style.display = "none" ;
	img.style.marginRight = "16%" ;
	img.style.marginTop = "-22%" ;
	img.style.transition = "2s" ;
	writeSec4 ();
}

function writeSec4 () {

		document.getElementById("p4").style.transitionDuration = "1s" ;
		document.getElementById("p4").innerHTML = 
		"It Fits just everything you own , Different screen \
		Sizes while preserving all the features without you even \
		noticing that something was changed <br/> \
		It Fits just everything you own , Different screen \
		Sizes while preserving all the features without you even \
		noticing that something was changed " ;
		document.getElementById("p4").style.marginTop = "12%" ;
		document.getElementById("p4").style.marginBottom = "-6%" ;

}

// function changeColor() {
// 	var x = document.getElementsByClassName("btn-blue");
// 		for(i = 0 ; i < x.length ; i++){
// 			x[i].style.backgroundColor = "#00aeef" ;
// 			x[i].style.baxShadowColor = "#00668C" ;
// 		}
// }



function icon(c) {
	c.style.transitionDuration = "2s" ;
	c.style.paddingTop = "77px";

}

function iconout(c) {
	c.style.transitionDuration = "2s" ;
	c.style.paddingTop = "28px";

}

/*VALIDATION*/

window.onload = function() {
	localStorage.setItem("user", "Mahmoud");
	localStorage.setItem("pass", "164978");
  if(checkLogged())
	  {
	  	document.getElementById("log").style.display = "none" ;
	  }
  else 
  	document.getElementById("loggedIn").style.display = "none" ;
}

function checkLogged() {
	if (localStorage.userInput == localStorage.user && localStorage.passInput == localStorage.pass)
		return true;
	else 
		return false;
}

function checkForm(form)
  {
  	localStorage.setItem("userInput", form.user.value);
  	localStorage.setItem("passInput", form.pass.value);
    if (localStorage.userInput == localStorage.user && localStorage.passInput == localStorage.pass)
    	{
    	alert("Login Successful");
		setTimeout(function() {window.location = "login.html" });  
		return true;  	}

    else 
   {
   	alert("Access Denied");
   	return false;
	}  
  }

  function signout () {
  		if (confirm("Are you sure you want to Log out ?"))
  		{
  			localStorage.removeItem('userInput');	
  			localStorage.removeItem('passInput');
  			setTimeout(function() {window.location = "index.html" });  
  		}

  }

  function validate2 () {
  	if(valfName2() && ValEmail2()){
  		return true;
  	}
  	else{
  		return false;
  	}
  }

function validate () {
	if(valfName() && vallName() && ValEmail() && valPass() && valPhone()){
		return true ;
	}
	else {
		return false;
	}
}

function valfName2(){
	var nam= document.form2.name.value;
	var x = nam.length;
	if(x == 0){
		alert("Enter first name");
		document.form2.name.focus();
		return false;
	}
	var let = /[^a-z]/
	var letc = /[A-Z]/
	if(let.test(nam)&& x>0){
		alert("Name can only contain letters");
		document.form2.name.focus();
		return false;
	}
	return true;
	}

function ValEmail2 () {
	var i = 0;
	var em = document.form2.email.value;
	if(em.length == 0){
    alert("Please enter your email");
    var i = 1 ;
    document.form2.email.focus();
    return false;
	}
	var x = em.indexOf(".com");
	var y = em.indexOf("@");
	
	if((x == -1 || y == -1) && i == 0){
		alert("Invalid email");
		document.form2.email.focus();
		return false ;
	}
	return true;
}


function ValEmail () {
	var i = 0;
	var em = document.form1.email.value;
	if(em.length == 0){
    alert("Please enter your email");
    var i = 1 ;
    document.form1.email.focus();
    return false;
	}
	var x = em.indexOf(".com");
	var y = em.indexOf("@");
	
	if((x == -1 || y == -1) && i == 0){
		alert("Invalid email");
		document.form1.email.focus();
		return false ;
	}
	return true;
}
function valPass(){
	var pass = document.getElementById("Password").value;
	var x = pass.length;
	var caps = 0;
	var small = 0;
	var num = 0;
	var i = 0;
	var alrt = "";
	var cor = 1;
	if(x == 0){
		alert("Enter your password");
		document.getElementById("Password").focus();
		return false;
	}

	if (x < 6 && x >0){
		alrt= alrt.concat("Password is too short\n");
		cor = 0;
	}
	no = /[0-9]/
	if(!no.test(pass) && x > 0){
		alrt= alrt.concat("Password has to contain at least one number\n");
		cor = 0;
	}
	cp = /[A-Z]/
	if(!cp.test(pass) && x > 0){
		alrt = alrt.concat("Password has to contain at least one capital letter");
		cor = 0;
	}
	if(cor == 0){
		alert(alrt);
		document.getElementById("Password").focus();
		return false;
	}
	return true;
}
function valfName(){
	var nam= document.form1.first_name.value;
	var x = nam.length;
	if(x == 0){
		alert("Enter first name");
		document.form1.first_name.focus();
		return false;
	}
	var let = /[^a-z]/
	var letc = /[A-Z]/
	if(let.test(nam)&& x>0){
		alert("Name can only contain letters");
		document.form1.first_name.focus();
		return false;
	}
	return true;
	}

function vallName(){
	var nam= document.form1.last_name.value;
	var x = nam.length;
	if(x == 0){
		alert("Enter last name");
		document.form1.last_name.focus();
		return false;
	}
	var let = /[^a-z]/;
	if(let.test(nam)&& x>0){
		alert("Name can only contain letters");
		document.form1.last_name.focus();
		return false;
	}
	return true;
	}

function valPhone(){
	var pho= document.form1.phone.value;
	var x = pho.length;
	var alrt = "";
	var cor = 1;
	if(x == 0){
		alert("Enter Phone number");
		document.form1.phone.focus();
		return false;
	}
	
	if((x < 11 || x> 11) && x > 0){
		alrt = alrt.concat("Phone number has to be 11 digits\n");
		cor = 0;
	}
	var let = /[^0-9]/;
	if(let.test(pho)&& x>0 && x > 0){
		alrt = alrt.concat("Name can only contain digits");
		cor = 0;
	}
	if(cor == 0){
		alert(alrt);
		document.form1.phone.focus();
		return false;
	}
	return true;
	}



	function calcpass(){
	var prog = document.getElementById("passStrengthMeter").value;
	var pass = document.getElementById("Password").value;
	var dig = /[0-9]/;
	var caps = /[A-Z]/;
	var sma = /[a-z]/;
	var score = pass.length;
	
	if(dig.test(pass)){
		score += 4;
	}
	if(caps.test(pass)){
		score+=2;
	}
	score = score *3;
	var inp = score+"";
	
	document.getElementById("passStrengthMeter").value  = score;
}

	var c ;
	c= 0;
	
function sliderN() {
	var btn1 = document.getElementById("slideN");
	var items = document.getElementsByClassName("item1");
	if (c== items.length-1){
		items[c].style.display = "none";
		c = 0 ;
		items[c].style.display = "block";
		return;

	}
	items[c].style.display ="none";
	items[c+1].style.display = "block" ;
	c++ ;
	
}

function sliderP() {
	var btn1 = document.getElementById("slideP");
	var items = document.getElementsByClassName("item1");
	if (c== 0){
		items[c].style.display = "none";
		c = 3 ;
		items[c].style.display = "block";
		return;

	}
	items[c].style.display ="none";
	items[c-1].style.display = "block" ;
	c-- ;
	}