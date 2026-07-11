function register(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username=="" || password==""){
    alert("Nhập đầy đủ thông tin");
    return;
}

alert("Đăng ký thành công");

}
