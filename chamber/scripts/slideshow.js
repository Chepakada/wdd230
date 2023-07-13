const slides = ["slide2.webp", "hero.webp", "slide3.webp", "slide4.webp", "slide5.webp"];

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
}, 3000);

