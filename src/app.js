const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toogleButton (){
    navList.classList.toogle('show')
}
hamburgerButton.addEventListener('click', toogleButton)