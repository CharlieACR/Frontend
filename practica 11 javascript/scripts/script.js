var numero1=0;
var numero2=0;
var suma=0;

numero1 = prompt("Dame un número");
numero2 = prompt("Dame otro número");

suma = parseInt(numero1) + parseInt(numero2);

if(isNaN(suma))
{
    alert("No estes inventando cosas");
}
else
{
    alert("La suma es: " + suma);
}

var dia=0;

dia = prompt("Dame un numero:");

switch(dia)
{
    case "1":
        dia="Lunes";
        break;
    case "2":
        dia="Martes";
        break;
    case "3":
        dia="Miercoles";
        break;
    case "4":
        dia="Jueves";
        break;
    case "5":
        dia="Viernes";
        break;
    case "6":
        dia="Sabado";
        break;
    case "7":
        dia="Domingo";
        break;
    default:
        dia="No inventes";
}

alert(dia);