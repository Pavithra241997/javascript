var sum=5;
for(i=0;i<10;i++){
    if(i%3===0||i%5===0){
        sum+=i
    }
}
console.log(sum);

var assume=100;
for(i=0;i<=assume;i++)
{
    if((i%3===0)&&(i%5===0)){
        console.log("fizz buzz")
    }
    else if(i%3===0){
        console.log("fizz");
    }
    else if(i%5===0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

var a=56;
var b=24;
var c=0;
for(var i=1;i<=a && i<=b;i++){
    if(a%i==0 && b%i==0){
        c=i;
    }
}
console.log("The GCD value of",a,"and",b,"is:",c);