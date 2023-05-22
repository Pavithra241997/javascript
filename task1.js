function add(){
var name=document.getElementById("name").value;
var span1=document.getElementById("spn1");
span1.innerHTML=("Required*");
span1.style.color="red";

var email=document.getElementById("email").value;
var span2=document.getElementById("spn2");
span2.innerHTML=("required*");
span2.style.color="red";

var but=document.getElementById("bid");
but.style.backgroundColor="blue";
but.style.color="white";

}
