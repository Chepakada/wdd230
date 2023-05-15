const date = new Date();
document.getElementById("year").innerText = date.getFullYear();

const cardBoxes = document.querySelectorAll(".card-box")

cardBoxes.forEach(cardBox => cardBox.addEventListener("click", ()=>{
    window.location.href = "./index.html"
}))