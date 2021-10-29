var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    // loop: true,
});
new WOW().init();
function navAction(e) {
    document.getElementById("nav").classList.toggle("nav-opened");
}
document.getElementById("navAction").addEventListener("click", (event) => {
    event.preventDefault();
    navAction(event);
});
document.getElementById("nav").addEventListener("click", (event) => {
    tag = event.target.tagName.toLowerCase();
    if (tag == "li") {
        navAction();
    } else {

    }
});
