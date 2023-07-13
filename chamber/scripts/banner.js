const banner = document.getElementById("banner");

const day = new Date().getDay();


const content = () =>{
   
    const invitations = "Please come visit us every Wednesday at 7:00 P.M"

    return(
        `<div>
            <h3>${invitations}</h3>
        </div>`
    )
}
banner.innerHTML += content();

const cross = document.getElementById("cross");

cross.style.padding = "20px";

cross.addEventListener("click", ()=>{
    banner.style.display = "none";
})

if (![1, 2, 3].includes(day)){
    banner.style.display = "none";
}
banner.style.textAlign = "center";


