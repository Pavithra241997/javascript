function data1(){
    var pass=document.getElementById("name").value;
    var pass1=document.getElementById("psw").value;
    if((pass=="pavi")||(pass1.length>6))
    {
        alert("Your password and username correct");
    }
    else
    {
        alert("mismatch");
    }
}