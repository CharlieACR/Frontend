var flag_void = true;

window.onload = function()
{
    document.getElementById("btnMensaje").addEventListener("click", mostrarMensaje);
    document.getElementById("btnSumar").addEventListener("click", sumarNumeros);
    document.getElementById("txtApellidoP").addEventListener("focus", function(event){itemSelected(event.target.id);});
    document.getElementById("txtApellidoM").addEventListener("focus", function(event){itemSelected(event.target.id);});
    document.getElementById("txtNombre").addEventListener("focus", function(event){itemSelected(event.target.id);});
    document.getElementById("txtApellidoP").addEventListener("focusout", function(event){itemUnselected(event.target.id);});
    document.getElementById("txtApellidoM").addEventListener("focusout", function(event){itemUnselected(event.target.id);});
    document.getElementById("txtNombre").addEventListener("focusout", function(event){itemUnselected(event.target.id);});
    document.getElementById("txtApellidoP").addEventListener("input", function(event){itemIn(event.target.id);});
    document.getElementById("txtApellidoM").addEventListener("input", function(event){itemIn(event.target.id);});
    document.getElementById("txtNombre").addEventListener("input", function(event){itemIn(event.target.id);});
}

function mostrarMensaje()
{
    var mensaje = document.getElementById("txtMensaje").value;
    alert(mensaje);
}

function sumarNumeros()
{
    var numero1 = parseInt(document.getElementById("txtNumero1").value);
    var numero2 = parseInt(document.getElementById("txtNumero2").value);

    alert("La suma de los numero es: "+(numero1+numero2));
}

function itemSelected(item)
{
    if(flag_void)
    {
        document.getElementById(item).style.background = "red";
    }

}

function itemUnselected(item)
{
    if(flag_void)
    {
        document.getElementById(item).style.background = "green";
    }
}

function itemIn(item)
{
    if(document.getElementById(item).value!="")
    {
        flag_void = false;
        document.getElementById(item).style.background = "yellow";
    }
    else
    {
        flag_void=true;
    }
}

