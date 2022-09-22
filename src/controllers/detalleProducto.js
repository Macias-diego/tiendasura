console.log("Hola estoy detallando la compra")

//llamar a la memoria 
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]

}
let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria);

//Referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let contenedor=document.getElementById("contenedorEstrellas")
for(let i=1; i<=producto.popularidad;i++){
    let estrella=document.createElement("i")
    estrella.classList.add("bi","bi-star-fill","text-warning")
    contenedor.appendChild(estrella)
}
// referenciar el precio del producto
let precio=document.getElementById("precioinfo")
precio.textContent=producto.precio
let pildora=document.getElementById("pildora")
console.log(pildora.textContent)

//escucho el clic en el boton añadir al carrito
let botonCarrito=document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    
    //agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito

})
