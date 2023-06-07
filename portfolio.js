import { portfolioData } from './portData.js';

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


//fixing the nav bar...

const navLinks = document.querySelectorAll('.navLink')

window.addEventListener('resize', navHideResponsive)

function navHideResponsive(){
    if(window.innerWidth < 768){
        navLinks.forEach((link, idx)=>{
            link.addEventListener('click', ()=>{
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
        })
    }
}

navHideResponsive()



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


//displaying all portfolio data in the html page
const portContainer = document.querySelector('.portfolio-container')

portfolioData.slice(0, 6).forEach((port, idx)=>{
    const {id, name, type, webLink, codeLink, img, techs} = port
   
    const box = document.createElement('div')
    box.innerHTML = `
            <div class="portfolio-box" id=${codeLink}>
                    <img class="portImg" src=${img} />
                    <div class="portOverlay">
                        <i class="fa-regular fa-eye"></i>
                        <div class="port-textBox">
                            <h3>${name}</h3>
                            <p>
                              ${techs.map((tech, idx) => tech)}
                            </p>
                        </div>
                    </div>
            </div>
    `

    portContainer.appendChild(box)
})


// on click of the portfolio box you will see the data in the modal
const portIds = document.querySelectorAll('.portfolio-box')

portIds.forEach((ids, idx)=>{
    ids.addEventListener('click', ()=>{
        getModal(ids.id)
    })
})

function getModal(idIs){
    const res = portfolioData.filter((data) => data.codeLink === idIs)

    const {id,img, name, type, webLink, codeLink, techs} = res[0]

    const modalContainer = document.querySelector('.modal-container')
    modalContainer.classList.add('modal-visible')

    modalContainer.innerHTML = `
        <div class="modal-box">
                <div class="close-modal">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <h1>${name}</h1>
                <p>This website is made for my portfolio only.</p>
                <div class="modal-options">
                    <div>
                        <i class="fa-brands fa-windows"></i>
                        <p>Website</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-link"></i>
                        <a href=${webLink} target="_blank">Source code</a>
                    </div>
                    <div>
                        <i class="fa-brands fa-codepen"></i>
                        <p>${techs.map(tech => tech)}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-tv"></i>
                        <a href=${codeLink}>Live Preview</a>
                    </div>
                </div>

                <img src=${img} />
        </div>
    `

    

    const closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click', ()=>{
        modalContainer.classList.remove('modal-visible')
    })
}













