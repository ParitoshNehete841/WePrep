function fun1() {

    var username = document.querySelector("#unm").value;
    var password = parseInt(document.querySelector("#pwd").value);


    C1 = "Madhura";
    C2 = 123;


    if (C1 === username) {
        if (C2 === password) {
            alert("Welcome " + username);
            window.open('courses.html', true)
        }
    } else {
        alert("Invalid Username or Password Please try again");
        window.replace('index.html', true);
    }

}