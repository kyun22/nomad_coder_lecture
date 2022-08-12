const images = ["1.png", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const img = document.createElement("img");
img.setAttribute("src", `img/${randomImage}`);
document.body.appendChild(img);
