function viewElement(element) {
    document.getElementById(element).scrollIntoView();
}

window.addEventListener("load", () => {
    console.log(document.getElementById("top-nav").style.width);
});