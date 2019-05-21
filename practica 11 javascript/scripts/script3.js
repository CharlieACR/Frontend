var array = prompt("Ingersa una serie de numeros separados por espacio:");
console.log("Arreglo original es:" + array);
var txtNum = "";
var numero=0;
var par = 0;
var inpar = 0;
var nan = 0;
array+=' ';
for(var i=0;i<array.length;i++)
{
    if(array.charAt(i)==' ')
    {
        numero = parseInt(txtNum);
        txtNum="";
        console.log(numero);
        if(numero%2==0)
        {
            par++;
        }
        else if(numero%2==1)
        {
            inpar++;
        }
        else if(isNaN(numero))
        {
            nan++;
        }
    }
    else
    {
        txtNum+=array.charAt(i);
    }
}

console.log("Numero de par es: " + par);
console.log("Numero de inpar es: " + inpar);
console.log("Numero de NaN es: " + nan);