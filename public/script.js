// Testing logs
console.log('script.js file loaded');

// JS DOM Elements
document.getElementById('h1').style.color = "green";

document.querySelector('#ghibliImage').addEventListener('click', () => {
    console.log('clicked');
    fetchImage();
})


//  fetch image from backend server file
const fetchImage = async () => {
    // Remove image if it already exists on page
    if (document.querySelector('#ghibliImgId') != null) {
        document.querySelector('#ghibliImgId').remove();
    }
    
    // Fetch image
    const response = await fetch('/ghiblipic');
    const data = await response.json();
    // random image
    const randomImage = data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl;
    const randomAlt = data.value[Math.floor(Math.random() * data.value.length)].name;
    console.log(data.value);

    // Create image
    let img = document.createElement('img');
    img.id = 'ghibliImgId'
    img.src = randomImage;
    img.alt = randomAlt;
    document.querySelector('body').appendChild(img);
    }
