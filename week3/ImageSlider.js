// 1. Declare a variable and set it to 0 to be the starting point.
let currentIndex = 0;

// 2. Declare images variable which will be an empty array.
const images = [];

// 3. Declare a variable to set the time interval between each image slide, and set it to any time value in ms.
const intervalTime = 2000; // 2 seconds interval

// 4. Create the images list which will be the array value with image paths.
images.push('iamges/1.jpg');
images.push('iamges/2.jpg');
images.push('iamges/3.jpg');
images.push('iamges/4.jpg');
images.push('images/5.jpg');
images.push('images/6.jpg');
images.push('images/7.jpg');
images.push('images/8.jpg');
// Add more image paths as needed.

// 5. Create a function that changes the source ('src') of the images element with the name 'slide' to display different images from the 'images’ array.
function changeImage() {
    const slide = document.getElementById('slide');
    slide.src = images[currentIndex];
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

// 6. Run the function every x seconds.
setInterval(changeImage, intervalTime);

// 7. Run the function when the page loads.
window.onload = changeImage;
