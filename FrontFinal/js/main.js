var navbar  = document.getElementById('nav')
window.addEventListener('scroll', (event) =>{
    console.log(window.scrollY)
 navbar.classList.toggle("sticky", window.scrollY > 0)
})