function email() {
    let subject = prompt("Subject: ");
    let body;
    if (subject != null) {
        body = prompt("Message: ");
        if (body == null || body == "") {
            alert("No Body");
        } else {
            window.open(`mailto:someone@example.com?subject=${subject}&body=${body}`);
        }
    } else {
        alert("Cancelled");
    }
}