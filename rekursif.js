var a = 7;
var b = 5;

function pangkat(a,b)
{
    if(b == 1){
        return a;
    }else {

        return a * pangkat(a,(b-1));
       
    }
}

console.log(pangkat(a,b));