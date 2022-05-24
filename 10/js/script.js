
let header = document.querySelector('.main-header')
let burger = document.querySelector('.main-header__toggle')

header.classList.remove('main-header--nojs')
header.classList.remove('main-header--opened')
header.classList.add('main-header--closed')

burger.addEventListener('click', () => {
  header.classList.toggle('main-header--opened')
  header.classList.toggle('main-header--closed')
})
