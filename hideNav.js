var root = document.querySelector(':root');
var CSSVar = getComputedStyle(root);
window.addEventListener("dblclick", (e) => {
    e.preventDefault();
    document.getElementById("top-nav").style.display = "none";
    root.style.setProperty('--y-pos', "0px");
    document.getElementById("exitFullScreenBtn").style.display = "inline";
});

function exitFullScreen() {
    root.style.setProperty('--y-pos', "51px");
    document.getElementById("top-nav").style.display = "inline";
    document.getElementById("exitFullScreenBtn").style.display = "none";
};