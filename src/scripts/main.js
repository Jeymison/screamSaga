document.addEventListener("DOMContentLoaded", function() {
    const elementoAnimado = document.querySelector(".galeria div");

    elementoAnimado.addEventListener("click", function() {
        elementoAnimado.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(100px)' }
        ], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out'
        });
    });
});



