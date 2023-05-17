const slides = ["hero.jpeg", "slide2.jpeg", "slide3.jpeg", "slide4.jpeg", "slide5.jpeg"];

var xForSlide = () => {
    const time = new Date().getSeconds();
    return time;
}

function slideshow(slides){
    const interval = xForSlide();
    
    document.querySelector(".hero-image").src = `./images/slideshow/${slides[interval % slides.length]}`;
}



setInterval(function() {
    slideshow(slides);
}, 2000);

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