function login() {
    let user = document.getElementById("username");
    let pass = document.getElementById("password");

    // console.log("username: " + user.value);
    // console.log("password: " + pass.value);
    if(user.value == "admin" && pass.value == "admin123"){
        alert("Selamat Datang");
        window.location="admin.html";
    }
    else{
        alert("Username atau Password salah");
    }
}
