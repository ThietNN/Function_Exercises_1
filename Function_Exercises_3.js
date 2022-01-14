function run(x,y){
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    if (x>y){
        alert("Số thứ nhất lớn hơn số thứ hai!");
    }
    else{
        z = x + y;
        document.getElementById("result").innerText = z;
    }
}