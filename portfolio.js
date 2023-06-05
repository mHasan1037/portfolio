//buger click on the nav
const menuBtn = document.getElementById('burger-menu')
const navItems = document.getElementById('nav-items');
const burgerIcon = document.querySelector('.fa-solid.fa-bars')
const navCloseIcon = document.querySelector('.fa-solid.fa-xmark')

let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
   navItems.classList.toggle('showNav')
   menuOpen = !menuOpen;

   if(menuOpen){
    burgerIcon.style.display = 'none';
    navCloseIcon.style.display = 'block';
    } else {
        burgerIcon.style.display = 'block';
        navCloseIcon.style.display = 'none';
    }

})

// typewritter effect text change
const text = document.querySelector('.sec-text');

const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = 'Front end developer'
    }, 0)

    setTimeout(()=>{
        text.textContent = 'JavaScript developer'
    }, 4000)

    setTimeout(()=>{
        text.textContent = 'React developer'
    }, 8000)
}

textLoad()

setInterval(()=>{
    textLoad()
}, 12000)