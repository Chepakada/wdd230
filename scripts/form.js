const userName = document.getElementById("userName");
const conUserName = document.getElementById("conUserName");

conUserName.addEventListener("focusout",()=>{
    if (userName.value != conUserName.value){
        alert("password and username doesn't match.")
    }
})