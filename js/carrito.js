// Este archivo js es para programar la seccion de carrito, en la cual vamos a
// 1 ingresar todos los productos existentes del carrito y settearles los datos
// 2 , vamos a darle funcionalidad al boton de "eliminar"
// 
// 

// Traemos los objetos productos parseandolo desde json a un array de objetos
    let productosEnCarrito = localStorage.getItem("productos-en-carrito");
    productosEnCarrito=JSON.parse(productosEnCarrito);

// imprimimos en consola para ver si fue efectivo
    console.log(productosEnCarrito);

// Seleccionamos los elementos necesarios para modificar la interfaz de carrito
// 1 texto de carrito vacio
    const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
// 2 div contenedor en el cual vamos a insertar todos los productos que estan en el carrito
    const contenedorCarritoProductos = document.querySelector("#carrito-productos");

// 3 div con las posibles acciones despues de llenar el carrito
    const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");

// 4 Texto para mostrar cuando se compra el carrito
    const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

// 5 Botones "eliminar" de los productos, para sacarlos del carrito, le damos la funcionalidad correspondiente
    let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

// 6 Seleccionamos el boton "Vaciar carrito" para darle funcionalidad

    const botonVaciar = document.querySelector(".carrito-acciones-vaciar");

// 7 Seleccionamos el div "Total" para calcular mejor el numero
    const divTotal = document.querySelector("#total");
// 8 Seleccionamos el boton de "Comprar ahora"
    const comprarAhora = document.querySelector(".carrito-acciones-comprar");
// funcion para cargar los productos que tiene el carrito

function cargarProductosCarrito(){
    //Validamos si hay productos en el carrito, asi los mostramos
    if(productosEnCarrito && productosEnCarrito.length > 0){

         console.log("pasa por aki");
        // agregamos las clases disabled a los elementos que no queremos mostrar, ya que hay productos en el carrito, y escondemos los elementos
        // correspondientes para la interfaz que no hay productos

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoVacio.classList.add("disabled");

        // Setteamos el contenedor del carrito para tenerlo sin productos antiguos

        contenedorCarritoProductos.innerHTML= "";

        //Recorremos todos los productos del carrito para crear un div por cada uno e insertar sus datos(Cantidad, Titulo, precioProducto,precioTotal,
        // ID, Imagen)
        
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            
            

            div.innerHTML = `
            
                        <img src="../Imagenes/Excellent.jpg" class="carrito-producto-imagen" alt="">
                        <div class="carrito-producto-titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
                    
        `;

        // Agregamos el elemento producto tipo div en el contenedor del carrito
        contenedorCarritoProductos.append(div);
    });
    

}else{

    // sino hay productos en carrito, que muestre la interfaz de carrito sin productos
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    }
// Actualizamos los botones "Eliminar" de los productos para que desencadenen el evento cuando se clickea
    actualizarBotonesEliminar();
    // se actualiza el total del div cada vez que se cargan los productos
    actualizarTotal()
}
// Ejecutamos la funcion que va a desplegar todos los productos en el contenedor del carrito
cargarProductosCarrito();

// Actualizamos los botones "Eliminar" de los productos para que desencadenen el evento cuando se clickea


// Funcion para agregarle el evento al boton de eliminar

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton =>{

        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Funcion para eliminar el producto del carrito

function eliminarDelCarrito(e){
    //Traemos el id
    let idBoton = e.currentTarget.id;

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Funcion para vaciar todo el carrito

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
     const totalCalculado = productosEnCarrito.reduce((acc,producto)=> acc + (producto.precio * producto.cantidad),0);
     divTotal.innerText = `$${totalCalculado}`;
    }

comprarAhora.addEventListener("click", comprarCarrito);

function comprarCarrito(){
        productosEnCarrito.length = 0;
    
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
       

    }