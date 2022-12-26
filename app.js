const home = document.querySelector("#home button")

home.addEventListener("click", scrollUp);

function scrollUp() {
    window.scrollTo(0, 0);    
    window.location.href = window.location.href.split("#")[0];
}