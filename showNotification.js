window.addEventListener("load", () => {
    document.getElementById("noti").style.bottom = "15px";
    setTimeout(() => {
        document.getElementById("noti").style.bottom = "-60px";
    }, 3000);
});