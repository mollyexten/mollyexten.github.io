const home = document.querySelector("#home button");

home.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo(0, 0);
}
