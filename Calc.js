function dis(n){
    console.log(`Button ${n} pressed`)  
    document.getElementById("result").innerHTML+= n
}
function solve(){
    try{
        var s= document.getElementById("result").innerHTML;
        console.log(s);
        document.getElementById("result").innerHTML = eval(s)
        console.log(`Button pressed`)  
    }
    catch (error){
 console.log("wrong information format");
    }
   
}
function clr(){
    document.getElementById("result").innerHTML = "";
}
