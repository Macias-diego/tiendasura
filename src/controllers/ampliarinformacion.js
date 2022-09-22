let contenedorproductos=document.getElementById("fila")

//ESCUCHO CLIC EN LA FILA

let informacionProducto={}
contenedorproductos.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("h2").textContent)
        informacionProducto.popularidad=(evento.target.parentElement.querySelector("h4").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("p").textContent)
        informacionProducto.foto=(evento.target.parentElement.querySelector("img").src)
        
        //GUARDAR UN OBJETO EN MEMORIA
        
        localStorage.setItem("producto",JSON.stringify(informacionProducto))

        window.location.href="./ampliarinfo.html"
        
    }        
            
                
                        
    
})











