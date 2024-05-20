function viewElement(element) {
    document.getElementById(element).scrollIntoView();
}

window.addEventListener("dblclick", () => {
    console.log(document.getElementById("top-nav").style.width);
});