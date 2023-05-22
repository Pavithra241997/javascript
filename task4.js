function data(){
var form1=document.getElementById("form1");
var span=document.getElementById("spn1");
span.innerHTML="<br>Username must be between<br> 3 and 25 characters.";
span.style.color="red";
form1.style.outline="none";
form1.style.border="2px solid red";
}
function data1(){
    var form2=document.getElementById("form2");
    form2.style.outline="none";
    form2.style.border="2px solid green";
}
function data3(){
    var form3=document.getElementById("form3");
    var span3=document.getElementById("spn3");
    span3.innerHTML="<br>Password must hyas at least 8 characters<br>that include at least 1 lowercase character, <br>1 uppercase character,1 number<br> and 1 special character in (!@#$%^&*)";
    span3.style.color="red";
    form3.style.outline="none";
    form3.style.border="2px solid red";
}
function data4(){
    var form4=document.getElementById("form4");
    var span4=document.getElementById("spn4");
    span4.innerHTML="<br>Please enter the password again";
    span4.style.color="red";
    form4.style.outline="none";
    form4.style.border="2px solid red";

}


