function MyNamer(){

//First we set the cookie date to a year hence.

var now= new Date();

now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);

//We call the function GetCookie() with the name, "username".

var username = GetCookie("username");

if ((!username)||(username=='null'))

{ username = prompt("Please enter your name:", "");}

setCookie("username", username, now);

if (username) {

document.write(username);

setCookie("username", username, now);

}


function setCookie(name, value) {
	var d = new Date();
	d.setDate(expires.getDate() + (100*60*60*24*100)); // today + 10days
	expires = "expires=" + d.toGMTString();

	document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var carray = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = carray[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function storeInfo() {
	setCookie("id", "hieupham");
	//setCookie("id", document.getElementById("id").value);
	//setCookie("psw", document.getElementById("psw").value);
}

function getInfo() {
	var user = document.getElementById("id");
	user.value = getCookie("id");
	if (user != "") alert("Welcome " + user + "! :)");
	var pass = document.getElementById("psw");
	pass.value = getCookie("psw");
}