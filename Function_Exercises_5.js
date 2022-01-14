function find(a){
    let star = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    for(let i=0;i<star.length;i++){
        if (a === star[i]){
            result = constellation[i];
            break;
        }
        else{
            result = "không tìm thấy ngôi sao bạn vừa nhập"
        }
    }
}

function run(){
    let a = document.getElementById("input").value;
    find(a);
    document.getElementById("result").innerText = result;
}

