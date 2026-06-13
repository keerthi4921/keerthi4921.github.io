document.getElementById("details")
.addEventListener("submit",function(event)
{
event.preventDefault();
let Name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let Phone=document.getElementById("Phone").value;
let dob=document.getElementById("dob").value;
let age=document.getElementById("age").value;
let gender=document.querySelector('input[name="gender"]:checked').value;
let address=document.getElementById("address").value;
let Documents=[];
document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(item){
    Documents.push(item.value);

});
document.getElementById("p1").innerText="Name:"+Name;
document.getElementById("p2").innerText="Email:"+email;
document.getElementById("p3").innerText="Mobile no:"+Phone;
document.getElementById("p4").innerText="Age:"+age;
document.getElementById("p5").innerText="Gender:"+gender;
document.getElementById("p6").innerText="Address:"+address;
document.getElementById("p7").innerText="Documents:"+Documents;

let image=document.getElementById("image").files[0];
if(image)
{
    let read=new FileReader();
    read.onload=function(e)
    {
        document.getElementById("dp").src=e.target.result;
    };
    read.readAsDataURL(image);
}


});



