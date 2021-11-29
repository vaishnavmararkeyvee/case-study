function validate(show) {
    var em = document.getElementById("uname");
    var pw = document.getElementById("psw");
    console.log(em.value,pw.value);
    if (em.value == "admin" && pw.value == "12345") {
        em.value = "";
        pw.value = "";
        show();
        return true;
    }
    else {
        alert("Incorrect Username or Password! Try again");
        em.value = "";
        pw.value = "";
        return false;
    }
}

function show(){
    window.location.href = "main.html";
}
