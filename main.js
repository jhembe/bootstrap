var fname = document.getElementById("first_name").value;
var lname = document.getElementById("last_name").value;
var mname = document.getElementById("middle_name").value;
var myage = document.getElementById("_age").value;



function sendData() {
    document.getElementById("fname_fill").innerHTML = fname;
    document.getElementById("lname_fill").innerHTML = lname;
    document.getElementById("mname_fill").innerHTML = mname;
    document.getElementById("age_fill").innerHTML = myage;

    alert(fname.value);
  }