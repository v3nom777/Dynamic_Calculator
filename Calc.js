function dis(n){
    console.log(`Button ${n} pressed`)  
    document.getElementById("result").innerHTML+= n
}
function solv(){
    try{
        var s= document.getElementById("result").innerHTML;
        console.log(s);
        document.getElementById("result").innerHTML = eval(s)
        console.log(`Button ${n} pressed`)  
    
    }
    catch (error){
 alert("wrong information format");
    }
   
}
function clr(){
    document.getElementById("result").innerHTML = "";
}
