const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    SetBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length -1
    }

    SetBgToBody();
    setActiveSlide();
})

SetBgToBody();

function SetBgToBody() {
    body.style.background=slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');

        slides[activeSlide].classList.add('active')
    })
}