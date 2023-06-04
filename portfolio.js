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