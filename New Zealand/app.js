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