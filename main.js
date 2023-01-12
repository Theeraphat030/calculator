document.getElementById("calculator").addEventListener("click",function(){
    var num1 =  document.getElementById("num1").value;
    var num2 =  document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "SUM :" +sum;
    document.getElementById("result").innerHTML = "SUM :" -sum;
    document.getElementById("result").innerHTML = "SUM :" *sum;
    document.getElementById("result").innerHTML = "SUM :" /sum;
});
function myalert(){
    alert("สวัสดีนะจั้ฟ")
}
const img = document.createElement("img");
img.src = "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/316825163_193527369834181_550406221170144777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzGBcjSmh-uC54YN-XopO0rwFiEfUHznWvAWIR9QfOdbI2niDqd6Wg5H441OT2r41ydL_cZHTeuoRuMwt7Ls9l&_nc_ohc=u1J8KzyIq1QAX9BLU8w&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfBPcwvgOefssUTyjNjjFOGVCB8lBpJBJ5tNByN5_UnSTw&oe=63C523C3"
img.style.width = "200px"

document.getElementById("myDiv").appendChild(img);