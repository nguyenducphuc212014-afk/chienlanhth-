let admin = {
    username: "admin",
    password: "123456",
    role: "ADMIN",
    server: null,
    power: 999999,
    fame: 999999
};

let users = JSON.parse(localStorage.getItem("users")) || [];

users.push(admin);

localStorage.setItem(
    "users",
    JSON.stringify(users)
);

alert("Đã tạo tài khoản Admin");