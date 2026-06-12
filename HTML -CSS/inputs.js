function greet_afternoon(){
    let text=document.getElementById("greet");
    text.innerText="Hlo";
}

function hi(){
    let a = document.getElementById("hi");
    a.src = "./files/hi.jpeg";
}

function hlo(){
    let a=document. getElementById("hi"); 
    a.src="./files/hlo.jpeg";
}
function Change_color(){
    let colour=document.getElementById("cap");

    colour.style.backgroundColor="pink";
    let txt1=document.getElementById("Data");

    txt1.style.color="purple";
    let txt2=document.getElementById("greet");

    txt2.style.color="purple";
    
}