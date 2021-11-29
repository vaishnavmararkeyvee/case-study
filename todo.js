var count = 0;
function addlist() {
    var xhttp = new XMLHttpRequest();
    var d = document.getElementById("demo");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var op = "";
            for (let i = 0; i < response.length; i++) {
                if(response[i].completed!=true)
                op += "<div class='d-flex align-items-center'><label><input type='checkbox' class='option-input radio' id='cb' onclick='todo(this)'><span class='label-text' id='t'>" + response[i].title + "</span></label></div><br>";
                else
                op += "<div class='d-flex align-items-center'><label><font color='red'><input type='checkbox' class='option-input radio' id='cb' onclick='todo(this)' checked disabled><span class='label-text'  id='t'>" + response[i].title + "</span></label></font></div><br>";
            }
            //console.log(op);
            d.innerHTML = op;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


function todo(cb) {
    
    if (cb.checked == true) {
        count++;
       cb.parentNode.style.color="red";
        if (count == 5) {
            alert("Congrats!!!You have Successfully Completed 5 Tasks");
        }
    }
    else{
        count--;
        cb.parentNode.style.color="black";
        if (count == 5) {
            alert("Congrats!!!You have Successfully Completed 5 Tasks");
    }
}
}