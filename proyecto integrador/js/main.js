// Frog Store
console.log(document.title + "\n---------------------------");

// ------------------------Image Slider------------------------

let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// ###################  panel responsive ###################

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
// console.log(menu);
// console.log(menuLinks);

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

//********************** accordion ************************
const accordionTitles = document.querySelectorAll(".accordion-faq");

for (let i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener("click", function () {
        console.log(this);
        this.classList.toggle("accordion-faq--open");
    });
}

// ********************* Modal kart ************************

const carrito = document.querySelector(".btn-cart-toggle");
const cartContainer = document.querySelector(".cart-container");
console.log(cartContainer);
// console.log(carrito);

let i = 0;
carrito.addEventListener("click", function () {
    if (i == 0) {
        console.log("Mostrar el Carrito...");
        cartContainer.classList.toggle("showUp");
        carrito.classList.toggle("color-btn-cart");
        i = 1;
    } else {
        cartContainer.classList.toggle("showUp");
        console.log("Ocultar el Carrito...");
        carrito.classList.toggle("color-btn-cart");
        i = 0;
    }
});

const carritoOff = document.querySelector(".close-button");
// console.log(carritoOff);
carritoOff.addEventListener("click", function () {
    if (i == 0) {
        console.log("Mostrar el Carrito...");
        cartContainer.classList.toggle("showUp");
        carrito.classList.toggle("color-btn-cart");
        i = 1;
    } else {
        cartContainer.classList.toggle("showUp");
        console.log("Ocultar el Carrito...");
        carrito.classList.toggle("color-btn-cart");
        i = 0;
    }
});

// **  cuando se presiona el boton de escape. **

onkeydown = function (ev) {
    if (ev.key === "Escape") {
        cartContainer.classList.remove("showUp");
        console.log("Cerrar carrito");
        console.log("se presiono la tecla 'esc' ");
        cartIsOpen = false;
    } else {
        console.log(`se presiono la tecla: ${ev.key}`);
    }
};

console.log("Hello there!");
