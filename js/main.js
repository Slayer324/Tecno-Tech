// MENÚ HAMBURGUESA
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    btnMenu.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        btnMenu.classList.remove("activo");
    });
});

// ACORDEÓN
const botonesAcordeon = document.querySelectorAll(".acordeon-btn");

botonesAcordeon.forEach(boton => {
    boton.addEventListener("click", () => {

        const contenido = boton.nextElementSibling;

        document.querySelectorAll(".contenido").forEach(item => {
            if(item !== contenido){
                item.style.display = "none";
            }
        });

        if(contenido.style.display === "block"){
            contenido.style.display = "none";
        } else {
            contenido.style.display = "block";
        }
    });
});