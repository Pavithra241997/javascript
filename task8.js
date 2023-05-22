function demo(){
    var pass=document.getElementById("psw").value;
    var pass1=document.getElementById("rpsw").value;
    document.getElementById("psw").value="";
    document.getElementById("rpsw").value="";

    if(pass===pass1)
    {
        alert("password must be the correct");
    }
    else{
        alert("password mismatch");
    }
}