function checkCreds(){
    console.log("checkCreds is running");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumber = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    //alert("Hello " + fullName);

    if(fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid name!";
    } else if (badgeNumber > 999 || badgeNumber < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";
    } else {
        alert("Welcome " + fullName + "!");
        location.replace("index.html");
    }
}