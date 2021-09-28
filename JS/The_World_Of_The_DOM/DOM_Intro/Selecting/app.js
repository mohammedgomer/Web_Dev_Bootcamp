// const allImgs = document.getElementsByTagName('img');

// for (let img of allImgs) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ix…1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
// }

// const squareImages = document.getElementsByClassName('square');


// for (let imgs of squareImages) {
//     imgs.src = 'https://cdn.motor1.com/images/mgl/7xNMo/s1/bulletproof-ferrari-458-speciale-by-addarmor-front-view.jpg';
// }

const aTags = document.querySelectorAll('p a');

for (let tags of aTags) {
    console.log(tags.href);
}

