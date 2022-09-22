let etiquetaBoton=document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS
etiquetaBoton.addEventListener("click",function(){
    console.log("Estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="Hola soy Diego"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="Obvio que voy a ganar"
    mensaje.classList.add("text-danger")
    let foto=document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/dario%20gomez.webp?alt=media&token=ec8830ef-fb7c-44b4-ab7a-e3e1e95040ce"

})


