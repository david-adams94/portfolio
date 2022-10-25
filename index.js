const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

document.getElementById('contactPrompt').onclick = function() {
    document.getElementById('contact').style.display = "block";
    document.getElementById('defaultFoot').style.display = "none";
}

document.getElementById('navContact').onclick = function() {
    document.getElementById('contact').style.display = "block";
    document.getElementById('defaultFoot').style.display = "none";
}

document.getElementById('exitContact').onclick = function() {
    document.getElementById('contact').style.display = "none";
    document.getElementById('defaultFoot').style.display = "flex";  
}

document.getElementById('infoPrompt').onclick = function() {
    document.getElementById('projectLinks').style.display = "block";
    document.getElementById('infoPromptCont').style.display = "none";
}