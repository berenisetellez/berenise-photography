// Nav Function

const menuHamburger = document.querySelector('#hamburger')

const menu = document.querySelector('.menu')

menuHamburger.addEventListener('click', () => {
    menu.classList.add('menu-open')
})

const close = document.querySelector('#menu-close')

close.addEventListener('click', () => {
    menu.classList.remove('menu-open')
})

// Carousel function

let currentImgIndex = 0

const images = ['auckland.jpg', 'harbourBridge.jpg', 'flag.jpg', 'dolphines.jpg', 'pinkSheep.jpg']

const mainImage = document.querySelector ('#mainImage')

mainImage.setAttribute('src', images[currentImgIndex])

const next = document.querySelector ('.next')
console.log(next)

next.addEventListener('click', () => {
    if (currentImgIndex >= images.length - 1) {
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
})

const prev = document.querySelector ('.prev')

prev.addEventListener('click', () => {
    if (currentImgIndex === 0) {
        currentImgIndex = 3
    } else {
        currentImgIndex -= 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
})
