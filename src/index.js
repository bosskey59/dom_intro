console.log('%c Hello, World!', 'color: orange')

const container = document.querySelector("#container")

// const para= document.createElement('p')
// const text = document.createTextNode("Hello There")

// para.appendChild(text)

// container.appendChild(para)

dankMemes.forEach(meme => {
    const image = document.createElement('img')
    image.src = meme
    container.appendChild(image)  
});


