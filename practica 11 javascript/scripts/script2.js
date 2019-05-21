var mensaje = "";

mensaje = prompt("Escribe un mensaje");

console.log(HolaMundo(mensaje));

var numero = parseInt(prompt("Introduce un numero"));

console.log("El numero es primo?: " + isPrimo(numero));

function HolaMundo(txt)
{
    return txt;
}

function isPrimo(primo)
{
    var flag_primo=true;
    for(var i=primo-1;i>1;i--)
    {
        if(primo%i==0)
        {
            flag_primo=false;
        }
    }
    return flag_primo;
}