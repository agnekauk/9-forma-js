let btn = document.querySelector(".comment-btn");

let bodyColor = document.querySelector("body");

let formToFill = document.querySelector(".form-to-fill");
btn.addEventListener("click", function () {
    formToFill.classList.toggle("visual");
})

let submit = document.querySelector(".submit-button");

submit.addEventListener("click", function () {
    swal("Gavome!", "Dėkojame už Jūsų nuomonę!", "success");
    formToFill.classList.toggle("visual");
})

let colorBtn = document.querySelector(".color-button");
let randcol = "";
let allchar = "0123456789ABCDEF";

colorBtn.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    };
    bodyColor.style.backgroundColor = "#" + randcol;
    randcol = "";
});
