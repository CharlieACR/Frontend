//Forma JQuerry con EmmaScript 6
/*$(()=>
{
    alert("Hola");
}
);*/

window.onload = function()
{
    var miBotonMatar = 0;
    miBotonMatar = document.getElementById("btnMatar");
    console.log(miBotonMatar);
    miBotonMatar.onclick = mensajeMatar
    document.getElementById("divParrafo").onmouseenter = mensajeConsola;

    document.getElementById("divParrafo").onmouseleave = 
    function()
    {
        console.log("Saliste del div");
    }

    document.getElementById("divParrafo").ondblclick = 
    ()=>
    {
        console.log("Diste doble click");
    }
}

function mensajeMatar()
{
    alert("La vas a matar perro!!");
}

function mensajeConsola()
{
    console.log("Entraste al div");
}

/*
//Forma JQuerry
$(function()
    {
        alert("Hola");
    }
)
*/

/*
//Metodo flecha - EmmaScrip 6
window.onload = () =>
{
    alert("Hola");
}*/

/*
Metodo clasico
window.onload = function()
{
    alert("Hola");
}*/

/*
Metodo vieja escuela
window.onload = main();


function main()
{
    alert("Hola");
}*/