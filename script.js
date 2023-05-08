const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  // 4. function : click right button
  activeSlide++

  if (activeSlide >= slides.length) {
    activeSlide = 0
  }

  setActiveSlide()
  setBgToBody()
})

leftBtn.addEventListener('click', () => {
  //3. function : click left button
  activeSlide--

  console.log(activeSlide)

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
  setBgToBody()
})

setBgToBody()

function setBgToBody() {
  // 1. function :  bodynin image i degistirir
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  //2.function : active slide i ayarlar
  slides.forEach(slide => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}
