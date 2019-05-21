var temp = "";

window.onload = function()
{
    var miBoton = 0;
    miBoton = document.getElementById("btnBoton");
    miBoton.addEventListener("click", miFuncion);

    document.getElementById("btnBorrar").addEventListener("click", borrarTexto);
    document.getElementById("btnRojo").addEventListener("click", cambiarRojo)
    document.getElementById("btnAparecer").addEventListener("click", aparecerTexto)
}

function miFuncion()
{
console.log("Diste en el boton!!");
}

function borrarTexto()
{
    temp = document.getElementById("parrafo").innerHTML;
    document.getElementById("parrafo").innerHTML = "";
}

function cambiarRojo()
{
    document.getElementById("parrafo").style.backgroundColor="#FF0000";
}

function aparecerTexto()
{
    document.getElementById("parrafo").innerHTML = temp;
}