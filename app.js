const slides = document.querySelectorAll('.slide')  //Получаем слайды из html

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })

}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')

    })
}

function chBackcolor(color) {
    document.body.style.background = color
    
    
 }
 

 