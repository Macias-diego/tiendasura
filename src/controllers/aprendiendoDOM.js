//PASOS PARA CONTROLAR UNA ETIQUETA

//1. CONTROLANDO EL CONTENIO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA (ELEMENTO)
etiquetaTitulo.textContent="boss pague pues hptaaaaaaaaa"

//1.2 MANIPULANDO EL SRC (FUENTE)
etiquetaImagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14mDPv37RuJp7yHvwo0jE5TMZoGUZPVLsCQ&usqp=CAU"

//*CONTRAOLANDO EL DIESEÑO
let parrafo=document.getElementById("parrafo")
parrafo.textContent="fuck your self"

//2.1 AGREGANDO UN ESTILO (CLASS)
//text-danger
parrafo.classList.add("text-danger", "fs-1")


etiquetaImagen.classList.add("d-block","mx-auto")

//2.2 QUITAR O ELIMINAR UN ESTILO
parrafo.classList.remove("text-danger")
