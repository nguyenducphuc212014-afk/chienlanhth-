let user =
JSON.parse(localStorage.getItem("loginUser"));


// chưa đăng nhập

if(!user){

alert("Bạn chưa đăng nhập");

location.href="index.html";

}



// không cho Admin vào khu chơi

if(user.role==="ADMIN"){

location.href="admin.html";

}



document.getElementById("player").innerHTML =
"👤 Người chơi: "
+ user.username;



function selectServer(id){


user.server=id;



localStorage.setItem(
"loginUser",
JSON.stringify(user)
);



let users =
JSON.parse(localStorage.getItem("users"));



let index =
users.findIndex(
u=>u.username===user.username
);



users[index]=user;



localStorage.setItem(
"users",
JSON.stringify(users)
);



showInfo();

}




function showInfo(){


document.getElementById("info").innerHTML=`

<h3>
🌍 Server: ${user.server || "Chưa chọn"}
</h3>


<p>
⚔️ Lực chiến: ${user.power}
</p>


<p>
⭐ Danh vọng: ${user.fame}
</p>


<p>
💰 Vàng: 1000
</p>


<p>
🌾 Lương thực: 1000
</p>


`;

}



function logout(){

localStorage.removeItem("loginUser");

location.href="index.html";

}



showInfo();