window.addEventListener("load", () => {
    document.getElementById("noti").style.bottom = "15px";
    setTimeout(() => {
        document.getElementById("noti").style.bottom = "-70px";
    }, 3000);
});