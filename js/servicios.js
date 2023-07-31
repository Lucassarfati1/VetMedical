// Seleccionamos todos los div de la lista de servicios, que son nombres
const servicios = document.querySelectorAll(".lista-servicios > ul > li > div");

// Seleccionamos todos los div que contienen informacion acerca de cada servicio
        const serviciosTextos = document.querySelectorAll(".informacion-servicios > div");
      // A cada servicio lo ponemos a la escucha de un evento click asi le seteamos el atributo display:none
      // a todos los div que contienen informacion y despues le seteamos el atributo display:block al div que contiene 
      //informacion correspondiente al servicio que desencadeno el evento 
        servicios.forEach((servicio, index) => {
          servicio.addEventListener("click", () => {
            serviciosTextos.forEach((texto) => (texto.style.display = "none"));
            serviciosTextos[index].style.display = "block";
          });
        });
