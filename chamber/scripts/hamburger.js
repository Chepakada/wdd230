const hamburger = document.getElementById("hamburger")

function handleResize(){
if (window.innerWidth < 768){
    hamburger.style.display="block";
    hamburger.textContent = "☰" ;
    hamburger.style.textAlign = "center";
    hamburger.style.padding= 2
    hamburger.style.backgroundColor = "#E3E8E9";
    document.querySelector("nav").style.display= "none";
}
else{
    hamburger.style.display= "none";
    document.querySelector("nav").style.display = "flex";
}
}

var x = false;




window.addEventListener("resize", handleResize);
handleResize();

hamburger.addEventListener("click", ()=>{
    
    if (x === false){
        
        document.querySelector("nav").style.display = "flex";
        x = true;
    }
    else{
        document.querySelector("nav").style.display = "none";
        x = false;
    }
})