let user =
JSON.parse(localStorage.getItem("loginUser"));


// kiểm tra quyền

if(!user || user.role!=="ADMIN"){

alert("Bạn không có quyền truy cập");

location.href="index.html";

}



document.getElementById("adminName").innerHTML =
"Xin chào Admin: " + user.username;



function showUsers(){


let users =
JSON.parse(localStorage.getItem("users")) || [];



let html="<h3>Danh sách người chơi</h3>";



users.forEach(u=>{


html += `

<div>

👤 ${u.username}

<br>

Quyền: ${u.role}

<br>

⚔️ Lực chiến: ${u.power}

<br>

⭐ Danh vọng: ${u.fame}

<hr>

</div>

`;



});



document.getElementById("users").innerHTML=html;


}




function logout(){

localStorage.removeItem("loginUser");

location.href="index.html";

}