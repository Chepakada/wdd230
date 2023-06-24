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

