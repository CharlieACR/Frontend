var posicion = prompt("Introduce la posicion en la serie de fibonacci que deseas:");



console.log(serieFibonacci(posicion));


function serieFibonacci( numero)
{
    if(numero>1)//1
    {
        return serieFibonacci(numero-1) + serieFibonacci(numero-2);
    }
    else
    {
        return numero;
    } 
}