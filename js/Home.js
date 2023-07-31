// Seleccionamos todos los botones del nav
const botonesCategorias = document.querySelectorAll(".boton-categoria");

// Ponemos a la escucha de un evento click a cada boton del nav con un for each, para sacarle la clase active a todos
// los botones y se lo agregamos solo al boton que desencadeno el evento

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
    })
});