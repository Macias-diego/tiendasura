let etiquetaBoton=document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS
etiquetaBoton.addEventListener("click",function(){
    console.log("Estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="Hola soy Diego"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="Obvio que voy a ganar"
    mensaje.classList.add("text-danger")
})


