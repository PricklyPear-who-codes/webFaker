function email() {
    let subject = prompt("Subject: ");
    let body;
    if (subject != null) {
        body = prompt("Message: ");
        if (body == null || body == "") {
            alert("No Body");
        } else {
            window.open(`mailto:vividdisco12@gmail.com?subject=${subject}&body=${body}`);
        }
    } else {
        alert("Cancelled");
    }
}