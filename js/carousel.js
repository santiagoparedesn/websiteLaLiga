// Declaramos constante que contiene los elementos del carrusel
const carousel = document.querySelector(".carouselItems");

// Declaramos variables para funcionamiento de carrusel 
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
let interval = null;
let step = 1;

// Funcion Start que contiene un intervalo de inicio de movimiento del carrusel
const start = () => {
    interval = setInterval(function(){
        carousel.scrollLeft = carousel.scrollLeft + step;
        if (carousel.scrollLeft == maxScrollLeft) {
            step = step * -1;
        } else if (carousel.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10);
};

// Funcion Stop que detiene el intervalo, esto detiene el carrusel de imagenes
const stop = () => {
    clearInterval(interval);
};

// Añadimos evento que al colocar el mouse sobre el carrusel, se detiene.
carousel.addEventListener('mouseover', () => {
    stop();
})

// Añadimos evento que al retirar el mouse del carrusel, se activa nuevamente.
carousel.addEventListener('mouseout', () => {
    start();
})

// Al inicial la pagina llamamos la función de inicio de carrusel.
start();