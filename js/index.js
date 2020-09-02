const btn = document.querySelector('.sidemenu-header_btn')
const menu = document.querySelector('.sidemenu')

btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded")
    menu.classList.toggle("menu-collapsed")
    document.querySelector("body").classList.toggle("body-expanded")
})