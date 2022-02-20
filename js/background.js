const images = [
    "1.jpeg",
    "3.jpeg"
]

const chosenImage = (images[Math.floor(Math.random() * images.length)]);

const bgImage = document.querySelector("img");

bgImage.setAttribute("src", `img/${chosenImage}`);

    
    
    //`img/${chosenImage}`);

