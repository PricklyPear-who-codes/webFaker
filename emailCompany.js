function email() {
    let subject = prompt("Subject: ");
    let body;
    if (subject != null) {
        body = prompt("Message: ");
        if (body == null || body == "") {
            alert("No Body");
        } else {
            window.open(`mailto:Tomlinson@bbn-tenexa?subject=${subject}&body=${body}`);
        }
    } else {
        alert("No Subject");
    }
}