var factorial = parseInt(prompt("Ingresa un numero que quieras su factorial:"));

for(var i=factorial-1;i>0;i--)
{
    factorial*=i;
}

console.log(factorial);