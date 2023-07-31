// Dejamos los distintos productos, asi vemos como funciona la pagina
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Gatos 01",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Gatos 02",
        imagen: "../Imagenes/ExcellentGatosAdultos.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Gatos 03",
        imagen: "../Imagenes/ExcellentGatosBebes.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Gatos 04",
        imagen: "../Imagenes/GatosAdultosCastrados.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Gatos 05",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Perros 01",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Perros 02",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Perros 03",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Perros 04",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Perros 05",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Perros 06",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Perros 07",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Perros 08",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Gatos bebe 01",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Gatos bebe 02",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Gatos bebe 03",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Gatos bebe 04",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Gatos bebe 05",
        imagen: "../Imagenes/Excellent.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar=document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector(".numerito");

function cargarProductos(){
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        console.log("Pasa por aca");
        div.innerHTML = `
            <img src="${producto.imagen}" class="producto-imagen" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.titulo}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}


cargarProductos();

function actualizarBotonesAgregar(e){
    botonesAgregar=document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton=> {
        boton.addEventListener("click", agregarAlCarrito);

        });
    }
    let productosEnCarrito;
    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
    
    if(productosEnCarritoLS){
        
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    }else{
        productosEnCarrito = [];
    }


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado= productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    console.log(productosEnCarrito);
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto)=> acc+producto.cantidad,0);
    numerito.innerText= nuevoNumerito;
}