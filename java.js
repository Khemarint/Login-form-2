var myusername1="Hiva";
var myusername2="Khemarint";

var mypassword1="123";
var mypassword2="147"

var link="https://www.google.com/";
var link2="https://www.wikipedia.org/";
function login3(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==myusername1 && password==mypassword1){
        document.getElementById("login").href=link;
    }
    else if(username==myusername2 && password==mypassword2){
        document.getElementById("login").href=link2;
    }
}
